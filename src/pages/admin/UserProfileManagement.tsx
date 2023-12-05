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

const UserProfileManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserProfile, setNewUserProfile] = useState('');
  const [newUserCV, setNewUserCV] = useState('');

  useEffect(() => {
    const generateSampleUserData = () => {
      const sampleData = [];
      for (let i = 1; i <= 20; i++) {
        sampleData.push({
          id: i,
          name: `User ${i}`,
          profile: `Link to profile ${i}`,
          cv: `Link to CV ${i}`,
          email: `user${i}@example.com`,
          registrationDate: `2023-01-${i < 10 ? `0${i}` : i}`,
          role: i % 2 === 0 ? 'Admin' : 'User'
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
    // Clear input fields after adding a new user
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
    <Container maxWidth="md" style={{ marginTop: 30 }}>
      <Card>
        <CardHeader title="Quản lý Hồ sơ và CV Người Dùng" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tên Người Dùng"
                variant="outlined"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Link Hồ sơ Cá nhân"
                variant="outlined"
                value={newUserProfile}
                onChange={(e) => setNewUserProfile(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Link CV"
                variant="outlined"
                value={newUserCV}
                onChange={(e) => setNewUserCV(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddUser}
              >
                Thêm Người Dùng
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6">Danh sách Người Dùng:</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên Người Dùng</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Hồ sơ Cá nhân</TableCell>
                      <TableCell>CV</TableCell>
                      <TableCell>Ngày Đăng Ký</TableCell>
                      <TableCell>Vai Trò</TableCell>
                      <TableCell>Thao Tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <MuiLink
                            href={user.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {user.name}
                          </MuiLink>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <MuiLink
                            href={user.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {user.profile}
                          </MuiLink>
                        </TableCell>
                        <TableCell>
                          <MuiLink
                            href={user.cv}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {user.cv}
                          </MuiLink>
                        </TableCell>
                        <TableCell>{user.registrationDate}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell style={{ display: 'flex' }}>
                          <Tooltip title="Chỉnh Sửa">
                            <IconButton
                              color="primary"
                              onClick={() => handleEditUser(user.id)}
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Xóa">
                            <IconButton
                              color="secondary"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserProfileManagement;
