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
  Link,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';
import useQueryAllUserByAdmin from 'src/modules/admin/hooks/useQueryAllUserByAdmin';
import useQueryTotalUserResultByAdmin from 'src/modules/admin/hooks/useQueryTotalUserResultByAdmin';
import SuspenseLoader from 'src/components/SuspenseLoader';
import Pagination from 'src/components/Pagination';

const renderCellText = (params) => (
  <Typography
    fontStyle={!params.value ? 'italic' : 'normal'}
    color={!params.value ? 'text.disabled' : 'text.primary'}
  >
    {params.value ? params.value : 'Chưa cập nhật'}
  </Typography>
);
const userManagementColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Tên người dùng',
    minWidth: 200,
    renderCell: renderCellText
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 200,
    flex: 1,
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
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => (
      <div>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to={`/edit-user/${params.row.id}`}
          size="small"
        >
          Xem
        </Button>
        <Button
          // onClick={() => handleDeleteUser(params.row.id)}
          variant="contained"
          color="error"
          size="small"
          sx={{ marginLeft: 1 }}
        >
          Xóa
        </Button>
      </div>
    )
  }
];

const UserManagement = () => {
  const userPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const { userList, isLoading, refetch } = useQueryAllUserByAdmin({
    page: currentPage,
    num: userPerPage
  });
  const { totalResults } = useQueryTotalUserResultByAdmin();
  const validvalidTotalPages = Number.isInteger(totalResults)
    ? totalResults
    : 1;
  const totalPages = Math.ceil(validvalidTotalPages / userPerPage);

  const handleDeleteUser = (userId) => {
    // Implement the logic to delete the user with the given userId
    console.log(`Deleting user with ID: ${userId}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (userList) {
      const list = [...userList];
      list.forEach((obj) => {
        // Duyệt qua từng thuộc tính của đối tượng
        for (let key in obj) {
          // Kiểm tra nếu giá trị của thuộc tính là rỗng, null hoặc undefined
          if (!obj[key] && obj[key] !== 0) {
            // Đặt giá trị của thuộc tính là 'Chưa cập nhật'
            obj[key] = 'Chưa cập nhật';
          }
        }
      });
      setUsers(list);
    }
  }, [userList]);

  if (isLoading || !userList[0]?.id) {
    return <SuspenseLoader />;
  }

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
            <CardHeader title="Danh sách người dùng" />
            <Divider />
            <CardContent>
              <TableData
                sx={{ height: '72vh', width: '100%' }}
                rows={userList}
                columns={userManagementColumns}
                hideFooter
              />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserManagement;
