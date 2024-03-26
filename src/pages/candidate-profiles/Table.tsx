import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import { Button, Grid, Link } from '@mui/material';
import { Link as InternalLink } from 'react-router-dom';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { ApprovalStatus } from 'src/constants/enum';
import { useMemo, useState, forwardRef, useEffect } from 'react';
import SelectInput from 'src/components/SelectInput';
import { v4 } from 'uuid';
import useQueryJobById, {
  useQueryJobByIdList
} from 'src/modules/jobs/hooks/useQueryJobById';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import useQueryJobOwner from 'src/modules/jobs/hooks/useQueryJobOwner';
import ChatGPT from 'src/modules/ai/ChatGPT';
import { compareDegrees, compareExperience } from 'src/utils/compareEnum';
import useQueryCandidateProfileById, {
  useQueryCandidateProfileByIdList
} from 'src/modules/application/hooks/useQueryCandidateProfileById';
import dayjs from 'dayjs';
import { getFileByUrl } from 'src/common/firebaseService';
import pdfToText from 'react-pdftotext';
import {
  RoundOneCheck,
  RoundTwoCheck,
  cvInfomationFilter
} from 'src/modules/ai/roles';
import { Application } from 'src/modules/application/model';
import { Job } from 'src/modules/jobs/model';
import { User } from 'src/modules/users/model';

interface CustomLinkProps {
  to?: string;
  children: React.ReactNode;
  sx?: any;
  state?: any;
}

const CustomLink = forwardRef<HTMLButtonElement, CustomLinkProps>(
  (props, ref) => {
    const { to, children, sx } = props;

    const link = useMemo(() => {
      if (!to) return '#';
      return to;
    }, [to]);

    const isInternal = useMemo(() => {
      return link.startsWith('/') || link.startsWith('#');
    }, [link]);

    const url = link.slice(1);
    return (
      <InternalLink {...props} to={isInternal ? url : v4()} style={sx}>
        {children}
      </InternalLink>
    );
  }
);

const renderProfileName = (data) => {
  const url = data?.row?.CV ? data?.row?.CV : '#';

  return (
    <Grid container alignItems={'center'}>
      <CustomLink
        to={url}
        sx={{
          color: '#319fce',
          ':hover': {
            textDecoration: 'none'
          },
          textDecoration: 'none'
        }}
        state={{
          applicationId: data?.row?.id,
          CV: data?.row?.CV
        }}
      >
        {data.value || ''}
      </CustomLink>
    </Grid>
  );
};

const renderStatus = (data) => {
  const initValue = APPROVAL_STATUS.find(
    (item) => item.label === data.value
  ).value;

  const { mutate } = useMutateApplicationStatus();
  const [value, setValue] = useState(initValue);
  const handleChangeValue = (e) => {
    const value = e.target.value as ApprovalStatus;
    mutate([data.id, { status: value }]).then(() => {
      setValue(e.target.value);
    });
  };
  return (
    <SelectInput
      value={value}
      options={APPROVAL_STATUS}
      onChange={handleChangeValue}
    />
  );
};

const renderMatchingRate = (data) => {};

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tên hồ sơ',
    minWidth: 220,
    renderCell: renderProfileName
  },
  {
    field: 'jobTitle',
    headerName: 'Vị trí ứng tuyển',
    minWidth: 250,
    flex: 1
  },
  {
    field: 'applicationType',
    headerName: 'Loại hồ sơ',
    minWidth: 150
  },
  {
    field: 'status',
    headerName: 'Trạng thái tuyển dụng',
    minWidth: 180,
    renderCell: renderStatus
  },
  {
    field: 'matchingRate',
    headerName: 'Độ phù hợp',
    minWidth: 150,
    align: 'center',
    headerAlign: 'center'
    // renderCell: renderStatus
  }
];

type ProfileApplicationType = {
  id: number;
  profile: any;
  job: Job;
  // application: Application;
};

