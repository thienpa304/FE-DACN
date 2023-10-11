import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
const renderJobTitle = (data) => {
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${data.id}`);
  };
  return (
    <>
      <Grid container alignItems={'center'}>
        <Box marginRight={1}>
          <Tooltip title="Xem trực tiếp">
            <IconButton size="small" onClick={handleLinkToDetail}>
              <RemoveRedEyeIcon sx={{ width: 18, height: 18, color: 'gray' }} />
            </IconButton>
          </Tooltip>
        </Box>
        <LinkText to={`/employer/recruitment/list/${data.id}`}>
          {data.value}
        </LinkText>
      </Grid>
    </>
  );
};
const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: 200,
    renderCell: renderJobTitle
  },
  {
    field: 'posiLevel',
    headerName: 'Ngày đăng',
    minWidth: 150,
    renderCell: () => <></>
  },
  {
    field: 'age',
    headerName: 'Thời gian nộp',
    minWidth: 150,
    renderCell: () => <></>
  },
  {
    field: 'fullName',
    headerName: 'Lượt nộp',
    minWidth: 100,
    type: 'number',
    renderCell: () => <>0</>
  },
  {
    field: 'ag2e',
    headerName: 'Lượt xem',
    type: 'number',
    minWidth: 110,
    renderCell: () => <>0</>
  },
  {
    field: '2222',
    headerName: 'Trạng thái',
    minWidth: 150
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
