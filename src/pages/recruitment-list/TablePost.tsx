import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Chip, Grid, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { APPROVAL_STATUS } from 'src/constants';
import { TypographyEllipsis } from 'src/components/Typography';
import dayjs from 'dayjs';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import useDeleteJobById from 'src/modules/jobs/hooks/useDeleteJobById';
import alertDialog from 'src/utils/alertDialog';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { isMobile } from 'src/constants/reponsive';
import detailsModal from 'src/utils/detailsModal';

export const renderJobTitle = (data) => {
  const jobTitle = rewriteUrl(data?.row?.jobTitle);
  const navigate = useNavigate();
  const handleLinkToDetail = () => {
    navigate(`/job/${jobTitle}?id=${btoa(data?.row?.postId)}`, {
      state: { postId: data?.row?.postId }
    });
  };
  const handleOpenDetailModal = () => {
    const detailsData = {
      'Tên tin đăng': data?.row?.jobTitle,
      'Ngày đăng tin': dayjs(data?.row?.createdAt).format('DD/MM/YYYY'),
      'Hạn nộp hồ sơ': dayjs(data?.row?.expiredAt).format('DD/MM/YYYY'),
      'Lượt nộp': data?.row?.submissionCount,
      'Lượt xem': data?.row?.view,
      'Trạng thái': data?.row?.status
    };
    detailsModal(detailsData);
  };
  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={0} sm={1} display={!isMobile ? 'inline' : 'none'}>
          <Tooltip title="Xem trực tiếp">
            <IconButton size="small" onClick={handleLinkToDetail}>
              <RemoveRedEyeIcon
                sx={{ width: '100%', height: 18, color: 'gray' }}
              />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={10.5} sm={11}>
          <LinkText
            to={`/employer/recruitment/list/${rewriteUrl(data?.row?.jobTitle)}`}
            state={{ postId: data?.row?.postId }}
          >
            <TypographyEllipsis>{data.value}</TypographyEllipsis>
          </LinkText>
        </Grid>
        <Grid
          item
          xs={1.5}
          sm={0}
          sx={{ display: { sm: 'none', xs: 'inline' } }}
        >
          <Tooltip title="Chi tiết">
            <IconButton size="small" onClick={handleOpenDetailModal}>
              <ReadMoreIcon fontSize="small" />
            </IconButton>
          </Tooltip>
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
  const { onDeleteById } = useDeleteJobById();

  const handleConfirmDelete = (id) => {
    onDeleteById([id]);
  };

  const handleDelete = (data) => {
    alertDialog({
      selectedId: data.id,
      handleConfirm: handleConfirmDelete
    });
  };

  return (
    <>
      <IconButton onClick={() => handleDelete(data)}>
        <DeleteOutlineIcon />
      </IconButton>
    </>
  );
};
const columns: GridColDef[] = [
  {
    field: 'jobTitle',
    headerName: 'Tên tin đăng',
    minWidth: isMobile ? 230 : 400,
    maxWidth: isMobile ? 280 : 450,
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
    field: 'submissionCount',
    headerName: 'Lượt nộp',
    minWidth: 100,
    headerAlign: 'center',
    align: 'center',
    sortable: true
  },
  {
    field: 'view',
    headerName: 'Lượt xem',
    minWidth: 100,
    headerAlign: 'center',
    align: 'center',
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
    headerName: 'Xóa tin',
    width: isMobile ? 65 : 120,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderAtion
  }
];

export default function TablePost({ data, pageSize }) {
  return (
    <TableData
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize
          }
        },
        columns: {
          columnVisibilityModel: {
            createAt: !isMobile,
            applicationDeadline: !isMobile,
            submissionCount: !isMobile,
            view: !isMobile,
            status: !isMobile
          }
        }
      }}
      hideFooter
      sx={{ height: '74vh', width: '100%' }}
    />
  );
}
