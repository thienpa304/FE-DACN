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
  Tab,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useQueryJobByOwner from 'src/modules/jobs/hooks/useQueryJobByOwner';
import TableData from 'src/components/TableData';
import { GridColDef } from '@mui/x-data-grid';
import {
  renderJobTitle,
  renderStatus
} from 'src/pages/company-job-list/TablePost';
import useQueryEmployeeByKeywords from '../hook/useQueryEmployeeByKeywords';
import Pagination from 'src/components/Pagination';
import JobFilter from 'src/modules/jobs/components/JobFilter';
import { isMobile } from 'src/constants/reponsive';
import alertDialog from 'src/utils/alertDialog';
import TabsWrapper from 'src/components/TabWrapper';
import { tabs } from 'src/pages/company-job-list';
import { handleSort } from 'src/utils/sortData';

export default function RecommendProfile() {
  const jobPageSize = 9;
  const profilePageSize = 8;
  const [jobCurrentPage, setJobCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('');
  const [profileCurrentPage, setProfleCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState('');
  const [showProfile, setShowProfile] = useState([]);
  const [jobInfo, setJobInfo] = useState(null);
  const [filter, setFilter] = useState(null);
  const [sortModel, setSortModel] = useState({ orderBy: '', sort: '' });
  const {
    jobs,
    totalResults: totalJobResults,
    totalPages,
    isLoading
  } = useQueryJobByOwner({
    page: jobCurrentPage,
    num: jobPageSize,
    status: currentTab,
    ...sortModel
  });

  const {
    profile,
    totalResults: totalProfileResults,
    totalPages: totalProfilePages,
    isLoading: isLoadingProfile
  } = useQueryEmployeeByKeywords({
    page: profileCurrentPage,
    num: profilePageSize,
    keywords: keywords,
    ...jobInfo,
    ...filter
  });

  const addInfo = (job) => {
    setJobInfo({
      profession: job?.profession
    });
  };

  const handleFilter = (data) => {
    setFilter((prev) => ({
      ...prev,
      ...data
    }));
  };

  const handleTabsChange = (e, value) => {
    setCurrentTab(value);
    setJobCurrentPage(1);
  };

  const renderAtion = (data) => {
    return (
      <Button
        onClick={() => {
          setKeywords(data?.row?.keywords);
          addInfo(data?.row);
        }}
        variant="contained"
        size={isMobile ? 'small' : 'medium'}
      >
        Tìm kiếm
      </Button>
    );
  };
  const columns: GridColDef[] = [
    {
      field: 'jobTitle',
      headerName: 'Tên tin đăng',
      minWidth: !isMobile ? 500 : 160,
      headerAlign: 'center',
      renderCell: renderJobTitle,
      sortable: true
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: renderStatus
    },
    {
      field: 'keywords',
      headerName: 'Từ khóa',
      minWidth: 400,
      headerAlign: 'center'
    },
    {
      field: 'action',
      headerName: 'Tìm hồ sơ',
      minWidth: !isMobile ? 150 : 110,
      headerAlign: 'center',
      align: 'center',
      renderCell: renderAtion
    }
  ];

  useEffect(() => {
    if (totalProfileResults === undefined) return;
    console.log('totalProfileResults', totalProfileResults);
    if (totalProfileResults <= 0) {
      alertDialog({
        title: 'Kết quả tìm kiếm',
        message: 'Không tìm thấy hồ sơ phù hợp',
        hideCancelButton: true
      });
    } else {
      // setShowProfile(profile);
      const section = document.getElementById('recommend-profile');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [profile]);

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
              <TabsWrapper
                onChange={handleTabsChange}
                value={currentTab}
                variant="scrollable"
                scrollButtons={false}
                sx={{
                  display: { md: 'inline-block' },
                  borderBottom: 1,
                  borderColor: 'divider'
                }}
              >
                {tabs.map((tab) => {
                  return (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                  );
                })}
              </TabsWrapper>
              <TableData
                rows={jobs}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: jobPageSize
                    }
                  },
                  columns: {
                    columnVisibilityModel: {
                      keywords: !isMobile,
                      status: !isMobile
                    }
                  }
                }}
                sx={{
                  minHeight: '74vh',
                  justifySelf: 'center',
                  mx: 'auto'
                }}
                hideFooter
                onSortModelChange={(newSortModel) => {
                  handleSort(newSortModel, setSortModel);
                }}
              />
              <Pagination
                currentPage={jobCurrentPage}
                totalPages={totalPages}
                handlePageChange={setJobCurrentPage}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box id="recommend-profile" display={!jobInfo && 'none'}>
        <Typography fontWeight={700} fontSize={22} my={3}>
          Hồ sơ gợi ý
        </Typography>
        <JobFilter handleFilter={handleFilter} />
        <Grid container sx={{ width: '100%' }}>
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
                {profile?.map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <ProfileCard profile={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {!totalProfileResults ? (
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
      </Box>
    </Container>
  );
}