export default function Table(props) {
  const { data } = props;
  // data : danh sách Application
  const [analyzedProfile, setAnalyzedProfile] =
    useState<ProfileApplicationType[]>(data);
  const [message, setMessage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [answer, setAnswer] = useState();
  const [analyzedApplications, setAnalyzedApplications] = useState<
    Application[]
  >([]);
  const [showList, setShowList] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [roundOneFinished, setRoundOneFinished] = useState(false);
  const [roundTwoFinished, setRoundTwoFinished] = useState(false);
  const [compareMethod, setCompareMethod] = useState('');
  const [passRoundOneProfiles, setPassRoundOneProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [start, setStart] = useState(false);

  const { jobs } = useQueryJobOwner();
  const idList = data.map((item) => item?.application_id);
  const { data: applicationDetailList } =
    useQueryCandidateProfileByIdList(idList);

  const firstRoundForOnlineProfile = (job, profile) => {
    const age =
      dayjs().year() -
      dayjs(profile?.personal_information?.dob, 'YYYY-MM-DD').year();
    debugger;
    if (job?.sex !== profile?.personal_information?.sex) return 0;
    if (job?.minAge > age || job?.maxAge < age) return 0;

    if (!profile?.online_profile?.profession.includes(job?.profession))
      return 0;
    if (compareDegrees(profile?.online_profile?.degree, job?.degree) < 0)
      return 0;
    if (
      compareExperience(profile?.online_profile?.experience, job?.experience) <
      0
    )
      return 0;
    return 30;
  };

  const review = async (dataToAnalyze: ProfileApplicationType[]) => {
    console.log('dataToAnalyze', dataToAnalyze);

    if (!roundOneFinished) {
      // Read CV in Attached Document
      const attached_document_List = await Promise.all(
        dataToAnalyze
          .filter((data) => data.profile?.attached_document)
          .map(async (item) => {
            try {
              const filePath = await getFileByUrl(
                item?.profile?.attached_document?.CV
              );
              const response = await fetch(filePath);
              if (!response.ok) {
                throw new Error('Failed to fetch file');
              }
              const blob = await response.blob();
              const text = await pdfToText(blob);
              return {
                ...item,
                profile: {
                  ...item.profile,
                  attached_document: {
                    ...item.profile.attached_document,
                    CV: text
                  }
                }
              };
            } catch (error) {
              console.error('Error creating local URL:', error);
              return null; // or handle the error appropriately
            }
          })
      );

      // Read CV in CV Enclosed
      const cv_enclosed_List = await Promise.all(
        dataToAnalyze
          .filter(
            (data) => data.profile?.application?.applicationType === 'Nộp nhanh'
          )
          .map(async (item) => {
            try {
              const filePath = await getFileByUrl(
                item?.profile?.application?.CV
              );
              const response = await fetch(filePath);
              if (!response.ok) {
                throw new Error('Failed to fetch file');
              }
              const blob = await response.blob();
              const text = await pdfToText(blob);
              return {
                ...item,
                profile: {
                  ...item.profile,
                  application: {
                    ...item.profile.application,
                    CV: text
                  }
                }
              };
            } catch (error) {
              console.error('Error creating local URL:', error);
              return null; // or handle the error appropriately
            }
          })
      );

      const attachProfileList = attached_document_List.map((data) => ({
        profile: data?.profile,
        job: data?.job
      }));
      const cvEnclosedProfileList = cv_enclosed_List.map((data) => ({
        profile: data?.profile,
        job: data?.job
      }));

      setMessage(() => [...attachProfileList, ...cvEnclosedProfileList]);

      console.log('Start round 1');
      setCompareMethod(RoundOneCheck);
    } else {
      setMessage(() => passRoundOneProfiles);

      console.log('Start round 2', passRoundOneProfiles);
      setCompareMethod(RoundTwoCheck);
    }
    setIsAnalyzing(() => true);
    setSendRequest(() => true);
  };

  const handleAnalyzeResult = (result) => {
    const responses = result.map((data) => JSON.parse(data));
    console.log('responses', responses);
    console.log('analyzedProfile', analyzedProfile);

    const getFinishedData = async () => {
      debugger;
      // const newElement = result.map((data) => JSON.parse(data));
      const finishedData = analyzedProfile.map((item) => {
        // Kiểm tra xem id của profile có tồn tại trong idlist không
        const foundItem = responses.find((res) => res.id === item.id);
        // Nếu tồn tại, thêm thuộc tính matchingRate
        if (foundItem) {
          // return { ...profile, matchingRate: foundItem.result };
          return {
            ...item,
            profile: {
              ...item.profile,
              application: {
                ...item.profile.application,
                matchingRate: foundItem.result
              }
            }
          };
        } else if (
          item?.profile?.personal_information &&
          !roundOneFinished &&
          !roundTwoFinished
        ) {
          return {
            ...item,
            profile: {
              ...item.profile,
              application: {
                ...item.profile.application,
                matchingRate: firstRoundForOnlineProfile(item.job, item.profile)
              }
            }
          };
        }
        return item;
      });
      return finishedData;
    };

    getFinishedData().then((data) => {
      if (!roundOneFinished) {
        // round 1

        const PassRoundOneData = data.filter(
          (item) => item.profile.matchingRate >= 30
        );
        console.log('data to check PassRoundOneData', PassRoundOneData, data);
        setPassRoundOneProfiles(() => PassRoundOneData);
        setAnalyzedProfile(() => data);

        const resultList = data?.map((item) => {
          item.profile.application.id = item.id;
          console.log(item);
          return item.profile.application;
        });
        console.log('resultList', resultList);
        setShowList(() => resultList);
      } else {
        // round 2
        const PassRoundTwoData = data.filter(
          (item) => item.profile.matchingRate >= 60
        );
        const updatedAnalyzedProfile = analyzedProfile.map((prof) => {
          const foundItem = PassRoundTwoData.find(
            (item) => item.id === prof.id
          );
          if (foundItem) {
            return {
              ...prof,
              profile: {
                ...prof.profile,
                application: {
                  ...prof.profile.application,
                  matchingRate: foundItem.profile.matchingRate
                }
              }
            };
          }
          return prof;
        });
        setAnalyzedProfile(() => updatedAnalyzedProfile);

        const resultList = updatedAnalyzedProfile?.map((item) => {
          item.profile.application.id = item.id;
          console.log(item);
          return item.profile.application;
        });
        console.log('resultList', resultList);
        setShowList(() => resultList);
      }
      console.log('finishedData', data);
      setIsAnalyzing(() => false);
      setSendRequest(() => false);
      if (!roundOneFinished) setRoundOneFinished(() => true);
      else setRoundTwoFinished(() => true);
    });
  };

  useEffect(() => {
    if (roundOneFinished && !roundTwoFinished) {
      console.log('passRoundOneProfiles', passRoundOneProfiles);
      passRoundOneProfiles.length && review(passRoundOneProfiles);
    }
    if (roundTwoFinished) {
      console.log('Round 2 finished');
    }
  }, [roundOneFinished, roundTwoFinished]);

  useEffect(() => {
    if (!jobs.length || !applicationDetailList.length) return;
    const matchJobAndProfile = () => {
      const applicationData: ProfileApplicationType[] = data?.map((item) => {
        // tim cong viec co id = id cua profile
        const job = jobs?.find(
          (job) => job?.postId === item?.jobPosting?.postId
        );

        // tim don ung tuyen chi tiet co id = id trong item
        const profile = applicationDetailList?.find(
          (app) => app?.application?.application_id === item?.application_id
        );
        return {
          id: item?.application_id,
          job: job,
          profile: {
            ...profile,
            application: { ...profile.application, jobTitle: job?.jobTitle }
          }
        };
      });
      return applicationData;
    };
    const dataToAnalyze = matchJobAndProfile();
    console.log('data: ', dataToAnalyze);

    const resultList = dataToAnalyze?.map((item) => {
      item.profile.application.id = item.id;
      return item.profile.application;
    });
    console.log('resultList', resultList);
    setShowList(() => resultList);
    setAnalyzedProfile(() => dataToAnalyze);

    // go into round 1
    start && review(dataToAnalyze);
  }, [data, jobs.length, applicationDetailList.length, start]);

  return (
    <>
      <Box sx={{ height: '75vh', width: '100%' }}>
        <TableData rows={showList} columns={columns} />
      </Box>
      <Button onClick={() => setStart(true)}>send</Button>
      {start && (
        <ChatGPT
          request={compareMethod}
          content={message}
          setAnswer={handleAnalyzeResult}
          sendRequest={sendRequest}
        />
      )}
    </>
  );
}
