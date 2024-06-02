import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { APPROVAL_STATUS } from 'src/constants';
import SelectInput, { Option } from 'src/components/SelectInput';
import { useEffect, useState } from 'react';
import useMutateJobStatus from 'src/modules/jobs/hooks/useMutateJobStatus';
import { ApprovalStatus } from 'src/constants/enum';
import Pagination from 'src/components/Pagination';
import useQueryJobByAdmin from 'src/modules/jobs/hooks/useQueryJobByAdmin';
import dayjs from 'dayjs';
import { Job } from 'src/modules/jobs/model';
import sendChatGPTRequest from 'src/GPT/sendChatGPTRequest';
import { checkContent } from 'src/GPT/roles';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import alertDialog from 'src/utils/alertDialog';
import CheckIcon from '@mui/icons-material/Check';
import { TypographyEllipsis } from 'src/components/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import detailsModal from 'src/utils/detailsModal';
import { checkIsJSON } from 'src/utils/formatData';
import ViewJobDialog from './ViewJobDialog';
import useJob from 'src/modules/jobs/hooks/useJob';
import { handleSort } from 'src/utils/sortData';
import { useResponsive } from 'src/utils/responsive';

const renderJobTitle = (data) => {
  const [selectedId, setSelectedId] = useState(null);
  const { setItemDetail } = useJob();

  const handleOpenDetailModal = () => {
    const detailsData = {
      'Tên tin tuyển dụng': data?.row?.jobTitle,
      'Người đăng': data?.row?.name,
      'Tên công ty': data?.row?.employer?.companyName,
      'Ngày đăng': dayjs(data.row?.createAt)
        .add(7, 'hours')
        .format('DD-MM-YYYY HH:mm:ss'),
      'Lượt nộp': data.row?.submissionCount,
      'Lượt xem': data?.row?.view,
      'Trạng thái': data?.row?.status,
      'Kiểm duyệt': renderCheckInvalid.find(
        (item) => item.value == data?.row?.check
      )?.label
    };
    detailsModal(detailsData);
  };

  const handleEditJob = () => {
    setSelectedId(data.id);
    setItemDetail(data?.row);
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
          onClick={handleEditJob}
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
      <ViewJobDialog
        postId={selectedId}
        setSelectedId={setSelectedId}
        data={data?.row}
      />
    </Grid>
  );
};

const renderCompany = (data) => {
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={12} component={TypographyEllipsis}>
        <LinkText
          to={`/company/${rewriteUrl(data.value)}?id=${btoa(
            data?.row?.employer?.userId
          )}`}
          state={{ id: data?.value?.userId }}
        >
          {data.value}
        </LinkText>
      </Grid>
    </Grid>
  );
};

const renderStatus = (data) => {
  const { isMobile } = useResponsive();
  const initValue = APPROVAL_STATUS.find(
    (item) => item.label === data.value
  ).value;
  const { mutate } = useMutateJobStatus();

  const handleConfirm = (id, status) => {
    mutate([id, { status: status, check: false }]);
  };

  const handleChangeValue = (e) => {
    const value = e.target.value as ApprovalStatus;
    if (data?.row.check == true && value === Object.keys(ApprovalStatus)[0]) {
      alertDialog({
        selectedId: data.id,
        handleConfirm: () => handleConfirm(data.id, e.target.value),
        message:
          'Tin tuyển dụng đang ở trạng thái VI PHẠM, bạn có chắc chắn tin tuyển dụng này là hợp quy định và muốn duyệt tin tuyển dụng này?'
      });
    } else {
      mutate([data.id, { status: value }]);
    }
  };

  const displayColor = () => {
    const initColor = APPROVAL_STATUS.find(
      (item) => item.label === data.value
    )?.optionColor;
    return initColor;
  };

  return (
    <SelectInput
      value={initValue}
      options={APPROVAL_STATUS.map((item) => {
        if (item.value === 'pending' || item.value === 'expired')
          return { ...item, disabled: true };
        return item;
      })}
      onChange={handleChangeValue}
      size="small"
      sx={{
        fontSize: isMobile ? 10 : 13,
        color: displayColor()
      }}
      disabled={
        data?.value === 'Hết hạn' || data?.row?.applications?.length > 0
      }
    />
  );
};

