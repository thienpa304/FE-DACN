import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Rating,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { useMemo, useState, forwardRef, useEffect } from 'react';
import SelectInput from 'src/components/SelectInput';
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
  parseResponseJSONData,
  ratingStar
} from 'src/utils/reviewProfile';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useQueryJobById, {
  useQueryJobByIdList
} from 'src/modules/jobs/hooks/useQueryJobById';
import Pagination from 'src/components/Pagination';
import openProfile from 'src/utils/openProfile';
import CheckIcon from '@mui/icons-material/Check';
import alertDialog from 'src/utils/alertDialog';
import { ApprovalStatus } from 'src/constants/enum';
import { TypographyEllipsis } from 'src/components/Typography';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from '../job-detail/TabContent';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';
import useApplicationList from 'src/modules/application/hooks/useApplicationList';
import useJob from 'src/modules/jobs/hooks/useJob';
import CloseIcon from '@mui/icons-material/Close';
import { isMobile } from 'src/constants/reponsive';
import detailsModal from 'src/utils/detailsModal';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const ViewJobDetail = ({ applicationId, setSelectedId }) => {
  if (!Boolean(applicationId)) return;
  const { applicationList } = useApplicationList();
  const { setItemDetail, itemDetail } = useJob();

  const jobId = applicationList?.find(
    (item) => item.application_id === applicationId
  )?.jobPosting.postId;
  const { data, isLoading } = useQueryJobById(jobId);

  useEffect(() => {
    setItemDetail(data);
  }, [data]);

  if (isLoading || !data) return <SuspenseLoader />;
  return (
    <Dialog
      open={Boolean(applicationId)}
      onClose={() => {
        setSelectedId(null);
      }}
      fullWidth
      maxWidth="lg"
      fullScreen={isMobile}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.3rem'
        }}
      >
        Vị trí ứng tuyển
        <IconButton
          aria-label="close"
          onClick={() => setSelectedId(null)}
          sx={{
            position: 'absolute',
            right: 14,
            top: 14,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider
        sx={{
          bgcolor: '#B6FFFA',
          height: 2
        }}
      />
      <DialogContent>
        <Container sx={{ paddingY: 2 }}>
          <CardApply data={data} />
          <TabContent />
          <CompanyInfoTab sx={{ mt: 2 }} company={data?.employer} />
        </Container>
      </DialogContent>
    </Dialog>
  );
};

const renderJobTitle = (data) => {
  const [selectedId, setSelectedId] = useState(null);
  // console.log(data);

  if (data.value) {
    return (
      <>
        <TypographyEllipsis
          sx={{
            color: '#319fce',
            ':hover': {
              textDecoration: 'none',
              cursor: 'pointer'
            },
            textDecoration: 'none'
          }}
          onClick={() => {
            setSelectedId(data?.row?.id);
          }}
        >
          {data.value}
        </TypographyEllipsis>
        <ViewJobDetail
          applicationId={selectedId}
          setSelectedId={setSelectedId}
        />
      </>
    );
  }
};

const renderProfileName = (data) => {
  const handleOpenDetailModal = () => {
    // let result = '';
    // if (data?.row?.matchingScore >= HIGH_SCORE) result = 'Cao';
    // else if (
    //   data?.row?.matchingScore >= NORMAL_SCORE &&
    //   data?.row?.matchingScore < HIGH_SCORE
    // )
    //   result = 'Trung bình';
    // else if (
    //   data?.row?.matchingScore >= LOW_SCORE &&
    //   data?.row?.matchingScore < NORMAL_SCORE
    // )
    //   result = 'Thấp';
    // else if (data?.row?.matchingScore < 0) result = 'Không phù hợp';

    const rating = ratingStar(data?.row?.matchingScore);
    console.log(rating);

    const detailsData = {
      'Tên hồ sơ': data?.row?.name,
      'Vị trí ứng tuyển': data?.row?.jobTitle,
      'Loại hồ sơ': data?.row?.applicationType,
      'Trạng thái': data?.row?.status,
      'Độ phù hợp': (
        <Rating
          value={rating}
          max={3}
          size="small"
          readOnly
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center'
          }}
        />
      )
    };
    detailsModal(detailsData);
  };

  const { data: profile } = useQueryCandidateApplicationById(data?.row?.id);

  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={10.5} sm={12}>
        <TypographyEllipsis
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
        </TypographyEllipsis>
      </Grid>
      <Grid item xs={1.5} sm={0} sx={{ display: { sm: 'none', xs: 'inline' } }}>
        <Tooltip title="Chi tiết">
          <IconButton size="small" onClick={handleOpenDetailModal}>
            <ReadMoreIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
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
      sx={{
        color: APPROVAL_STATUS.find((item) => item.value === value)
          ?.optionColor,
        fontSize: isMobile && '10px'
      }}
    />
  );
};

export const renderMatchingScore = (data) => {
  // if (isAnalyzing) return <CircularProgress />;
  // let result = '';
  // if (data.value >= HIGH_SCORE) result = 'Cao';
  // else if (data.value >= NORMAL_SCORE && data.value < HIGH_SCORE)
  //   result = 'Trung bình';
  // else if (data.value >= LOW_SCORE && data.value < NORMAL_SCORE)
  //   result = 'Thấp';
  // else if (data.value < 0) result = 'Không phù hợp';
  const rating = ratingStar(data.value);

  return data.value === undefined || data.value === null ? (
    <Typography sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
      Chưa phân tích
    </Typography>
  ) : (
    // <Box
    //   sx={{
    //     width: '90%',
    //     borderRadius: 2,
    //     p: 1,
    //     bgcolor:
    //       data.value >= HIGH_SCORE
    //         ? '#ffc107'
    //         : data.value >= NORMAL_SCORE
    //         ? '#A1C398'
    //         : data.value >= LOW_SCORE
    //         ? '#b5b5b5'
    //         : '#efefef',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    // >
    //   {result}
    // </Box>
    <Rating value={rating} max={3} precision={0.5} readOnly />
  );
};

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tên hồ sơ',
    minWidth: isMobile ? 110 : 220,
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
    // sortable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: isMobile ? 120 : 180,
    renderCell: renderStatus,
    sortable: true,
    headerAlign: 'center',
    align: 'center'
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
  const [isMappingData, setIsMappingData] = useState(true);

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
      console.log('matchingScore', matchingScore);

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

  useEffect(() => {
    if (goToAnalyzeResult.signal) {
      handleAnalyzeResult(goToAnalyzeResult.resultData);
    }
  }, [goToAnalyzeResult.signal]);

  // First time render the page
  useEffect(() => {
    setIsMappingData(true);

    if (!jobs.length || !applicationDetailList.length || start) {
      setIsMappingData(false);
      return;
    }

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
    setIsMappingData(false);
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
          },
          columns: {
            columnVisibilityModel: {
              jobTitle: !isMobile,
              applicationType: !isMobile,
              matchingScore: !isMobile
            }
          }
        }}
        hideFooter
        sx={{ height: '74vh', width: '100%' }}
        checkboxSelection
        disableRowSelectionOnClick={isMobile}
        rowSelection={true}
        onRowSelectionModelChange={(ids) => {
          setSelectedRows(ids);
        }}
        loading={isLoadingApplication || isLoadingJobs || isMappingData}
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
