import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { useMemo, useState, forwardRef, useEffect } from 'react';
import SelectInput from 'src/components/SelectInput';
import { v4 } from 'uuid';
import useQueryJobByOwner from 'src/modules/jobs/hooks/useQueryJobByOwner';
import useQueryCandidateApplicationById, {
  useQueryCandidateApplicationByIdList
} from 'src/modules/application/hooks/useQueryCandidateApplicationById';
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
import openProfile from 'src/utils/openProfile';
import CheckIcon from '@mui/icons-material/Check';
import alertDialog from 'src/utils/alertDialog';
import { ApprovalStatus } from 'src/constants/enum';
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style';

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
  const link = useMemo(() => {
    if (!url) return '#';
    return url;
  }, [url]);

  const { data: profile } = useQueryCandidateApplicationById(data?.row?.id);

  return (
    <Typography
      sx={{
        color: '#319fce',
        ':hover': {
          textDecoration: 'none',
          cursor: 'pointer'
        },
        textDecoration: 'none'
      }}
      onClick={() => {
        openProfile({ profile: profile });
      }}
    >
      {data.value}
    </Typography>
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
      sx={{
        color: APPROVAL_STATUS.find((item) => item.value === value)?.optionColor
      }}
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
    <Typography sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
      Chưa xác định
    </Typography>
  ) : (
    <Box
      sx={{
        width: '90%',
        borderRadius: 2,
        p: 1,
        bgcolor:
          data.value >= HIGH_SCORE
            ? '#ffc107'
            : data.value >= NORMAL_SCORE
            ? '#A1C398'
            : data.value >= LOW_SCORE
            ? '#b5b5b5'
            : '#efefef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    minWidth: 400,
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
  const [passRoundProfiles, setPassRoundProfiles] = useState<
    ProfileApplicationType[]
  >([]);
  const [start, setStart] = useState(false);
  const [goToAnalyzeResult, setGoToAnalyzeResult] = useState({
    signal: false,
    resultData: null
  });
  const [selectedRows, setSelectedRows] = useState([]);

  const applicationIdList = data?.map((item) => item?.application_id);

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
    setPassRoundProfiles([]);
    setGoToAnalyzeResult({ signal: false, resultData: null });
    setAnalyzedProfile(matchJobAndProfile());
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
      setPassRoundProfiles(passRoundData);
    }

    setAnalyzedProfile(updatedAnalyzedProfile);
    const resultList = updatedAnalyzedProfile.map((profile) => ({
      ...profile?.employee_Profile?.application,
      id: profile.id
    }));
    setShowList((prev) => {
      return prev.map((item) => {
        const foundItem = resultList.find((res) => res?.id === item?.id);
        return foundItem || item;
      });
    });

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

  const handleReview = () => {
    if (!roundOneFinished) {
      // Round 1: Reset matching scores and start round 1
      const resetScoreList = analyzedProfile
        .filter((item) => {
          return selectedRows.includes(item.id);
        })
        .map((profile) => ({
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
    } else if (!roundTwoFinished && passRoundProfiles.length > 0) {
      // Round 2: Proceed to round 2 if round 1 is finished
      review({
        round: 2,
        handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        passRoundProfiles
      });
    } else if (!roundThreeFinished) {
      // Round 3: Proceed to round 3 if round 2 is finished
      review({
        round: 3,
        handleAnalyzeResult,
        setIsAnalyzing: handleIsAnalyzing,
        passRoundProfiles
      });
    } else {
      // All rounds finished, save matching scores and finish all
      Promise.all(
        showList
          .filter((item) => {
            return selectedRows.includes(item.id);
          })
          .map((item) =>
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

    const initialJobProfileData = matchJobAndProfile();

    const resultList = initialJobProfileData?.map((item) => {
      item.employee_Profile.application.id = item.id;
      return item.employee_Profile.application;
    });

    if (JSON.stringify(resultList) !== JSON.stringify(showList)) {
      console.log('showList', resultList);

      setShowList(() => resultList);
    }

    // Check if the profile values are really different
    if (
      JSON.stringify(initialJobProfileData) !== JSON.stringify(analyzedProfile)
    ) {
      setAnalyzedProfile(initialJobProfileData);
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

  const [quickApproveValue, setQuickApproveValue] = useState(null);
  const handleChangeValue = (e) => {
    setQuickApproveValue(e.target.value);
  };

  const handleQuickApprove = () => {
    alertDialog({
      selectedId: '_',
      handleConfirm,
      message: `Chuyển các hồ sơ đã chọn sang trạng thái ${ApprovalStatus[quickApproveValue]}?`
    });
  };

  const handleConfirm = () => {
    Promise.all(
      selectedRows.map((id) =>
        onSaveApplicationStatus([id, { status: quickApproveValue }])
      )
    ).then(() => {
      refetch();
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'block',
          float: { md: 'right' },
          minWidth: { md: 500 },
          maxWidth: 500
        }}
      >
        <Grid
          container
          sx={{
            alignItems: 'center'
          }}
          spacing={1}
        >
          <Grid item md={3} xs={12}>
            <Typography
              fontWeight={700}
              textAlign={'center'}
              sx={{ mt: { xs: 2, md: 0 } }}
            >
              Đã chọn: {selectedRows.length}
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} display={'flex'}>
            <SelectInput
              options={APPROVAL_STATUS}
              onChange={handleChangeValue}
              value={selectedRows.length > 0 ? quickApproveValue : ''}
              sx={{
                color: APPROVAL_STATUS.find(
                  (item) => item.value === quickApproveValue
                )?.optionColor
              }}
              disabled={!selectedRows.length}
              label="Duyệt nhanh"
            />
            <Button
              variant="contained"
              size="small"
              color="info"
              sx={{
                py: 1,
                px: 0
              }}
              onClick={handleQuickApprove}
              disabled={!selectedRows.length || !quickApproveValue}
            >
              <CheckIcon sx={{ fontSize: 15 }} />
            </Button>
          </Grid>
          <Grid
            item
            container
            md={4}
            xs={12}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Button
              onClick={() => setStart(selectedRows.length > 0)}
              variant="contained"
              size="small"
              disabled={start || !selectedRows.length}
              fullWidth
              sx={{ py: 1, px: 0 }}
            >
              <Grid item xs={!isAnalyzing ? 12 : 9}>
                {!selectedRows.length
                  ? 'Chưa chọn hồ sơ'
                  : !start
                  ? 'Phân tích nhanh'
                  : 'Đang phân tích'}
              </Grid>
              <Grid item xs={isAnalyzing ? 3 : 0}>
                {isAnalyzing && (
                  <CircularProgress size={18} color="secondary" />
                )}
              </Grid>
            </Button>
          </Grid>
        </Grid>
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
        sx={{ height: '74vh', width: '100%' }}
        checkboxSelection
        // disableRowSelectionOnClick
        rowSelection={true}
        onRowSelectionModelChange={(ids) => {
          setSelectedRows(ids);
        }}
        loading={isLoadingApplication || isLoadingJobs}
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
