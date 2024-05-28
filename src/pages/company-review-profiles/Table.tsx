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
  Typography
} from '@mui/material';
import { APPROVAL_STATUS } from 'src/constants';
import useMutateApplicationStatus from 'src/modules/application/hooks/useMutateApplicatonStatus';
import { useMemo, useState, forwardRef, useEffect, useCallback } from 'react';
import SelectInput from 'src/components/SelectInput';
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
  ratingStar,
  calculateMatchingScore,
  getKeywords
} from 'src/utils/reviewProfile';
import SuspenseLoader from 'src/components/SuspenseLoader';
import Pagination from 'src/components/Pagination';
import openProfile from 'src/utils/openProfile';
import CheckIcon from '@mui/icons-material/Check';
import alertDialog from 'src/utils/alertDialog';
import { ApprovalStatus } from 'src/constants/enum';
import { TypographyEllipsis } from 'src/components/Typography';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from '../view-job-detail/TabContent';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';
import useApplicationList from 'src/modules/jobs/hooks/useFollowJobList';
import useJob from 'src/modules/jobs/hooks/useJob';
import CloseIcon from '@mui/icons-material/Close';
import { isMobile } from 'src/constants/reponsive';
import detailsModal from 'src/utils/detailsModal';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import useQueryJobByIdByOwner from 'src/modules/jobs/hooks/useQueryJobByIdByOwner';

export const ViewJobDetail = ({ postId, setSelectedId }) => {
  if (!postId) return;

  const { data, isLoading } = useQueryJobByIdByOwner(postId);

  if (isLoading) return <SuspenseLoader />;
  return (
    <Dialog
      open={Boolean(postId)}
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
        Việc làm ứng tuyển
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
  const {
    employee_Profile: { application },
    employer_Requirement
  } = data?.row;

  const [selectedId, setSelectedId] = useState(null);

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
          setSelectedId(employer_Requirement?.postId);
        }}
      >
        {application.jobTitle}
      </TypographyEllipsis>
      <ViewJobDetail postId={selectedId} setSelectedId={setSelectedId} />
    </>
  );
};

