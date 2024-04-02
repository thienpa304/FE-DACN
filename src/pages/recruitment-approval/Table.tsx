import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { APPROVAL_STATUS } from 'src/constants';
import SelectInput from 'src/components/SelectInput';
import { useEffect, useState } from 'react';
import useMutateJobStatus from 'src/modules/jobs/hooks/useMutateJobStatus';
import { ApprovalStatus } from 'src/constants/enum';
import useQueryTotalResultsByAdmin from 'src/modules/jobs/hooks/useQueryTotalResultsByAdmin';
import Pagination from 'src/components/Pagination';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import dayjs from 'dayjs';
import SuspenseLoader from 'src/components/SuspenseLoader';

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
            textOverflow: 'ellipsis'
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
        xs={10}
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <LinkText to={`/employer/recruitment/list/${data.id}`}>
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
    />
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
    minWidth: 150
  },
  {
    field: 'employer',
    headerName: 'Tên công ty',
    minWidth: 250,
    renderCell: renderCompany
  },
  {
    field: 'createAt',
    headerName: 'Ngày đăng',
    minWidth: 150,
    sortable: true,
    renderCell: (data) =>
      dayjs(data.value).add(7, 'hours').format('DD-MM-YYYY HH:mm:ss')
  },
  {
    field: 'submissionCount',
    headerName: 'Lượt nộp',
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    sortable: true
  },
  {
    field: 'view',
    headerName: 'Lượt xem',
    minWidth: 110,
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
  }
];

export default function Table({ statusFilter }) {
  const { totalResults, refetch: refetchTotalResults } =
    useQueryTotalResultsByAdmin({
      status: ApprovalStatus[statusFilter]
    });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const validvalidTotalPages = Number.isInteger(totalResults)
    ? totalResults
    : 1;
  const totalPages = Math.ceil(validvalidTotalPages / jobsPerPage);

  const { jobs, refetch, isLoading } = useQueryJob({
    page: currentPage,
    num: jobsPerPage,
    status: ApprovalStatus[statusFilter]
  });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    refetch();
    refetchTotalResults();
  }, [statusFilter]);

  if (isLoading || (jobs.length > 0 && !jobs[0]?.id)) return <SuspenseLoader />;

  return (
    <Box>
      <TableData
        sx={{ height: '72vh', width: '100%' }}
        rows={jobs}
        columns={columns}
        hideFooter
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
}
