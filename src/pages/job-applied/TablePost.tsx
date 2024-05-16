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
import { isMobile } from 'src/constants/reponsive';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import detailsModal from 'src/utils/detailsModal';

const renderJobTitle = (data) => {
  const jobTitle = rewriteUrl(data?.row?.jobTitle);
  const handleOpenDetailModal = () => {
    const detailsData = {
      'Tên tin đăng': data?.row?.jobTitle,
      'Tên công ty': data?.row?.companyName,
      'Ngày đăng tin': dayjs(data?.row?.createdAt).format('DD/MM/YYYY'),
      'Hạn nộp hồ sơ': dayjs(data?.row?.applicationDeadline).format(
        'DD/MM/YYYY'
      ),
      'Trạng thái': data?.row?.status
    };
    detailsModal(detailsData);
  };
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={10.5} sm={12}>
        <LinkText to={`/job/${jobTitle}?id=${btoa(data?.row?.postId)}`}>
          <TypographyEllipsis> {data.value}</TypographyEllipsis>
        </LinkText>
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

const renderCompanyName = (data) => {
  return <TypographyEllipsis>{data.value}</TypographyEllipsis>;
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
    minWidth: isMobile ? 190 : 400,
    headerAlign: 'center',
    renderCell: renderJobTitle
  },
  {
    field: 'companyName',
    headerName: 'Tên công ty',
    minWidth: 300,
    headerAlign: 'center',
    renderCell: renderCompanyName
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
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: isMobile ? 50 : 150,
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
          },
          columns: {
            columnVisibilityModel: {
              companyName: !isMobile,
              createAt: !isMobile,
              applicationDeadline: !isMobile
            }
          }
        }}
      />
    </Box>
  );
}
