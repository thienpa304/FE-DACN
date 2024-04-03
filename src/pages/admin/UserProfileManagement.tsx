import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link as MuiLink,
  IconButton,
  Tooltip
} from '@mui/material';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectoryTreeView from './DirectoryTreeView';
import Pagination from 'src/components/Pagination';
import FormControl from 'src/components/FormControl';
import professions from 'src/constants/professions';
import TableData from 'src/components/TableData';
import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import ProfessionList from 'src/modules/admin/components/ProfessionList';

const renderCellText = () => {
  return <></>;
};

const columns: GridColDef[] = [
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
    field: 'online',
    headerName: 'Hồ sơ trực tuyến',
    minWidth: 150,
    renderCell: renderCellText
  },
  {
    field: 'document',
    headerName: 'Hồ sơ đính kèm',
    minWidth: 150,
    renderCell: renderCellText
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
          component={Link}
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

const UserProfileManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserProfile, setNewUserProfile] = useState('');
  const [newUserCV, setNewUserCV] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);

  const handleSelectProfession = (code: number) => {
    setSelectedProfession(code);
  };

  useEffect(() => {
    const generateSampleUserData = () => {
      const sampleData = [];
      for (let i = 1; i <= 20; i++) {
        sampleData.push({
          id: i,
          name: `User ${i}`,
          online: `Link to profile ${i}`,
          document: `Link to CV ${i}`,
          email: `user${i}@example.com`
        });
      }
      return sampleData;
    };

    setUsers(generateSampleUserData());
  }, []);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      profile: newUserProfile,
      cv: newUserCV,
      email: `user${users.length + 1}@example.com`,
      registrationDate: '2023-01-01',
      role: 'User'
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setNewUserName('');
    setNewUserProfile('');
    setNewUserCV('');
  };

  const handleEditUser = (userId) => {
    // Implement the logic to edit the user with the given userId
    console.log(`Editing user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    // Implement the logic to delete the user with the given userId
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 30 }}>
      <Card>
        <CardHeader title="Quản lý Hồ sơ và CV Người Dùng" />
        <Divider />
        <CardContent>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {selectedProfession && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setSelectedProfession(null); 
                }}
                sx={{ width: 120, height: 35 }}
              >
                Trở về
              </Button>
            )}
            <TextField
              label="Tên Người Dùng"
              variant="outlined"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              sx={{ height: '50%', flex: 1 }}
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddUser}
              sx={{ width: 120, height: 35 }}
            >
              Tìm hồ sơ
            </Button>
          </Box>
          {!selectedProfession && (
            <ProfessionList handleSelectProfession={handleSelectProfession} />
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider />
              {selectedProfession && (
                <Box display="flex">
                  <DirectoryTreeView />
                  <Box pl={5} borderLeft="2px solid #e5eaf2">
                    <Typography
                      textAlign="center"
                      fontWeight={700}
                      fontSize={20}
                      mb={1}
                      lineHeight={3}
                    >
                      Danh sách hồ sơ người dùng
                    </Typography>
                    <Box>
                      <TableData
                        columns={columns}
                        rows={users}
                        paginationModel={{ page: 0, pageSize: 9 }}
                        hideFooter
                      />
                      <Pagination
                        currentPage={1}
                        totalPages={1}
                        handlePageChange={() => {}}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserProfileManagement;
