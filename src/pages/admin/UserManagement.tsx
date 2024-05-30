import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import useQueryAllUserByAdmin from 'src/modules/admin/hooks/useQueryAllUserByAdmin';
import useQueryTotalUserResultByAdmin from 'src/modules/admin/hooks/useQueryTotalUserResultByAdmin';
import SuspenseLoader from 'src/components/SuspenseLoader';
import Pagination from 'src/components/Pagination';
import useDeleteUserById from 'src/modules/admin/hooks/useDeleteUserByAdmin';
import alertDialog from 'src/utils/alertDialog';
import { isMobile } from 'src/constants/reponsive';
import { TypographyEllipsis } from 'src/components/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import detailsModal from 'src/utils/detailsModal';
import { handleSort } from 'src/utils/sortData';

const renderCellText = (params) => {
  const handleOpenDetailModal = () => {
    const detailsData = {
      'Tên người dùng': params?.row?.name || 'Chưa cập nhật',
      Email: params?.row?.email || 'Chưa cập nhật',
      'Ngày sinh': params.row?.dob || 'Chưa cập nhật',
      'Giới tính': params?.row?.sex || 'Chưa cập nhật'
    };
    detailsModal(detailsData);
  };
  return (
    <Grid container>
      <Grid item xs={10} md={12}>
        <TypographyEllipsis
          fontStyle={!params.value ? 'italic' : 'normal'}
          color={!params.value ? 'text.disabled' : 'text.primary'}
        >
          {params.value ? params.value : 'Chưa cập nhật'}
        </TypographyEllipsis>
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

const renderActionsCell = (params) => {
  const { onDeleteUser } = useDeleteUserById();

  const handleDeleteUser = (userId) => {
    alertDialog({
      selectedId: userId,
      handleConfirm: handleConfirmDelete
    });
  };

  const handleConfirmDelete = (userId) => {
    if (userId) onDeleteUser([userId]);
  };

  return (
    <Button
      onClick={() => handleDeleteUser(params.id)}
      variant="contained"
      color="error"
      size="small"
    >
      Xóa
    </Button>
  );
};

const userManagementColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tên người dùng',
    minWidth: !isMobile ? 200 : 180,
    renderCell: renderCellText,
    sortable: true
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 200,
    maxWidth: 250,
    renderCell: renderCellText
  },
  {
    field: 'phone',
    headerName: 'Số điện thoại',
    minWidth: 150,
    renderCell: renderCellText
  },
  {
    field: 'dob',
    headerName: 'Ngày sinh',
    minWidth: 150,
    renderCell: renderCellText
  },
  {
    field: 'sex',
    headerName: 'Giới tính',
    minWidth: 120,
    renderCell: renderCellText
  },
  {
    field: 'role',
    headerName: 'Vai trò',
    minWidth: 150
  },
  {
    field: 'actions',
    headerName: 'Hành động',
    minWidth: !isMobile ? 150 : 50,
    headerAlign: 'center',
    align: 'center',
    renderCell: renderActionsCell
  }
];

const UserManagement = () => {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortModel, setSortModel] = useState({ orderBy: '', sort: '' });
  const { userList, isLoading, totalPages } = useQueryAllUserByAdmin({
    page: currentPage,
    num: pageSize,
    ...sortModel
  });

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        marginTop={0}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Quản lý tài khoản" />
            <Divider />
            <CardContent>
              <TableData
                sx={{ minHeight: '72vh', width: '100%' }}
                rows={userList}
                columns={userManagementColumns}
                hideFooter
                initialState={{
                  columns: {
                    columnVisibilityModel: {
                      email: !isMobile,
                      phone: !isMobile,
                      dob: !isMobile,
                      sex: !isMobile,
                      role: !isMobile
                    }
                  }
                }}
                loading={isLoading}
                onSortModelChange={(newSortModel) => {
                  handleSort(newSortModel, setSortModel);
                }}
              />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={setCurrentPage}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserManagement;
