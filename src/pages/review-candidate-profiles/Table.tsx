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
import {
  ProfileApplicationType,
  preprocessJobData,
  preprocessProfileData,
  review,
  LOW_SCORE,
  NORMAL_SCORE,
  HIGH_SCORE,
  firstRoundForGeneralInfo
} from 'src/utils/reviewProfile';
import SuspenseLoader from 'src/components/SuspenseLoader';

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
  const { mutate } = useMutateApplicationStatus();
  const [value, setValue] = useState(null); // Initialize value as null

  useEffect(() => {
    if (!data.value || !APPROVAL_STATUS) return;
    const initValue = APPROVAL_STATUS.find(
      (item) => item.label === data.value
    )?.value;

    setValue(initValue); // Set the initial value
  }, [data.value]); // Run this effect whenever data.value changes

  const handleChangeValue = (newValue) => {
    mutate([data.id, { status: newValue }]).then(() => {
      setValue(newValue);
    });
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

export const renderMatchingScore = (data, isAnalyzing: boolean) => {
  if (isAnalyzing) return <CircularProgress />;
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

export default function Table(props) {
  const { pageSize, handleChangePage, page, isLoading, totalResults, data } =
    props;
  // const data = dataList.value;
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
  const [resetMatchingScoreList, setResetMatchingScoreList] = useState<
    ProfileApplicationType[]
  >([]);
  const [start, setStart] = useState(false);
  debugger;
  const [goToAnalyzeResult, setGoToAnalyzeResult] = useState({
    signal: false,
    resultData: null
  });

  const { jobs, isLoading: isLoadingJobs } = useQueryJobOwner();

  const idList = data.map((item) => item?.application_id);
  const { data: applicationDetailList, isLoading: isLoadingApplication } =
    useQueryCandidateProfileByIdList(idList);

  const { mutate } = useMutateApplicationStatus();

  const finishedAll = () => {
    setStart(false);
    setRoundOneFinished(false);
    setRoundTwoFinished(false);
    setRoundThreeFinished(false);
    setResetMatchingScoreList([]);
    setIsAnalyzing(false);
    setAnalyzedProfile(null);
    setPassRoundOneProfiles([]);
    setGoToAnalyzeResult({ signal: false, resultData: null });
  };

  const handleSetAnalyzedProfile = async (data: ProfileApplicationType[]) => {
    setAnalyzedProfile(() => data);
  };

  const handleIsAnalyzing = (data: boolean) => {
    setIsAnalyzing(() => data);
  };

  const handleGoToAnalyzeResult = (signal: boolean, resultData) => {
    setGoToAnalyzeResult({ signal: signal, resultData: resultData });
  };

  const handleAnalyzeResult = async (result: any[]) => {
    debugger;
    const responses = result?.map((data) => {
      if (data) return JSON.parse(data);
    });

    const updatedAnalyzedProfile = await Promise.all(
      analyzedProfile?.map(async (profile) => {
        const foundItem = responses?.find((res) => res?.id === profile?.id);
        debugger;
        let matchingScore: number;
        if (foundItem?.result !== undefined) {
          matchingScore = profile?.employee_Profile?.application?.matchingScore
            ? profile?.employee_Profile?.application?.matchingScore +
              foundItem.result
            : foundItem.result;
        } else if (
          !roundOneFinished &&
          (profile?.employee_Profile?.online_profile ||
            profile?.employee_Profile?.attached_document)
        ) {
          matchingScore = firstRoundForGeneralInfo(
            profile?.employer_Requirement,
            profile?.employee_Profile
          );
        } else {
          matchingScore = profile?.employee_Profile?.application?.matchingScore;
        }

        console.log('matchingScore', matchingScore);

        return {
          ...profile,
          employee_Profile: {
            ...profile?.employee_Profile,
            application: {
              ...profile?.employee_Profile?.application,
              matchingScore: matchingScore
            }
          }
        };
      })
    );

    if (!roundOneFinished) {
      const passRoundData = updatedAnalyzedProfile?.filter(
        (data) => data?.employee_Profile.application?.matchingScore >= LOW_SCORE
      );
      setPassRoundOneProfiles(passRoundData);
    }

    setAnalyzedProfile(() => updatedAnalyzedProfile);
    const resultList = updatedAnalyzedProfile?.map((profile) => ({
      ...profile?.employee_Profile?.application,
      id: profile.id
    }));
    console.log('resultList', resultList);

    setShowList(resultList);
    setIsAnalyzing(false);
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

  useEffect(() => {
    debugger;

    if (goToAnalyzeResult.signal) {
      console.log('analyzedProfile', analyzedProfile);
      handleAnalyzeResult(goToAnalyzeResult.resultData);
    }
  }, [goToAnalyzeResult.signal]);

  // First time render the page
  useEffect(() => {
    console.log('goToAnalyzeResult', goToAnalyzeResult);

    if (!jobs.length || !applicationDetailList.length || start) return;

    const dataToAnalyze = matchJobAndProfile();
    console.log('dataToAnalyze', dataToAnalyze);

    const resultList = dataToAnalyze?.map((item) => {
      item.employee_Profile.application.id = item.id;
      return item.employee_Profile.application;
    });

    if (JSON.stringify(resultList) !== JSON.stringify(showList)) {
      setShowList(() => resultList);
    }

    // Check if the profile values are really different
    // if not, do not set the state
    if (JSON.stringify(dataToAnalyze) !== JSON.stringify(analyzedProfile)) {
      setAnalyzedProfile(() => dataToAnalyze);
    }
  }, [jobs, applicationDetailList]);

  // Start Round 1
  useEffect(() => {
    // go into round 1
    console.log('goToAnalyzeResult', goToAnalyzeResult);
    debugger;
    if (start) {
      const resetMatchingScoreList: ProfileApplicationType[] =
        analyzedProfile.map((pofile) => {
          return {
            ...pofile,
            employee_Profile: {
              ...pofile.employee_Profile,
              application: {
                ...pofile.employee_Profile.application,
                matchingScore: null
              }
            }
          };
        });
      setAnalyzedProfile(() => resetMatchingScoreList);
      setResetMatchingScoreList(() => resetMatchingScoreList);
    }
  }, [start]);

  useEffect(() => {
    resetMatchingScoreList.length > 0 &&
      review({
        round: 1,
        handleAnalyzeResult: handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        dataToAnalyze: resetMatchingScoreList,
        resetMatchingScoreList: resetMatchingScoreList,
        setAnalyzedProfile: handleSetAnalyzedProfile,
        handleGoToAnalyzeResult: handleGoToAnalyzeResult
      });
  }, [resetMatchingScoreList]);

  // Start Round 2, 3
  useEffect(() => {
    if (!start) return;
    if (roundOneFinished && !roundTwoFinished) {
      console.log('passRoundOneProfiles', passRoundOneProfiles);

      // go to round 2
      if (passRoundOneProfiles.length > 0)
        review({
          round: 2,
          handleAnalyzeResult: handleAnalyzeResult,
          setIsAnalyzing: handleIsAnalyzing,
          passRoundOneProfiles: passRoundOneProfiles
        });
      else {
        finishedAll();
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
      review({
        round: 3,
        handleAnalyzeResult: handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        passRoundOneProfiles: passRoundOneProfiles
      });
    } else if (roundThreeFinished) {
      console.log('Round 3 finished');
      Promise.all(
        showList.map((item) => {
          mutate([item.id, { matchingScore: item.matchingScore }]);
        })
      );
      console.log('Finised All');
      finishedAll();
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
      renderCell: (data) => renderMatchingScore(data, isAnalyzing),
      sortable: true
    }
  ];

  if (isLoadingJobs || isLoadingApplication) return <SuspenseLoader />;

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
        sx={{ height: '65.7vh', width: '100%' }}
        paginationMode="server"
        onPaginationModelChange={(e) => handleChangePage(e.page + 1)}
        loading={isLoading}
        rowCount={totalResults}
      />
    </>
  );
}
