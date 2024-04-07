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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const renderJobTitle = (data) => {
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${data?.row?.postId}`);
  };
  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={1}>
          <Tooltip title="Xem trực tiếp">
            <IconButton size="small" onClick={handleLinkToDetail}>
              <RemoveRedEyeIcon sx={{ width: 18, height: 18, color: 'gray' }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={11}>
          <LinkText to={`/employer/recruitment/list/${data?.row?.postId}`}>
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

const renderAtion = (data) => {
  return (
    <IconButton onClick={() => handleDelete(data)}>
      <DeleteOutlineIcon />
    </IconButton>
  );
};

const handleDelete = (data) => {
  console.log(data);
};

const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: 400,
    maxWidth: 450,
    headerAlign: 'center',
    renderCell: renderJobTitle
  },
  {
    field: 'createAt',
    headerName: 'Ngày đăng tin',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: rederDate,
    sortable: true
  },
  {
    field: 'applicationDeadline',
    headerName: 'Hạn nộp hồ sơ',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: rederDate,
    sortable: true
  },
  {
    field: 'submit',
    headerName: 'Lượt nộp',
    minWidth: 100,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => <>0</>,
    sortable: true
  },
  {
    field: 'view',
    headerName: 'Lượt xem',
    minWidth: 100,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => <>0</>,
    sortable: true
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: 120,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderStatus,
    sortable: true
  },
  {
    field: 'action',
    headerName: 'Xóa tin đăng',
    minWidth: 120,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderAtion
  }
];

export default function TablePost({ data }) {
  return (
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
      sx={{ height: '72.7vh', width: '100%' }}
    />
  );
}
