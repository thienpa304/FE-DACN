import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { ApprovalStatus } from 'src/constants/enum';
import { useMemo, useState, forwardRef, useEffect } from 'react';
import SelectInput from 'src/components/SelectInput';
import { v4 } from 'uuid';
import useQueryJobOwner from 'src/modules/jobs/hooks/useQueryJobOwner';
import { compareDegrees, compareExperience } from 'src/utils/compareEnum';
import { useQueryCandidateProfileByIdList } from 'src/modules/application/hooks/useQueryCandidateProfileById';
import dayjs from 'dayjs';
import { getFileByUrl } from 'src/common/firebaseService';
import pdfToText from 'react-pdftotext';
import {
  RoundOneCheck,
  RoundThreeCheck,
  RoundTwoCheck
} from 'src/modules/ai/roles';
import { Application } from 'src/modules/application/model';
import { Job } from 'src/modules/jobs/model';
import { User } from 'src/modules/users/model';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { preProcessText } from 'src/utils/inputOutputFormat';
import sendChatGPTRequest from 'src/modules/ai/sendChatGPTRequest';
import { dataList } from '.';

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
      <Link {...props} to={isInternal ? url : v4()} style={sx}>
        {children}
      </Link>
    );
  }
);

const FAIL_SCORE = 0; // < 30
const LOW_SCORE = 30; // 30 - 80
const NORMAL_SCORE = 80; // 80 - 120
const HIGH_SCORE = 120; // higher than 120

type ProfileTypeInfo = {
  personal_information: User;
  online_profile?: OnlineProfile;
  attached_document?: AttachedDocument;
  application: Omit<Application, 'applicationType'> & {
    id: number;
    applicationType: string;
    matchingScore: number;
  };
};

type ProfileApplicationType = {
  id: number;
  employee_Profile: ProfileTypeInfo;
  employer_Requirement: Partial<Job>;
};

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

