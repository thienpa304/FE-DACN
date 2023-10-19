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
    headerName: 'Tên tin đăng',
    minWidth: 250,
    renderCell: renderJobTitle
  },
  {
    field: 'publishingDate',
    headerName: 'Ngày đăng',
    minWidth: 150
  },
  {
    field: 'fullName',
    headerName: 'Lượt nộp',
    minWidth: 100,
    type: 'number',
    align: 'center',
    renderCell: () => <>0</>
  },
  {
    field: 'ag2e',
    headerName: 'Lượt xem',
    type: 'number',
    minWidth: 110,
    align: 'center',
    renderCell: () => <>0</>
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
    <Box sx={{ height: '75vh', width: '100%' }}>
      <TableData rows={data} columns={columns} />
    </Box>
  );
}
