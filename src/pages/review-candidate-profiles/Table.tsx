import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { useMemo, useState, forwardRef, useEffect } from 'react';
import SelectInput from 'src/components/SelectInput';
import { v4 } from 'uuid';
import useQueryJobByOwner from 'src/modules/jobs/hooks/useQueryJobByOwner';
import { useQueryCandidateApplicationByIdList } from 'src/modules/application/hooks/useQueryCandidateApplicationById';
import {
  ProfileApplicationType,
  preprocessJobData,
  preprocessProfileData,
  review,
  LOW_SCORE,
  NORMAL_SCORE,
  HIGH_SCORE,
  firstRoundForGeneralInfo,
  parseResponseJSONData
} from 'src/utils/reviewProfile';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useQueryJobByIdList } from 'src/modules/jobs/hooks/useQueryJobById';
import Pagination from 'src/components/Pagination';

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

const renderJobTitle = (data) => {
  if (data.value) {
    return (
      <Typography
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'wrap',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {data.value}
      </Typography>
    );
  }
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
  const { onSaveApplicationStatus } = useMutateApplicationStatus();
  const [value, setValue] = useState(null); // Initialize value as null

  useEffect(() => {
    if (!data.value || !APPROVAL_STATUS) return;
    const initValue = APPROVAL_STATUS.find(
      (item) => item.label === data.value
    )?.value;

    setValue(initValue); // Set the initial value
  }, [data.value]); // Run this effect whenever data.value changes

  const handleChangeValue = (newValue) => {
    onSaveApplicationStatus([data.id, { status: newValue.target.value }]).then(
      () => {
        setValue(newValue.target.value);
      }
    );
  };

  // Return the SelectInput component
  return (
    <SelectInput
      value={value}
      options={APPROVAL_STATUS}
      onChange={handleChangeValue}
    />
  );
};

export const renderMatchingScore = (data) => {
  // if (isAnalyzing) return <CircularProgress />;
  let result = '';
  if (data.value >= HIGH_SCORE) result = 'Cao';
  else if (data.value >= NORMAL_SCORE && data.value < HIGH_SCORE)
    result = 'Trung bình';
  else if (data.value >= LOW_SCORE && data.value < NORMAL_SCORE)
    result = 'Thấp';
  else if (data.value < 0) result = 'Không phù hợp';

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
    minWidth: 450,
    renderCell: renderJobTitle,
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
    renderCell: renderMatchingScore,
    sortable: true
  }
];

