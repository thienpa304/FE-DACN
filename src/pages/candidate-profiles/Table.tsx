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
import { RoundOneCheck, RoundTwoCheck } from 'src/modules/ai/roles';
import { Application } from 'src/modules/application/model';
import { Job } from 'src/modules/jobs/model';
import { User } from 'src/modules/users/model';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { preProcessText } from 'src/utils/inputOutputFormat';
import sendChatGPTRequest from 'src/modules/ai/sendChatGPTRequest';

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

type ProfileTypeInfo = {
  personal_information: User;
  online_profile?: OnlineProfile;
  attached_document?: AttachedDocument;
  application: Omit<Application, 'applicationType'> & {
    id: number;
    applicationType: string;
    matchingRate: number; // Thay `number` bằng kiểu dữ liệu thích hợp nếu cần
  };
};

type ProfileApplicationType = {
  id: number;
  profile: ProfileTypeInfo;
  job: Job;
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

const renderMatchingRate = (data, isAnalyzing: boolean) => {
  if (isAnalyzing) return <CircularProgress />;
  let result = '';
  if (data.value >= 70) result = 'Cao';
  else if (data.value >= 30) result = 'Trung bình';
  else result = 'Thấp';
  return data.value === undefined ? (
    <Typography>Chưa xác định</Typography>
  ) : (
    <Box
      sx={{
        width: '80%',
        borderRadius: 3,
        p: 1,
        bgcolor:
          data.value >= 70
            ? '#ffc107'
            : data.value >= 30
            ? '#4caf50'
            : '#b5b5b5',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {result}
    </Box>
  );
};

export default function Table(props) {
  const { data, pageSize, handleChangePage, page, isLoading, totalResults } =
    props;
  console.log(totalResults);

  // data : danh sách Application
  const [analyzedProfile, setAnalyzedProfile] =
    useState<ProfileApplicationType[]>(data);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showList, setShowList] = useState([]);
  const [roundOneFinished, setRoundOneFinished] = useState(false);
  const [roundTwoFinished, setRoundTwoFinished] = useState(false);
  const [passRoundOneProfiles, setPassRoundOneProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [start, setStart] = useState(false);
  const { jobs } = useQueryJobOwner();
  const idList = data.map((item) => item?.application_id);
  const { data: applicationDetailList } =
    useQueryCandidateProfileByIdList(idList);

  const firstRoundForGeneralInfo = (job, profile) => {
    const { personal_information, online_profile, attached_document } = profile;

    const age =
      dayjs().year() - dayjs(personal_information?.dob, 'YYYY-MM-DD').year();

    if (
      job?.sex !== personal_information?.sex ||
      job?.minAge > age ||
      job?.maxAge < age
    )
      return 0;

    if (online_profile && !isProfileQualified(online_profile, job)) return 0;

    if (attached_document && !isProfileQualified(attached_document, job))
      return 0;

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

  const readCVData = async (profile) => {
    if (profile?.attached_document) {
      const text = await fetchDataFromUrl(
        profile.attached_document.CV,
        'attached_document'
      );
      const preProcessText = text
        ?.replace(/[^\w\s,+()@.:\/-]/g, '')
        .replace(/\s+/g, ' ');
      return preProcessText
        ? {
            ...profile,
            attached_document: {
              ...profile.attached_document,
              CV: preProcessText
            }
          }
        : null;
    }
    return null;
  };

  const readEnclosedCVData = async (profile) => {
    if (
      profile?.application?.applicationType === 'Nộp nhanh' &&
      profile?.application?.CV
    ) {
      const text = await fetchDataFromUrl(
        profile.application.CV,
        'enclosed_CV'
      );
      const preProcessText = text
        ?.replace(/[^\w\s,+()@.:\/-]/g, '')
        .replace(/\s+/g, ' ');

      if (preProcessText) {
        return {
          ...profile,
          application: { ...profile.application, CV: preProcessText }
        };
      }

      return profile;
    }
    return null;
  };

  const review = async (dataToAnalyze: ProfileApplicationType[]) => {
    setIsAnalyzing(true);

    if (!roundOneFinished) {
      console.log('start');

      const attachedDocumentPromises = dataToAnalyze.map(async (data) => ({
        ...data,
        profile: await readCVData(data.profile)
      }));

      const enclosedCVDataPromises = dataToAnalyze.map(async (data) => {
        return {
          ...data,
          profile: await readEnclosedCVData(data.profile)
        };
      });

      const attachedDocumentList = (
        await Promise.all(attachedDocumentPromises)
      ).filter((data) => data.profile);

      const cvEnclosedList = (await Promise.all(enclosedCVDataPromises)).filter(
        (data) => data.profile
      );
      const attachProfileList = attachedDocumentList.map((data) => ({
        profile: data,
        job: data.job
      }));

      const cvEnclosedProfileList = cvEnclosedList.map((data) => ({
        profile: data,
        job: data.job
      }));
      console.log('Start round 1');

      setAnalyzedProfile((prev) => {
        return prev.map((item) => {
          // Tìm phần tử có id giống với item.id trong cvEnclosedProfileList hoặc attachProfileList
          const matchedItem =
            cvEnclosedProfileList.find(
              (cvItem) => cvItem.profile.id === item.id
            ) ||
            attachProfileList.find(
              (attachItem) => attachItem.profile.id === item.id
            );

          // Nếu tìm thấy phần tử khớp, trả về phần tử mới, nếu không, trả về item hiện tại
          return matchedItem ? matchedItem.profile : item;
        });
      });
      const result = await sendChatGPTRequest(
        RoundOneCheck,
        cvEnclosedProfileList
      ).catch(() => []);
      handleAnalyzeResult(result);
    } else {
      console.log('Start round 2');
      const result = await sendChatGPTRequest(
        RoundTwoCheck,
        passRoundOneProfiles
      ).catch(() => []);
      handleAnalyzeResult(result);
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
        const matchingRate =
          foundItem?.result ??
          (!roundOneFinished &&
          (profile?.profile?.online_profile ||
            profile?.profile?.attached_document)
            ? firstRoundForGeneralInfo(profile.job, profile.profile)
            : profile.profile.application.matchingRate);

        return {
          ...profile,
          profile: {
            ...profile.profile,
            application: {
              ...profile.profile.application,
              matchingRate
            }
          }
        };
      })
    );

    const passRoundDataThreshold = 30;
    const passRoundData = updatedAnalyzedProfile?.filter(
      (data) => data.profile.application.matchingRate >= passRoundDataThreshold
    );
    setPassRoundOneProfiles(passRoundData);

    setAnalyzedProfile(updatedAnalyzedProfile);

    const resultList = updatedAnalyzedProfile?.map((profile) => ({
      ...profile.profile.application,
      id: profile.id
    }));
    setShowList(resultList);

    setIsAnalyzing(false);
    if (!roundOneFinished) setRoundOneFinished(true);
    else setRoundTwoFinished(true);
  };

  useEffect(() => {
    if (start) {
      if (roundOneFinished && !roundTwoFinished) {
        console.log('passRoundOneProfiles', passRoundOneProfiles);
        passRoundOneProfiles.length && review(passRoundOneProfiles);
      }
      if (roundTwoFinished) {
        console.log('Round 2 finished');
        setStart(false);
        setRoundOneFinished(false);
        setRoundTwoFinished(false);
      }
    }
  }, [roundOneFinished, roundTwoFinished]);

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
    skills: job?.skills,
    employmentType: job?.employmentType,
    degree: job?.degree,
    experience: job?.experience,
    positionLevel: job?.positionLevel
  });

  const preprocessProfileData = (profile) => ({
    ...profile,
    personal_information: {
      dob: profile?.personal_information?.dob,
      sex: profile?.personal_information?.sex
    }
  });

  const matchJobAndProfile = () => {
    return data
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
          job: preprocessedJobData,
          profile: {
            ...preprocessedProfileData,
            application: {
              ...preprocessedProfileData.application,
              jobTitle: job?.jobTitle
            }
          }
        };
      })
      .filter(Boolean);
  };

  useEffect(() => {
    if (!jobs.length || !applicationDetailList.length) return;

    const dataToAnalyze = matchJobAndProfile();

    const resultList = dataToAnalyze?.map((item) => {
      item.profile.application.id = item.id;
      return item.profile.application;
    });
    setShowList(() => resultList);
    setAnalyzedProfile(() => dataToAnalyze);
  }, [data, jobs.length, applicationDetailList.length]);

  useEffect(() => {
    // go into round 1
    start && review(analyzedProfile);
  }, [start]);

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
      field: 'matchingRate',
      headerName: 'Độ phù hợp',
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (data) => renderMatchingRate(data, isAnalyzing),
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