const renderCheckInvalid = [
  {
    label: 'Chưa xác định',
    value: null,
    color: '#fff'
  },
  {
    label: 'Hợp quy định',
    value: false,
    color: '#BFD8AF'
  },
  {
    label: 'Vi phạm',
    value: true,
    color: '#F94C10'
  }
];

const renderCheck = (data) => {
  const { mutate } = useMutateJobStatus();
  const initCheckValue = renderCheckInvalid.find(
    (item) => item.value == data.value
  );
  const [checkValue, setCheckValue] = useState(initCheckValue);

  const options = renderCheckInvalid.map((item) => {
    return {
      label: item.label,
      value: item.value ? 'true' : item.value == false ? 'false' : 'null'
    };
  });

  const handleChange = (e) => {
    const value = e.target.value.toString();
    const checkValue = renderCheckInvalid.find((item) => {
      if (item.value !== null) return item.value.toString() === value;
      else if (item.value === null && value !== 'null') return false;
      else return true;
    });

    setCheckValue(checkValue);
    mutate([data.id, { check: checkValue?.value }]);
  };

  useEffect(() => {
    setCheckValue(initCheckValue);
  }, [data.value]);

  return (
    <Typography
      bgcolor={initCheckValue?.color}
      sx={{
        width: '90%',
        borderRadius: 1,
        py: 1,
        textAlign: 'center',
        fontSize: 13
      }}
    >
      {initCheckValue?.label}
    </Typography>
    // <SelectInput
    //   value={
    //     checkValue?.value === true
    //       ? 'true'
    //       : checkValue?.value === false
    //       ? 'false'
    //       : 'null'
    //   }
    //   options={options}
    //   size="small"
    //   onChange={handleChange}
    //   sx={{
    //     bgcolor: checkValue?.color,
    //     '.css-dyke5w-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select':
    //       {
    //         fontSize: 13,
    //         mx: -1
    //       }
    //   }}
    // />
  );
};