export default function Table(props) {
  const { pageSize, data, currentPage, totalPages, handlePageChange } = props;
  // data : danh sách Application
  const [analyzedProfile, setAnalyzedProfile] = useState<
    ProfileApplicationType[]
  >([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showList, setShowList] = useState([]);
  const [roundOneFinished, setRoundOneFinished] = useState(false);
  const [roundTwoFinished, setRoundTwoFinished] = useState(false);
  const [roundThreeFinished, setRoundThreeFinished] = useState(false);
  const [passRoundOneProfiles, setPassRoundOneProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [start, setStart] = useState(false);
  const [goToAnalyzeResult, setGoToAnalyzeResult] = useState({
    signal: false,
    resultData: null
  });

  const applicationIdList = data?.map((item) => item?.application_id);
  console.log(applicationIdList);

  const jobsIdList: Set<number> = new Set(
    data?.map((item) => {
      return item?.jobPosting?.postId;
    })
  );

  // Convert Set back to an array if needed
  const uniqueJobsIdList: number[] = [...jobsIdList];

  const { jobs, isLoading: isLoadingJobs } =
    useQueryJobByIdList(uniqueJobsIdList);

  const {
    data: applicationDetailList,
    isLoading: isLoadingApplication,
    refetch
  } = useQueryCandidateApplicationByIdList(applicationIdList);

  const { onSaveApplicationStatus } = useMutateApplicationStatus();

  const finishedAll = () => {
    setStart(false);
    setRoundOneFinished(false);
    setRoundTwoFinished(false);
    setRoundThreeFinished(false);
    setIsAnalyzing(false);
    setPassRoundOneProfiles([]);
    setGoToAnalyzeResult({ signal: false, resultData: null });
    setAnalyzedProfile([]);
  };

  const handleSetAnalyzedProfile = async (data: ProfileApplicationType[]) => {
    setAnalyzedProfile(data);
  };

  const handleIsAnalyzing = (data: boolean) => {
    setIsAnalyzing(data);
  };

  const handleGoToAnalyzeResult = (signal: boolean, resultData) => {
    setGoToAnalyzeResult({ signal: signal, resultData: resultData });
  };

  const handleAnalyzeResult = async (result: any[]) => {
    const responses = await parseResponseJSONData(result);
    const updatedAnalyzedProfile = updateAnalyzedProfile(responses);

    updateRoundStates(updatedAnalyzedProfile);
  };

  const updateAnalyzedProfile = (responses: any[]) => {
    return analyzedProfile.map((profile) => {
      const matchingScore = calculateMatchingScore(profile, responses);
      return {
        ...profile,
        employee_Profile: {
          ...profile?.employee_Profile,
          application: {
            ...profile?.employee_Profile?.application,
            matchingScore
          }
        }
      };
    });
  };

  const calculateMatchingScore = (profile: any, responses: any[]) => {
    const foundItem = responses.find((res) => res?.id === profile?.id);
    if (foundItem?.result !== undefined) {
      return profile?.employee_Profile?.application?.matchingScore !== undefined
        ? profile?.employee_Profile?.application?.matchingScore +
            foundItem.result
        : foundItem.result;
    } else if (
      !roundOneFinished &&
      (profile?.employee_Profile?.online_profile ||
        profile?.employee_Profile?.attached_document)
    ) {
      return firstRoundForGeneralInfo(
        profile?.employer_Requirement,
        profile?.employee_Profile
      );
    } else {
      return profile?.employee_Profile?.application?.matchingScore;
    }
  };

  const updateRoundStates = (updatedAnalyzedProfile: any[]) => {
    if (!roundOneFinished) {
      const passRoundData = updatedAnalyzedProfile.filter(
        (data) => data?.employee_Profile.application?.matchingScore >= LOW_SCORE
      );
      setPassRoundOneProfiles(passRoundData);
    }

    setAnalyzedProfile(updatedAnalyzedProfile);
    const resultList = updatedAnalyzedProfile.map((profile) => ({
      ...profile?.employee_Profile?.application,
      id: profile.id
    }));
    setShowList(resultList);

    if (start) {
      if (!roundOneFinished) setRoundOneFinished(true);
      else if (!roundTwoFinished) setRoundTwoFinished(true);
      else if (!roundThreeFinished) setRoundThreeFinished(true);
    }
  };

  const matchJobAndProfile = (): ProfileApplicationType[] =>
    data
      ?.map((item) => {
        const job = jobs?.find(
          (job) => job?.postId === item?.jobPosting?.postId
        );
        const profile = applicationDetailList?.find(
          (app) => app?.application?.application_id === item?.application_id
        );

        console.log('applicationDetailList', applicationDetailList);

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

  const handleReview = () => {
    if (!roundOneFinished) {
      // Round 1: Reset matching scores and start round 1
      const resetScoreList = analyzedProfile.map((profile) => ({
        ...profile,
        employee_Profile: {
          ...profile.employee_Profile,
          application: {
            ...profile.employee_Profile.application,
            matchingScore: null
          }
        }
      }));
      setAnalyzedProfile(resetScoreList);
      review({
        round: 1,
        handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        resetMatchingScoreList: resetScoreList,
        setAnalyzedProfile: handleSetAnalyzedProfile,
        handleGoToAnalyzeResult
      });
    } else if (!roundTwoFinished && passRoundOneProfiles.length > 0) {
      // Round 2: Proceed to round 2 if round 1 is finished
      review({
        round: 2,
        handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        passRoundOneProfiles
      });
    } else if (!roundThreeFinished) {
      // Round 3: Proceed to round 3 if round 2 is finished
      review({
        round: 3,
        handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        passRoundOneProfiles
      });
    } else {
      // All rounds finished, save matching scores and finish all
      Promise.all(
        showList.map((item) =>
          onSaveApplicationStatus([
            item.id,
            { matchingScore: item.matchingScore }
          ])
        )
      ).then(() => {
        refetch();
      });
      finishedAll();
      console.log('Finished All');
    }
  };

  useEffect(() => {
    if (goToAnalyzeResult.signal) {
      handleAnalyzeResult(goToAnalyzeResult.resultData);
    }
  }, [goToAnalyzeResult.signal]);

  // First time render the page
  useEffect(() => {
    if (!jobs.length || !applicationDetailList.length || start) return;

    const dataToAnalyze = matchJobAndProfile();
    // console.log('dataToAnalyze', dataToAnalyze);

    const resultList = dataToAnalyze?.map((item) => {
      item.employee_Profile.application.id = item.id;
      return item.employee_Profile.application;
    });

    if (JSON.stringify(resultList) !== JSON.stringify(showList)) {
      console.log('showList', resultList);

      setShowList(() => resultList);
    }

    // Check if the profile values are really different
    if (JSON.stringify(dataToAnalyze) !== JSON.stringify(analyzedProfile)) {
      setAnalyzedProfile(dataToAnalyze);
    }
  }, [
    JSON.stringify(data),
    JSON.stringify(jobs),
    JSON.stringify(applicationDetailList)
  ]);

  // Start Round 1, 2, 3
  useEffect(() => {
    if (!start) return;
    handleReview();
  }, [start, roundOneFinished, roundTwoFinished, roundThreeFinished]);

  return (
    <>
      <Box sx={{ justifyContent: 'right', display: 'flex' }}>
        {isAnalyzing && <CircularProgress />}
        <Button
          onClick={() => setStart(true)}
          variant="contained"
          size="small"
          sx={{ mr: 4 }}
          disabled={start}
        >
          {!start ? 'Phân tích' : 'Đang phân tích...'}
        </Button>
      </Box>
      <TableData
        rows={showList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize
            }
          }
        }}
        hideFooter
        sx={{ minHeight: '65.7vh', width: '100%' }}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        disabled={start}
      />
    </>
  );
}
