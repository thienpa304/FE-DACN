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
import { toInputDateString } from 'src/utils/inputOutputFormat';

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
        <Grid item xs={10}>
          <LinkText to={`/employer/recruitment/list/${data.id}`}>
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
const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin tuyển dụng',
    minWidth: 250,
    renderCell: renderJobTitle
  },
  {
    field: 'createAt',
    headerName: 'Ngày đăng',
    minWidth: 150,
    renderCell: (data) => toInputDateString(data.value as string, 'YYYY-MM-DD HH:MM:ss', 'DD-MM-YYYY')
  },
  {
    field: 'submissionCount',
    headerName: 'Lượt nộp',
    minWidth: 100,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'view',
    headerName: 'Lượt xem',
    minWidth: 110,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: 150,
    renderCell: renderStatus
  },
  {
    field: '2232',
    headerName: 'Khác',
    minWidth: 150
  }
];

export default function TablePost({ data }) {
  return (
    <Box sx={{ width: '100%' }}>
      <TableData rows={data} columns={columns} />
    </Box>
  );
}
