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
  Link as MuiLink,
  IconButton,
  Tooltip,
  DialogTitle,
  Dialog,
  DialogContent
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
import useQueryEmployeesByAdmin from 'src/modules/admin/hooks/useQueryEmployeesByAdmin';
import useQueryTotalEmployeeResultByAdmin from 'src/modules/admin/hooks/useQueryTotalEmployeeResultByAdmin';
import CVPage from '../view-candidate-profile/ViewCV';
import CloseIcon from '@mui/icons-material/Close';
import SuspenseLoader from 'src/components/SuspenseLoader';

const UserProfileManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserProfile, setNewUserProfile] = useState('');
  const [newUserCV, setNewUserCV] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewProfile, setViewProfile] = useState({
    isOpen: false,
    profile: null
  });

  const { totalResults } = useQueryTotalEmployeeResultByAdmin({
    profession: selectedProfession
  });
  const pageSize = 10;
  const validTotalResult = Number.isInteger(totalResults) ? totalResults : 1;
  const totalPages = Math.ceil(validTotalResult / pageSize) || 1;
  const { employeeList, isLoading } = useQueryEmployeesByAdmin({
    profession: selectedProfession,
    page: currentPage,
    num: pageSize
  });

  const renderName = (params) => {
    return (
      <Typography
        fontStyle={!params.row?.user?.name ? 'italic' : 'normal'}
        color={!params.row?.user?.name ? 'text.disabled' : 'text.primary'}
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'wrap',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {params.row?.user?.name ? params.row?.user?.name : 'Chưa cập nhật'}
      </Typography>
    );
  };

  const renderEmail = (params) => {
    return (
      <Typography
        fontStyle={!params.row?.user?.email ? 'italic' : 'normal'}
        color={!params.row?.user?.email ? 'text.disabled' : 'text.primary'}
      >
        {params.row?.user?.email ? params.row?.user?.email : 'Chưa cập nhật'}
      </Typography>
    );
  };

  const renderProfile = (params) => {
    return (
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleViewProfile(params)}
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
      </Box>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Tên người dùng',
      minWidth: 200,
      renderCell: renderName
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 200,
      maxWidth: 250,
      renderCell: renderEmail
    },
    {
      field: 'online',
      headerName: 'Hồ sơ trực tuyến',
      minWidth: 250,
      renderCell: renderProfile,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'document',
      headerName: 'Hồ sơ đính kèm',
      minWidth: 250,
      renderCell: renderProfile,
      align: 'center',
      headerAlign: 'center'
    }
  ];

  const handleViewProfile = (params) => {
    let profile;
    if (params.field === 'online')
      profile = {
        online_profile: params?.row?.online_profile,
        personal_information: params?.row?.user
      };
    if (params.field === 'document')
      profile = {
        attached_document: params?.row?.attached_document,
        personal_information: params?.row?.user
      };

    setViewProfile({
      isOpen: true,
      profile: profile
    });
  };

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

  if (isLoading) return <SuspenseLoader />;

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
              <Divider sx={{ mt: 2 }} />
              {selectedProfession && (
                <Box display="flex">
                  <DirectoryTreeView
                    setSelectedProfession={setSelectedProfession}
                  />
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
                        rows={employeeList}
                        hideFooter
                        sx={{ minHeight: '65vh' }}
                      />
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={setCurrentPage}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog open={viewProfile.isOpen} fullWidth maxWidth="md">
        <DialogTitle
          sx={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem' }}
        >
          Hồ sơ người dùng
          <IconButton
            aria-label="close"
            onClick={() => {
              setViewProfile({ profile: null, isOpen: false });
            }}
            sx={{
              position: 'absolute',
              right: 14,
              top: 14,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider
          sx={{
            bgcolor: '#B6FFFA',
            height: 2
          }}
        />
        <DialogContent>
          <CVPage
            user={viewProfile?.profile}
            bgcolor="none"
            showTitle={false}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default UserProfileManagement;