const renderProfileName = (data) => {
  const { employee_Profile } = data?.row;
  const { application } = employee_Profile;

  const handleOpenDetailModal = () => {
    const rating = ratingStar(application.matchingScore);

    const detailsData = {
      'Tên hồ sơ': application.name,
      'Vị trí ứng tuyển': application.jobTitle,
      'Loại hồ sơ': application.applicationType,
      'Trạng thái': application.status,
      'Độ phù hợp': (
        <Rating
          value={rating}
          max={3}
          size="small"
          readOnly
          sx={{ position: 'relative', bottom: -5 }}
        />
      )
    };
    detailsModal(detailsData);
  };

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
            openProfile({ profile: employee_Profile });
          }}
        >
          {application.name}
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
  const {
    employee_Profile: { application }
  } = data?.row;
  const { onSaveApplicationStatus } = useMutateApplicationStatus();
  const [value, setValue] = useState(null); // Initialize value as null

  useEffect(() => {
    if (!application.status || !APPROVAL_STATUS) return;
    const initValue = APPROVAL_STATUS.find(
      (item) => item.label === application.status
    )?.value;

    setValue(initValue); // Set the initial value
  }, [application.status]); // Run this effect whenever data.value changes

  const handleChangeValue = (newValue) => {
    onSaveApplicationStatus([
      application.id,
      { status: newValue.target.value }
    ]).then(() => {
      setValue(newValue.target.value);
    });
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

const renderMatchingScore = (data) => {
  const {
    employee_Profile: { application }
  } = data?.row;
  const rating = ratingStar(application.matchingScore);

  return application.matchingScore === undefined ||
    application.matchingScore === null ? (
    <Typography sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
      Chưa phân tích
    </Typography>
  ) : (
    <Rating value={rating} max={3} readOnly />
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
    align: 'center',
    renderCell: (data) =>
      data?.row?.employee_Profile?.application?.applicationType
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
    minWidth: 140,
    align: 'center',
    headerAlign: 'center',
    renderCell: renderMatchingScore,
    sortable: true
  }
];

export default function Table(props) {
  const { pageSize, data, currentPage, totalPages, handlePageChange, loading } =
    props;
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
  const [quickApproveValue, setQuickApproveValue] = useState(null);

  const { onSaveApplicationStatus } = useMutateApplicationStatus();

  const finishedAll = () => {
    setStart(false);
    setRoundOneFinished(false);
    setRoundTwoFinished(false);
    setRoundThreeFinished(false);
    setIsAnalyzing(false);
    setPassRoundProfiles([]);
    setGoToAnalyzeResult({ signal: false, resultData: null });
    // setAnalyzedProfile(matchJobAndProfile());
    console.log('Finished All');
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
      const matchingScore = calculateMatchingScore(
        profile,
        responses,
        roundOneFinished
      );
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

  const updateRoundStates = (updatedAnalyzedProfile: any[]) => {
    if (!roundOneFinished) {
      const passRoundData = updatedAnalyzedProfile.filter(
        (data) => data?.employee_Profile.application?.matchingScore >= LOW_SCORE
      );
      setPassRoundProfiles(passRoundData);
    }

    console.log('updatedAnalyzedProfile,', updatedAnalyzedProfile);

    setAnalyzedProfile(updatedAnalyzedProfile);
    setShowList((prev) =>
      prev.map(
        (item) =>
          updatedAnalyzedProfile.find((res) => res?.id === item?.id) || item
      )
    );

    if (start) {
      if (!roundOneFinished) setRoundOneFinished(true);
      else if (!roundTwoFinished) setRoundTwoFinished(true);
      else if (!roundThreeFinished) setRoundThreeFinished(true);
    }
  };

  const handleReview = () => {
    if (!roundOneFinished) {
      startReviewRound(1);
    } else if (!roundTwoFinished && passRoundProfiles.length > 0) {
      startReviewRound(2);
    } else if (!roundThreeFinished) {
      startReviewRound(3);
    } else {
      finishAllRounds();
    }
  };

  const startReviewRound = (round) => {
    const resetScoreList = analyzedProfile
      .filter((item) => selectedRows.includes(item.id))
      .map(resetMatchingScore);

    setAnalyzedProfile(resetScoreList);

    review({
      round,
      handleAnalyzeResult,
      setIsAnalyzing: handleIsAnalyzing,
      resetMatchingScoreList: resetScoreList,
      setAnalyzedProfile: handleSetAnalyzedProfile,
      handleGoToAnalyzeResult,
      passRoundProfiles: round !== 1 ? passRoundProfiles : undefined
    });
  };

  const resetMatchingScore = (profile) => ({
    ...profile,
    employee_Profile: {
      ...profile.employee_Profile,
      application: {
        ...profile.employee_Profile.application,
        matchingScore: null
      }
    }
  });

  const finishAllRounds = () => {
    Promise.all(
      showList
        .filter((item) => selectedRows.includes(item.id))
        .map((item) =>
          onSaveApplicationStatus([
            item.id,
            {
              matchingScore: item?.employee_Profile?.application?.matchingScore
            }
          ])
        )
    ).then(finishedAll);
  };

  const handleQuickApprove = () => {
    alertDialog({
      handleConfirm,
      message: `Chuyển các hồ sơ đã chọn sang trạng thái ${ApprovalStatus[quickApproveValue]}?`
    });
  };

  const handleChangeValue = (e) => {
    setQuickApproveValue(e.target.value);
  };

  const handleConfirm = () => {
    Promise.all(
      selectedRows.map((id) =>
        onSaveApplicationStatus([id, { status: quickApproveValue }])
      )
    );
  };

  useEffect(() => {
    if (goToAnalyzeResult.signal) {
      handleAnalyzeResult(goToAnalyzeResult.resultData);
    }
  }, [goToAnalyzeResult.signal]);

  useEffect(() => {
    setShowList(data);
    setAnalyzedProfile(data);
  }, [data]);

  // Start Round 1, 2, 3
  useEffect(() => {
    if (!start) return;
    handleReview();
  }, [start, roundOneFinished, roundTwoFinished, roundThreeFinished]);

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
        sx={{ minHeight: '74vh', width: '100%' }}
        checkboxSelection
        disableRowSelectionOnClick={isMobile}
        rowSelection={true}
        onRowSelectionModelChange={(ids) => {
          setSelectedRows(ids);
        }}
        loading={loading}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        disabled={start || loading}
      />
    </>
  );
}
