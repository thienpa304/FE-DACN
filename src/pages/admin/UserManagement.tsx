import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Link
} from '@mui/material';
import { Box } from '@mui/system';
import { GridColDef } from '@mui/x-data-grid';
import TableData from 'src/components/TableData';

const userManagementColumns: GridColDef[] = [
  {
    field: 'username',
    headerName: 'Tên người dùng',
    minWidth: 200,
    renderCell: (params) => (
      <Link component={RouterLink} to={`/edit-user/${params.row.id}`}>
        {params.value}
      </Link>
    )
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 200
  },
  {
    field: 'registrationDate',
    headerName: 'Ngày đăng ký',
    minWidth: 150
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
    renderCell: (params) => (
      <div>
        <Button
          component={RouterLink}
          to={`/edit-user/${params.row.id}`}
          variant="outlined"
          size="small"
        >
          Sửa
        </Button>
        <Button
          // onClick={() => handleDeleteUser(params.row.id)}
          variant="outlined"
          size="small"
          sx={{ marginLeft: 1 }}
        >
          Xóa
        </Button>
      </div>
    )
  }
];

const generateSampleUserData = () => {
  const sampleData = [];
  for (let i = 1; i <= 20; i++) {
    sampleData.push({
      id: i,
      username: `user${i}`,
      email: `user${i}@example.com`,
      registrationDate: `2023-01-${i < 10 ? `0${i}` : i}`,
      role: i % 2 === 0 ? 'Admin' : 'User'
    });
  }
  return sampleData;
};

const UserManagement = () => {
  const sampleUserData = generateSampleUserData();

  const handleDeleteUser = (userId) => {
    // Implement the logic to delete the user with the given userId
    console.log(`Deleting user with ID: ${userId}`);
  };

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
              <Box sx={{ height: '75vh', width: '100%' }}>
                <TableData
                  rows={sampleUserData}
                  columns={userManagementColumns}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserManagement;
