import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { APPROVAL_STATUS } from 'src/constants';
import SelectInput, { Option } from 'src/components/SelectInput';
import { useEffect, useState } from 'react';
import useMutateJobStatus from 'src/modules/jobs/hooks/useMutateJobStatus';
import { ApprovalStatus } from 'src/constants/enum';
import useQueryTotalResultOfJobsByAdmin from 'src/modules/jobs/hooks/useQueryTotalResultOfJobsByAdmin';
import Pagination from 'src/components/Pagination';
import useQueryJobByAdmin from 'src/modules/jobs/hooks/useQueryJobByAdmin';
import dayjs from 'dayjs';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { Job } from 'src/modules/jobs/model';
import sendChatGPTRequest from 'src/modules/ai/sendChatGPTRequest';
import { checkContent } from 'src/modules/ai/roles';
import { signal } from '@preact/signals-react';
import { convertVietNamString } from 'src/utils/convertVietNamString';
import alertDialog from 'src/utils/alertDialog';

const renderJobTitle = (data) => {
  const jobTitle = convertVietNamString(data?.row?.jobTitle);
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${jobTitle}`, {
      state: {
        postId: data?.id
      }
    });
  };
  return (
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
      <LinkText to={`/job/${jobTitle}`} state={{ postId: data.id }}>
        {data.value}
      </LinkText>
    </Box>
  );
};

const renderCompany = (data) => {
  return (
    <Grid container alignItems={'center'}>
      <Grid
        item
        xs={12}
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
        <LinkText
          to={`/company/${convertVietNamString(data.value?.companyName)}`}
          state={{ id: data?.value?.userId }}
        >
          {data.value?.companyName}
        </LinkText>
      </Grid>
    </Grid>
  );
};

const renderStatus = (data) => {
  const initValue = APPROVAL_STATUS.find(
    (item) => item.label === data.value
  ).value;
  const { mutate } = useMutateJobStatus();
  const [value, setValue] = useState(initValue);

  const handleConfirm = (id, status) => {
    mutate([id, { status: status, check: false }]).then(() => {
      setValue(status);
    });
  };

  const handleChangeValue = (e) => {
    const value = e.target.value as ApprovalStatus;
    if (data?.row.check == true && value === Object.keys(ApprovalStatus)[0]) {
      alertDialog({
        selectedId: data.id,
        handleConfirm: () => handleConfirm(data.id, e.target.value),
        message:
          'Tin tuyển dụng đang ở trạng thái vi phạm, bạn có chắc muốn duyệt tin tuyển dụng này không?'
      });
    } else {
      mutate([data.id, { status: value }]).then(() => {
        setValue(e.target.value);
      });
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
      value={value}
      options={APPROVAL_STATUS}
      onChange={handleChangeValue}
      size="small"
      sx={{
        color: displayColor()
      }}
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
  // console.log(data);

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
    // console.log(checkValue, value);

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
        width: '95%',
        borderRadius: 1,
        p: 1,
        textAlign: 'center'
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

const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin tuyển dụng',
    minWidth: 250,
    renderCell: renderJobTitle
  },
  {
    field: 'name',
    headerName: 'Người đăng',
    minWidth: 120,
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
    field: 'employer',
    headerName: 'Tên công ty',
    minWidth: 200,
    renderCell: renderCompany
  },
  {
    field: 'createAt',
    headerName: 'Ngày đăng',
    minWidth: 110,
    sortable: true,
    renderCell: (data) => (
      <Box
        sx={{
          whiteSpace: 'wrap',
          lineHeight: '1.5em'
        }}
      >
        {dayjs(data.value).add(7, 'hours').format('DD-MM-YYYY HH:mm:ss')}
      </Box>
    )
  },
  {
    field: 'submissionCount',
    headerName: 'Lượt nộp',
    minWidth: 70,
    align: 'center',
    headerAlign: 'center',
    sortable: true
  },
  {
    field: 'view',
    headerName: 'Lượt xem',
    minWidth: 70,
    align: 'center',
    headerAlign: 'center',
    sortable: true
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: 140,
    headerAlign: 'center',
    renderCell: renderStatus,
    sortable: true
  },
  {
    field: 'check',
    headerName: 'Kiểm duyệt',
    minWidth: 140,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderCheck,
    sortable: true
  }
];

export default function Table({ statusFilter, selectedProfession }) {
  const { totalResults } = useQueryTotalResultOfJobsByAdmin({
    status: ApprovalStatus[statusFilter],
    profession: selectedProfession
  });
  const { mutate } = useMutateJobStatus();
  const [start, setStart] = useState(false);
  const [showList, setShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const jobsPerPage = 9;
  const totalPages = Math.ceil(totalResults / jobsPerPage) || 1;

  const { jobs, isLoading } = useQueryJobByAdmin({
    page: currentPage,
    num: jobsPerPage,
    status: ApprovalStatus[statusFilter],
    profession: selectedProfession
  });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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

    const jsonResult = result.map((item) => JSON.parse(item));
    const resultList = jobs.map((job) => {
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
      const newList = jobs.map((job) => {
        return {
          ...job,
          check: null
        };
      });
      setShowList(() => jobs);
    }
  }, [JSON.stringify(jobs)]);

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  if (isLoading || (jobs.length > 0 && !jobs[0]?.id)) return <SuspenseLoader />;
  return (
    <Box>
      <Box sx={{ justifyContent: 'right', display: 'flex' }}>
        {start && <CircularProgress />}
        <Button
          onClick={() => {
            setStart(true);
          }}
          variant="contained"
          size="small"
          color="error"
          disabled={start}
          sx={{ mr: 1 }}
        >
          {!start ? 'Kiểm duyệt' : 'Đang kiểm duyệt...'}
        </Button>
      </Box>
      <TableData
        sx={{ minHeight: '72vh', width: '100%' }}
        rows={showList}
        columns={columns}
        hideFooter
        checkboxSelection
        disableRowSelectionOnClick
        rowSelection={true}
        onRowSelectionModelChange={(ids) => {
          setSelectedRows(ids);
        }}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        disabled={start}
      />
    </Box>
  );
}
