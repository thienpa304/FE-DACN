import { GridColDef } from '@mui/x-data-grid';
import LinkText from 'src/components/LinkText';
import TableData from 'src/components/TableData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Chip, Grid, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { APPROVAL_STATUS } from 'src/constants';
import { TypographyEllipsis } from 'src/components/Typography';
import dayjs from 'dayjs';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useDeleteJobById from 'src/modules/jobs/hooks/useDeleteJobById';
import alertDialog from 'src/utils/alertDialog';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import detailsModal from 'src/utils/detailsModal';
import { useState } from 'react';
import { ViewJobDetail } from '../company-review-profiles/Table';
import { handleSort } from 'src/utils/sortData';
import { useResponsive } from 'src/utils/responsive';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export const renderJobTitle = (data) => {
  const [selectedId, setSelectedId] = useState(null);
  const { isMobile } = useResponsive();

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
            <IconButton
              size="small"
              onClick={() => setSelectedId(data?.row?.postId)}
            >
              <RemoveRedEyeIcon
                sx={{ width: '100%', height: 18, color: 'gray' }}
              />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={10.5} sm={11}>
          <LinkText to="" onClick={() => setSelectedId(data?.row?.postId)}>
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
      <ViewJobDetail postId={selectedId} setSelectedId={setSelectedId} />
    </>
  );
};

export const renderStatus = (data) => {
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
  const navigate = useNavigate();

  const handleConfirmDelete = (id) => {
    onDeleteById([id]);
  };

  const handleDelete = (data) => {
    if (data?.row?.applications?.length > 0) {
      alertDialog({
        message: 'Tin tuyển đã có ứng viên, bạn không thể xóa tin đăng này!',
        hideCancelButton: true
      });
      return;
    }
    alertDialog({
      selectedId: data.id,
      handleConfirm: handleConfirmDelete,
      message: `Bạn có chắc chắn muốn xóa tin đăng ${data?.row?.jobTitle}?`
    });
  };

  const handleEdit = (data) => {
    if (data?.row?.applications?.length > 0) {
      alertDialog({
        message:
          'Tin tuyển dụng đã có ứng viên, bạn không thể chỉnh sửa tin tuyển dụng này!',
        hideCancelButton: true
      });
      return;
    }
    navigate(
      `/employer/recruitment/list/${rewriteUrl(data?.row?.jobTitle)}?id=${btoa(
        data?.id
      )}`
    );
  };

  return (
    <>
      <IconButton onClick={() => handleEdit(data)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => handleDelete(data)}>
        <DeleteOutlineIcon />
      </IconButton>
    </>
  );
};

export default function TablePost({ data, pageSize, setSortModel }) {
  const { isMobile } = useResponsive();
  const columns: GridColDef[] = [
    {
      field: 'jobTitle',
      headerName: 'Tên tin đăng',
      minWidth: isMobile ? 220 : 400,
      maxWidth: isMobile ? 270 : 450,
      headerAlign: 'center',
      renderCell: renderJobTitle,
      sortable: true
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
      renderCell: renderStatus
    },
    {
      field: 'action',
      headerName: 'Thao tác',
      width: isMobile ? 80 : 120,
      headerAlign: 'center',
      align: 'center',
      renderCell: renderAtion
    }
  ];
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
      onSortModelChange={(newSortModel) => {
        handleSort(newSortModel, setSortModel);
      }}
      hideFooter
      sx={{ height: '74vh', width: '100%' }}
    />
  );
}
