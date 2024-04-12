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
import SelectInput from 'src/components/SelectInput';
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

const renderJobTitle = (data) => {
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${data.id}`);
  };
  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={2}>
          <Tooltip title="Xem trực tiếp">
            <IconButton size="small" onClick={handleLinkToDetail}>
              <RemoveRedEyeIcon sx={{ width: 18, height: 18, color: 'gray' }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={10}
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
          <LinkText to={`/job/${data.id}`}>{data.value}</LinkText>
        </Grid>
      </Grid>
    </>
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
        <LinkText to={`/company/${data?.value?.userId}`}>
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
      size="small"
      sx={{
        '.css-dyke5w-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select':
          {
            fontSize: 13
          }
      }}
    />
  );
};

const renderCheckInvalid = [
  {
    label: 'Chưa xác định',
    value: null,
    color: '#efefef'
  },
  {
    label: 'Hợp quy định',
    value: false,
    color: '#A5DD9B'
  },
  {
    label: 'Vi phạm',
    value: true,
    color: '#F94C10'
  }
];

const renderCheck = (data) => {
  debugger;
  const initCheckValue = renderCheckInvalid.find(
    (item) => item.value === data.value
  );

  return (
    <Typography
      bgcolor={initCheckValue?.color}
      sx={{
        width: '90%',
        borderRadius: 3,
        p: 1,
        textAlign: 'center'
      }}
    >
      {initCheckValue?.label}
    </Typography>
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
    minWidth: 120,
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
    minWidth: 130,
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
  const [start, setStart] = useState(false);
  const [showList, setShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    debugger;
    const jsonResult = result.map((item) => JSON.parse(item));
    const resultList = jobs.map((job) => {
      const found = jsonResult.find((item) => item.id === job.postId);
      if (found) {
        return {
          ...job,
          check: found.result
        };
      }
    });
    setShowList(resultList);
    setStart(false);
  };

  useEffect(() => {
    if (!start) return;
    const dataToSend = jobs.map((job) => preProcessData(job));
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
      setShowList(() => newList);
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
            console.log(start);
            setStart(true);
            console.log(start);
          }}
          variant="contained"
          size="small"
          color="secondary"
          disabled={start}
          sx={{ mr: 1 }}
        >
          {!start ? 'Kiểm duyệt' : 'Đang kiểm duyệt...'}
        </Button>
      </Box>
      <TableData
        sx={{ height: '72vh', width: '100%' }}
        rows={showList}
        columns={columns}
        hideFooter
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
