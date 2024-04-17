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
import useQueryTotalResultOfEmployeeByAdmin from 'src/modules/admin/hooks/useQueryTotalResultOfEmployeeByAdmin';
import CVPage from '../view-candidate-profile/ViewCV';
import CloseIcon from '@mui/icons-material/Close';
import SuspenseLoader from 'src/components/SuspenseLoader';
import alertDialog from 'src/utils/alertDialog';
import useDeleteDocumentProfileByAdmin from 'src/modules/jobProfile/attachedDocument/hooks/useDeleteDocumentProfileByAdmin';
import useDeleteOnlineProfileByAdmin from 'src/modules/jobProfile/onlineProfile/hooks/useDeleteOnlineProfileByAdmin';

const ProfileManagement = () => {
  const [searchUserName, setSearchUserName] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewProfile, setViewProfile] = useState({
    isOpen: false,
    profile: null
  });
  const [viewProfessionMode, setViewProfessionMode] = useState(true);

  const { totalResults } = useQueryTotalResultOfEmployeeByAdmin({
    profession: selectedProfession
  });
  const pageSize = 10;
  const totalPages = Math.ceil(totalResults / pageSize) || 1;
  const { employeeList, isLoading, refetch } = useQueryEmployeesByAdmin(
    {
      profession: selectedProfession,
      page: currentPage,
      num: pageSize,
      name: searchUserName
    },
    !viewProfessionMode
  );
  const { onDeleteDocumentProfile } = useDeleteDocumentProfileByAdmin();
  const { onDeleteOnlineProfile } = useDeleteOnlineProfileByAdmin();

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
    let profile = null;
    if (params?.field === 'online') {
      profile = params?.row?.online_profile;
    }
    if (params?.field === 'document') {
      profile = params?.row?.attached_document;
    }

    const handleConfirmDelete = (id) => {
      if (!id) return;
      if (params?.field === 'online') {
        onDeleteOnlineProfile(id);
      }
      if (params?.field === 'document') {
        onDeleteDocumentProfile(id);
      }
    };

    const handleDeleteUser = (selectedId) => {
      console.log(selectedId);
      alertDialog({
        selectedId,
        handleConfirmDelete
      });
    };

    return (
      <>
        {profile ? (
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
              onClick={() => handleDeleteUser(params.id)}
              variant="contained"
              color="error"
              size="small"
              sx={{ marginLeft: 1 }}
            >
              Xóa
            </Button>
          </Box>
        ) : (
          <Typography fontStyle="italic" color="text.disabled">
            Chưa cập nhật
          </Typography>
        )}
      </>
    );
  };

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

  const handleSearchUser = () => {
    refetch();
  };

  if (isLoading) return <SuspenseLoader />;

  return (
    <Container maxWidth="lg" style={{ marginTop: 30 }}>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <CardHeader title="Quản lý hồ sơ và CV" />
          <Box
            sx={{
              display: 'flex'
            }}
          >
            <Button
              variant="contained"
              color={!viewProfessionMode ? 'primary' : 'info'}
              onClick={() => {
                setViewProfessionMode((prev) => !prev);
              }}
              sx={{ margin: 'auto 25px auto auto', height: 35, width: 150 }}
            >
              {!viewProfessionMode ? 'Xem theo ngành' : 'Tất cả'}
            </Button>
          </Box>
        </Box>
        <Divider />

        <CardContent>
          {!viewProfessionMode && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TextField
                label="Tên Người Dùng"
                variant="outlined"
                value={searchUserName}
                onChange={(e) => setSearchUserName(e.target.value)}
                sx={{ height: '50%', flex: 1 }}
                size="small"
              />
              <Button
                variant="contained"
                color="info"
                onClick={handleSearchUser}
                sx={{ width: 120, height: 35 }}
              >
                Tìm hồ sơ
              </Button>
            </Box>
          )}
          {viewProfessionMode && (
            <ProfessionList
              handleSelectProfession={setSelectedProfession}
              handleViewProfessionMode={setViewProfessionMode}
            />
          )}
          <Grid container>
            <Grid item xs={12}>
              <Divider sx={{ mt: 2 }} />
              {!viewProfessionMode && (
                <Grid container spacing={2}>
                  <Grid item xs={2.5}>
                    <DirectoryTreeView
                      setSelectedProfession={setSelectedProfession}
                      setViewProfessionMode={setViewProfessionMode}
                    />
                  </Grid>
                  <Grid item xs={9.5}>
                    <Typography
                      textAlign="center"
                      fontWeight={700}
                      fontSize={20}
                      mb={1}
                      lineHeight={3}
                    >
                      Danh sách hồ sơ người dùng
                    </Typography>
                    {employeeList.length > 0 ? (
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
                    ) : (
                      <Typography
                        mt={10}
                        textAlign="center"
                        fontStyle="italic"
                        color="#9999"
                      >
                        Không có hồ sơ nào
                      </Typography>
                    )}
                  </Grid>
                </Grid>
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

export default ProfileManagement;
