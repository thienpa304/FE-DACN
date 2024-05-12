import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Chip, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { APPROVAL_STATUS } from 'src/constants';
import { TypographyEllipsis } from 'src/components/Typography';
import dayjs from 'dayjs';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import Link from 'src/components/Link';

const renderJobTitle = (data) => {
  const jobTitle = rewriteUrl(data?.row?.jobTitle);
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${jobTitle}?id=${btoa(data?.row?.postId)}`);
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
        <Grid item xs={10}>
          <LinkText to={`/job/${jobTitle}?id=${btoa(data?.row?.postId)}`}>
            <TypographyEllipsis> {data.value}</TypographyEllipsis>
          </LinkText>
        </Grid>
      </Grid>
    </>
  );
};

const renderStatus = (data) => {
  const color = APPROVAL_STATUS.find((item) => item.label === data.value).color;
  return (
    <Chip label={data.value} size="small" color={color} variant="outlined" />
  );
};

const rederDate = (data) => {
  const date = dayjs(data?.value).format('DD/MM/YYYY');
  return <>{date}</>;
};

const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: 400,
    headerAlign: 'center',
    renderCell: renderJobTitle
  },
  {
    field: 'createAt',
    headerName: 'Ngày nộp',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: rederDate
  },
  {
    field: 'applicationDeadline',
    headerName: 'Hạn nộp',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: rederDate
  },
  {
    field: 'fullName',
    headerName: 'Lượt nộp',
    minWidth: 100,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => <>0</>
  },
  {
    field: 'ag2e',
    headerName: 'Lượt xem',
    minWidth: 110,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => <>0</>
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderStatus
  }
];

export default function TablePost({ data }) {
  return (
    <Box sx={{ height: '72.7vh', width: '100%' }}>
      <TableData
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8
            }
          }
        }}
      />
    </Box>
  );
}