export default function Table({ statusFilter, selectedProfession }) {
  const { mutate } = useMutateJobStatus();
  const [start, setStart] = useState(false);
  const [showList, setShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortModel, setSortModel] = useState({ orderBy: '', sort: '' });
  const pageSize = 9;

  const { jobs, isLoading, totalPages } = useQueryJobByAdmin({
    page: currentPage,
    num: pageSize,
    status: ApprovalStatus[statusFilter],
    profession: selectedProfession,
    ...sortModel
  });
  const { isMobile } = useResponsive();

  const columns: GridColDef[] = [
    {
      field: 'jobTitle',
      headerName: 'Tin tuyển dụng',
      minWidth: !isMobile ? 200 : 130,
      renderCell: renderJobTitle,
      sortable: true
    },
    {
      field: 'name',
      headerName: 'Người đăng',
      minWidth: 120,
      sortable: true,
      renderCell: (data) => (
        <Box
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
        </Box>
      )
    },
    {
      field: 'companyName',
      headerName: 'Tên công ty',
      minWidth: 200,
      renderCell: renderCompany,
      sortable: true
    },
    {
      field: 'createAt',
      headerName: 'Ngày đăng',
      minWidth: 110,
      sortable: true,
      align: 'center',
      renderCell: (data) => (
        <Box
          sx={{
            whiteSpace: 'wrap',
            lineHeight: '1.5em',
            textAlign: 'center'
          }}
        >
          {dayjs(data.value).format('DD-MM-YYYY HH:mm:ss')}
        </Box>
      )
    },
    {
      field: 'submissionCount',
      headerName: 'Lượt nộp',
      minWidth: 90,
      align: 'center',
      headerAlign: 'center',
      sortable: true
    },
    {
      field: 'view',
      headerName: 'Lượt xem',
      minWidth: 90,
      align: 'center',
      headerAlign: 'center',
      sortable: true,
      resizable: true
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      minWidth: !isMobile ? 130 : 115,
      headerAlign: 'center',
      renderCell: renderStatus
    },
    {
      field: 'check',
      headerName: 'Kiểm duyệt',
      minWidth: 130,
      headerAlign: 'center',
      align: 'center',
      renderCell: renderCheck,
      sortable: true
    }
  ];

  const preProcessData = (job: Job) => {
    return {
      postId: job?.postId,
      jobTitle: job?.jobTitle,
      jobDescription: job?.jobDescription,
      jobRequirements: job?.jobRequirements,
      benefits: job?.benefits,
      requiredSkills: job?.requiredSkills
    };
  };

  const handleCheck = async (dataToSend: Partial<Job>[]) => {
    const result = await sendChatGPTRequest(checkContent, dataToSend);

    const jsonResult = result?.map(
      (item) => checkIsJSON(item) && JSON.parse(item)
    );
    const resultList = jobs?.map((job) => {
      const found = jsonResult.find((item) => item.id === job.postId);
      if (found) {
        mutate([found.id, { check: found.result }]);
        return {
          ...job,
          check: found.result
        };
      }
      return job;
    });
    setShowList(resultList);
    setStart(false);
  };

  useEffect(() => {
    if (!start) return;
    const dataToSend = jobs
      .filter((job) => selectedRows.includes(job.postId))
      .map((job) => preProcessData(job));

    // const dataToSend = jobs.map((job) => preProcessData(job));
    handleCheck(dataToSend);
  }, [start]);

  useEffect(() => {
    if (jobs) {
      setShowList(() => jobs);
    }
  }, [JSON.stringify(jobs)]);

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  const [quickApproveValue, setQuickApproveValue] = useState(null);

  const handleChangeValue = (e) => {
    setQuickApproveValue(e.target.value);
  };

  const handleQuickApprove = () => {
    alertDialog({
      handleConfirm,
      message: `Chuyển tin tuyển dụng đã chọn sang trạng thái ${ApprovalStatus[
        quickApproveValue
      ].toUpperCase()}?`
    });
  };

  const handleConfirm = () => {
    const handleConfirmApprove = () => {
      Promise.all(
        selectedRows.map((id) => mutate([id, { status: quickApproveValue }]))
      );
    };
    const violationJob = jobs.find((item) => {
      return selectedRows.includes(item.postId) && item.check == true;
    });

    if (
      selectedRows.some(
        (row) =>
          violationJob && quickApproveValue === Object.keys(ApprovalStatus)[0]
      )
    ) {
      alertDialog({
        handleConfirm: handleConfirmApprove,
        message:
          'Có tin tuyển dụng đang ở trạng thái vi phạm, bạn có chắc muốn các duyệt tin tuyển dụng đã chọn không?'
      });
    } else handleConfirmApprove();
  };

  return (
    <Box>
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
            <Typography fontWeight={700}>
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
              sx={{ py: 1, px: 0 }}
              color="info"
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
              sx={{ py: 1, px: 0, bgcolor: '#FC4100' }}
            >
              <Grid item xs={!start ? 12 : 9}>
                {!start ? 'Kiểm duyệt' : 'Đang kiểm duyệt...'}
              </Grid>
              <Grid item xs={start ? 3 : 0}>
                {start && <CircularProgress size={18} color="secondary" />}
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <TableData
        sx={{ height: '74vh', width: '100%' }}
        rows={showList}
        columns={columns}
        hideFooter
        checkboxSelection
        rowSelection
        onRowSelectionModelChange={(ids) => {
          setSelectedRows(ids);
        }}
        loading={isLoading}
        initialState={{
          columns: {
            columnVisibilityModel: {
              name: !isMobile,
              companyName: !isMobile,
              createAt: !isMobile,
              submissionCount: !isMobile,
              view: !isMobile,
              check: !isMobile
            }
          }
        }}
        disableRowSelectionOnClick={isMobile}
        onSortModelChange={(newSortModel) => {
          handleSort(newSortModel, setSortModel);
        }}
        isRowSelectable={(params) => {
          return (
            params?.row?.applications?.length <= 0 &&
            params?.row?.status != ApprovalStatus.expired
          );
        }}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
        disabled={start}
      />
    </Box>
  );
}