const renderMatchingScore = (data, isAnalyzing: boolean) => {
  if (isAnalyzing) return <CircularProgress />;
  let result = '';
  if (data.value >= HIGH_SCORE) result = 'Cao';
  else if (data.value >= NORMAL_SCORE && data.value < HIGH_SCORE)
    result = 'Trung bình';
  else if (data.value >= LOW_SCORE && data.value < NORMAL_SCORE)
    result = 'Thấp';
  else if (data.value < LOW_SCORE) result = 'Không phù hợp';

  return data.value === undefined || data.value === null ? (
    <Typography>Chưa xác định</Typography>
  ) : (
    <Box
      sx={{
        width: '90%',
        borderRadius: 3,
        p: 1,
        bgcolor:
          data.value >= HIGH_SCORE
            ? '#ffc107'
            : data.value >= NORMAL_SCORE
            ? '#4caf50'
            : data.value >= LOW_SCORE
            ? '#b5b5b5'
            : '#efefef',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {result}
    </Box>
  );
};

export default function Table(props) {
  const { pageSize, handleChangePage, page, isLoading, totalResults } = props;
  const data = dataList.value;

  // data : danh sách Application
  const [analyzedProfile, setAnalyzedProfile] =
    useState<ProfileApplicationType[]>(data);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showList, setShowList] = useState([]);
  const [roundOneFinished, setRoundOneFinished] = useState(false);
  const [roundTwoFinished, setRoundTwoFinished] = useState(false);
  const [roundThreeFinished, setRoundThreeFinished] = useState(false);
  const [passRoundOneProfiles, setPassRoundOneProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [passRoundTwoProfiles, setPassRoundTwoProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [start, setStart] = useState(false);
  const { jobs } = useQueryJobOwner();

  const idList = data.map((item) => item?.application_id);
  const { data: applicationDetailList } =
    useQueryCandidateProfileByIdList(idList);
  const { mutate } = useMutateApplicationStatus();

  const firstRoundForGeneralInfo = (job, profile) => {
    const { personal_information, online_profile, attached_document } = profile;

    const age =
      dayjs().year() - dayjs(personal_information?.dob, 'YYYY-MM-DD').year();

    if (
      job?.sex !== personal_information?.sex ||
      job?.minAge > age ||
      job?.maxAge < age
    )
      return -10;

    if (online_profile && !isProfileQualified(online_profile, job)) return -10;

    if (attached_document && !isProfileQualified(attached_document, job))
      return -10;

    return 30;
  };

  const isProfileQualified = (profile, job) => {
    const { profession, degree, experience } = profile;

    if (!profession.includes(job?.profession)) return false;

    if (compareDegrees(degree, job?.degree) < 0) return false;

    if (compareExperience(experience, job?.experience) < 0) return false;

    return true;
  };

  const fetchDataFromUrl = async (url, type) => {
    try {
      const filePath = await getFileByUrl(url);
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
      const blob = await response.blob();
      return pdfToText(blob);
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const readCVData = async (employee_Profile) => {
    if (employee_Profile?.attached_document) {
      const text = await fetchDataFromUrl(
        employee_Profile.attached_document.CV,
        'attached_document'
      );
      const preProcessText = text
        ?.replace(/[^\w\s,+()@.:\/-]/g, '')
        .replace(/\s+/g, ' ');
      return preProcessText
        ? {
            ...employee_Profile,
            attached_document: {
              ...employee_Profile.attached_document,
              CV: preProcessText
            }
          }
        : null;
    }
    return null;
  };

  const readEnclosedCVData = async (employee_Profile) => {
    if (
      employee_Profile?.application?.applicationType === 'Nộp nhanh' &&
      employee_Profile?.application?.CV
    ) {
      const text = await fetchDataFromUrl(
        employee_Profile.application.CV,
        'enclosed_CV'
      );
      const preProcessText = text
        ?.replace(/[^\w\s,+()@.:\/-]/g, '')
        .replace(/\s+/g, ' ');

      if (preProcessText) {
        return {
          ...employee_Profile,
          application: { ...employee_Profile.application, CV: preProcessText }
        };
      }

      return employee_Profile;
    }
    return null;
  };

  const fetchAndProcessCVData = async (dataToAnalyze, dataProcessor) => {
    return Promise.all(
      dataToAnalyze.map(async (data) => ({
        ...data,
        employee_Profile: await dataProcessor(data.employee_Profile)
      }))
    );
  };

  const filterAndMapProfiles = (dataList) => {
    return dataList
      .filter((data) => data.employee_Profile)
      .map(({ employee_Profile, employer_Requirement }) => ({
        employee_Profile,
        employer_Requirement
      }));
  };

  const matchProfileById = (
    analyzedProfile,
    cvEnclosedProfileList,
    attachProfileList
  ) => {
    console.log(
      '****',
      analyzedProfile.map((item) => {
        const matchedItem =
          cvEnclosedProfileList.find(
            (cvItem) => cvItem.employee_Profile.id === item.id
          ) ||
          attachProfileList.find(
            (attachItem) => attachItem.employee_Profile.id === item.id
          );
        return matchedItem ? matchedItem.employee_Profile : item;
      })
    );

    return analyzedProfile.map((item) => {
      const matchedItem =
        cvEnclosedProfileList.find(
          (cvItem) => cvItem.employee_Profile.id === item.id
        ) ||
        attachProfileList.find(
          (attachItem) => attachItem.employee_Profile.id === item.id
        );
      return matchedItem ? matchedItem.employee_Profile : item;
    });
  };

  const review = async (
    dataToAnalyze: ProfileApplicationType[],
    round: number,
    resetMatchingScoreList?
  ) => {
    setIsAnalyzing(true);
    let result;
    console.log('dataToAnalyze', dataToAnalyze);

    switch (round) {
      case 1:
        console.log('Start round 1');
        const attachedDocumentList = await fetchAndProcessCVData(
          dataToAnalyze,
          readCVData
        );
        const cvEnclosedList = await fetchAndProcessCVData(
          dataToAnalyze,
          readEnclosedCVData
        );

        const attachProfileList = filterAndMapProfiles(attachedDocumentList);

        const cvEnclosedProfileList = filterAndMapProfiles(cvEnclosedList);

        console.log('cvEnclosedProfileList', cvEnclosedProfileList);

        const cvContentProfile = matchProfileById(
          resetMatchingScoreList,
          cvEnclosedProfileList,
          attachProfileList
        );

        setAnalyzedProfile(() => cvContentProfile);

        result = await sendChatGPTRequest(
          RoundOneCheck,
          cvEnclosedProfileList
        ).catch(() => []);
        handleAnalyzeResult(result);
        break;

      case 2:
        console.log('Start round 2');
        result = await sendChatGPTRequest(
          RoundTwoCheck,
          passRoundOneProfiles.map((item) => {
            return {
              ...item,
              employer_Requirement: {
                skillRequirements: item.employer_Requirement.skillRequirements
              }
            };
          })
        ).catch(() => []);
        handleAnalyzeResult(result);
        break;

      case 3:
        console.log('Start round 3');
        result = await sendChatGPTRequest(
          RoundThreeCheck,
          passRoundOneProfiles.map((item) => {
            return {
              id: item.id,
              employee_Profile: {
                keywords: item.employee_Profile.application.keywords
              },
              employer_Requirement: {
                keywords: item.employer_Requirement.keywords
              }
            };
          })
        ).catch(() => []);
        handleAnalyzeResult(result);
        break;
      default:
        break;
    }
  };

  const handleAnalyzeResult = async (result: any[]) => {
    const responses = result?.map((data) => {
      if (data) return JSON.parse(data);
    });
    console.log('analyzedProfile', analyzedProfile);

    const updatedAnalyzedProfile = await Promise.all(
      analyzedProfile?.map(async (profile) => {
        const foundItem = responses.find((res) => res?.id === profile?.id);

        let matchingScore: number;
        if (foundItem?.result !== undefined) {
          matchingScore = profile.employee_Profile.application.matchingScore
            ? profile.employee_Profile.application.matchingScore +
              foundItem.result
            : foundItem.result;
        } else if (
          !roundOneFinished &&
          (profile?.employee_Profile?.online_profile ||
            profile?.employee_Profile?.attached_document)
        ) {
          matchingScore = firstRoundForGeneralInfo(
            profile.employer_Requirement,
            profile.employee_Profile
          );
        } else {
          matchingScore = profile.employee_Profile.application.matchingScore;
        }

        console.log('matchingScore', matchingScore);

        return {
          ...profile,
          employee_Profile: {
            ...profile.employee_Profile,
            application: {
              ...profile.employee_Profile.application,
              matchingScore: matchingScore
            }
          }
        };
      })
    );

    const passRoundDataThreshold = 30;
    const passRoundData = updatedAnalyzedProfile?.filter(
      (data) =>
        data.employee_Profile.application.matchingScore >=
        passRoundDataThreshold
    );
    setPassRoundOneProfiles(passRoundData);

    setAnalyzedProfile(() => updatedAnalyzedProfile);
    const resultList = updatedAnalyzedProfile?.map((profile) => ({
      ...profile.employee_Profile.application,
      id: profile.id
    }));
    console.log('resultList', resultList);

    setShowList(resultList);
    setIsAnalyzing(false);
    if (!roundOneFinished) setRoundOneFinished(true);
    else if (!roundTwoFinished) setRoundTwoFinished(true);
    else if (!roundThreeFinished) setRoundThreeFinished(true);
  };

  const preprocessJobData = (job) => ({
    id: job?.postId,
    jobTitle: job?.jobTitle,
    profession: job?.profession,
    jobDescription: preProcessText(job?.jobDescription),
    jobRequirements: preProcessText(job?.jobRequirements),
    benefits: preProcessText(job?.benefits),
    workAddress: job?.workAddress,
    minAge: job?.minAge,
    maxAge: job?.maxAge,
    sex: job?.sex,
    requiredSkills: job?.requiredSkills,
    employmentType: job?.employmentType,
    degree: job?.degree,
    experience: job?.experience,
    positionLevel: job?.positionLevel,
    keywords: job?.keywords
  });

  const preprocessProfileData = (profile) => ({
    ...profile,
    personal_information: {
      dob: profile?.personal_information?.dob,
      sex: profile?.personal_information?.sex
    }
  });

  const matchJobAndProfile = (): ProfileApplicationType[] =>
    data
      ?.map((item) => {
        const job = jobs?.find(
          (job) => job?.postId === item?.jobPosting?.postId
        );
        const profile = applicationDetailList?.find(
          (app) => app?.application?.application_id === item?.application_id
        );
        if (!job || !profile) return null;

        const preprocessedJobData = preprocessJobData(job);
        const preprocessedProfileData = preprocessProfileData(profile);

        return {
          id: item?.application_id,
          employer_Requirement: preprocessedJobData,
          employee_Profile: {
            ...preprocessedProfileData,
            application: {
              ...preprocessedProfileData.application,
              jobTitle: job?.jobTitle,
              keywords: preprocessedProfileData?.application?.keywords
                ? preprocessedProfileData?.application?.keywords
                : preprocessedProfileData?.online_profile
                ? profile?.online_profile.keywords
                : preprocessedProfileData?.attached_document?.keywords
            }
          }
        };
      })
      .filter(Boolean);

  // First time render the page
  useEffect(() => {
    if (!jobs.length || !applicationDetailList.length) return;

    const dataToAnalyze = matchJobAndProfile();
    console.log('dataToAnalyze', dataToAnalyze);

    const resultList = dataToAnalyze?.map((item) => {
      item.employee_Profile.application.id = item.id;
      return item.employee_Profile.application;
    });
    setShowList(() => resultList);
    setAnalyzedProfile(() => dataToAnalyze);
  }, [data, jobs.length, applicationDetailList.length]);

  // Start Round 1
  useEffect(() => {
    // go into round 1
    if (start) {
      const resetMatchingScoreList = analyzedProfile.map((pofile) => {
        return {
          ...pofile,
          employee_Profile: {
            ...pofile.employee_Profile,
            application: {
              ...pofile.employee_Profile.application,
              matchingScore: 0
            }
          }
        };
      });
      setAnalyzedProfile(() => resetMatchingScoreList);
      review(resetMatchingScoreList, 1, resetMatchingScoreList);
    }
  }, [start]);

  // Start Round 2, 3
  useEffect(() => {
    if (start) {
      if (roundOneFinished && !roundTwoFinished) {
        console.log('passRoundOneProfiles', passRoundOneProfiles);

        // go to round 2
        if (passRoundOneProfiles.length > 0) review(passRoundOneProfiles, 2);
        else {
          setStart(false);
          setRoundOneFinished(false);
          setRoundTwoFinished(false);
          console.log('Finised All');
          Promise.all(
            showList.map((item) => {
              mutate([item.id, { matchingScore: item.matchingScore }]);
            })
          );
        }
      } else if (roundTwoFinished && !roundThreeFinished) {
        console.log('Round 2 finished');

        // go to round 3
        review(passRoundOneProfiles, 3);
      } else if (roundThreeFinished) {
        console.log('Round 3 finished');
        setStart(false);
        setRoundOneFinished(false);
        setRoundTwoFinished(false);
        console.log('Finised All');
        Promise.all(
          showList.map((item) => {
            mutate([item.id, { matchingScore: item.matchingScore }]);
          })
        );
      }
    }
  }, [roundOneFinished, roundTwoFinished, roundThreeFinished]);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Tên hồ sơ',
      minWidth: 220,
      renderCell: renderProfileName,
      sortable: true
    },
    {
      field: 'jobTitle',
      headerName: 'Vị trí ứng tuyển',
      minWidth: 250,
      flex: 1,
      sortable: true
    },
    {
      field: 'applicationType',
      headerName: 'Loại hồ sơ',
      minWidth: 150,
      sortable: true
    },
    {
      field: 'status',
      headerName: 'Trạng thái tuyển dụng',
      minWidth: 180,
      renderCell: renderStatus,
      sortable: true
    },
    {
      field: 'matchingScore',
      headerName: 'Độ phù hợp',
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (data) => renderMatchingScore(data, isAnalyzing),
      sortable: true
    }
  ];

  return (
    <>
      <Box sx={{ justifyContent: 'right', display: 'flex' }}>
        <Button
          onClick={() => setStart(true)}
          variant="contained"
          size="small"
          sx={{ mr: 4 }}
          disabled={start}
        >
          Phân tích
        </Button>
      </Box>
      <TableData
        rows={showList}
        columns={columns}
        pagination
        paginationModel={{ page: page - 1, pageSize: pageSize }}
        sx={{ height: '72.7vh', width: '100%' }}
        paginationMode="server"
        onPaginationModelChange={(e) => handleChangePage(e.page + 1)}
        loading={isLoading}
        rowCount={totalResults}
      />
    </>
  );
}
