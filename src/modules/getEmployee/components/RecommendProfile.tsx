import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useQueryJobByOwner from 'src/modules/jobs/hooks/useQueryJobByOwner';
import TableData from 'src/components/TableData';
import { GridColDef } from '@mui/x-data-grid';
import { renderJobTitle } from 'src/pages/recruitment-list/TablePost';
import useQueryEmployeeByKeywords from '../hook/useQueryEmployeeByKeywords';
import Pagination from 'src/components/Pagination';
import JobFilter from 'src/modules/jobs/components/JobFilter';

export default function RecommendProfile() {
  const jobPageSize = 9;
  const profilePageSize = 8;
  const [jobCurrentPage, setJobCurrentPage] = useState(1);
  const [profileCurrentPage, setProfleCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState('');
  const [showProfile, setShowProfile] = useState([]);
  const [jobInfo, setJobInfo] = useState(null);
  const [filter, setFilter] = useState(null);
  const {
    jobs,
    totalResults: totalJobResults,
    isLoading
  } = useQueryJobByOwner({
    page: jobCurrentPage,
    num: jobPageSize,
    status: 'Đã duyệt'
  });

  const {
    profile,
    totalResults: totalProfileResults,
    isLoading: isLoadingProfile
  } = useQueryEmployeeByKeywords({
    page: profileCurrentPage,
    num: profilePageSize,
    keywords: keywords,
    ...jobInfo,
    ...filter
  });

  const totalJobPages = Math.ceil(totalJobResults / jobPageSize) || 1;
  const totalProfilePages =
    Math.ceil(totalProfileResults / profilePageSize) || 1;

  const addInfo = (job) => {
    setJobInfo({
      profession: job?.profession
      // degree: job?.degree,
      // experience: job?.experience,
      // sex: job?.sex,
      // minAge: job?.minAge,
      // maxAge: job?.maxAge
    });
  };

  const handleFilter = (data) => {
    setFilter((prev) => ({
      ...prev,
      ...data
    }));
  };

  const renderAtion = (data) => {
    return (
      <Button
        onClick={() => {
          setKeywords(data?.row?.keywords);
          addInfo(data?.row);
        }}
        variant="contained"
      >
        Bắt đầu
      </Button>
    );
  };
  const columns: GridColDef[] = [
    {
      field: 'jobTitle',
      headerName: 'Tên tin đăng',
      minWidth: 550,
      headerAlign: 'center',
      renderCell: renderJobTitle
    },
    {
      field: 'keywords',
      headerName: 'Từ khóa',
      minWidth: 400,
      headerAlign: 'center'
      // renderCell: renderJobTitle
    },
    {
      field: 'action',
      headerName: 'Tìm hồ sơ',
      minWidth: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: renderAtion
    }
  ];

  useEffect(() => {
    if (!profile) return;
    const testProfiles = profile?.map((item) => {
      return {
        ...item,
        personal_information: {
          sex: item?.employee?.user?.sex,
          dob: item?.employee?.user?.dob
        },
        online_profile: {
          profession: item?.profession,
          degree: item?.degree,
          experience: item?.experience
        }
      };
    });

    // const passRoundProfile = testProfiles.filter(
    //   (item) => firstRoundForGeneralInfo(jobInfo, item) >= 30
    // );
    setShowProfile(profile);
    const section = document.getElementById('recommend-profile');
    section?.scrollIntoView({ behavior: 'smooth' });
  }, [JSON.stringify(profile)]);

  if (isLoading) return <SuspenseLoader />;

  return (
    <Container maxWidth="xl" sx={{ p: 3 }}>
      <Typography fontSize={22} fontWeight={700}>
        Gợi ý hồ sơ tiềm năng
      </Typography>
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
            <CardHeader title="Tìm kiếm theo tin tuyển dụng" />
            <Divider />
            <CardContent>
              <TableData
                rows={jobs}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: jobPageSize
                    }
                  }
                }}
                sx={{
                  minHeight: '72.7vh',
                  justifySelf: 'center',
                  mx: 'auto'
                }}
                hideFooter
              />
              <Pagination
                currentPage={jobCurrentPage}
                totalPages={totalJobPages}
                handlePageChange={setJobCurrentPage}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography id="recommend-profile" fontWeight={700} fontSize={22} my={3}>
        Hồ sơ gợi ý
      </Typography>
      <JobFilter handleFilter={handleFilter} />
      <Grid container xs={12} sx={{ width: '100%' }}>
        <Grid item xs={12}>
          <Container
            sx={{
              mb: 3,
              p: 3,
              bgcolor: '#fbfeff',
              minHeight: '72vh'
            }}
          >
            {isLoadingProfile && <CircularProgress />}
            <Grid container spacing={1} mb={2}>
              {showProfile?.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProfileCard profile={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>

            {!Boolean(showProfile?.length) ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  mt={10}
                  textAlign="center"
                  fontStyle="italic"
                  color="#9999"
                >
                  Không tìm được hồ sơ phù hợp
                </Typography>
              </Box>
            ) : (
              <Pagination
                currentPage={profileCurrentPage}
                totalPages={totalProfilePages}
                handlePageChange={setProfleCurrentPage}
              />
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
