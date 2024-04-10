import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import JobList from '../../jobs/components/JobList';
import ProfileCard from './ProfileCard';
import useQueryEmployee from '../hook/useQueryEmployee';
import SearchBar from 'src/components/SearchBar/SearchBar';
import JobFilter from '../../jobs/components/JobFilter';
import { useLocation } from 'react-router';
import SuspenseLoader from 'src/components/SuspenseLoader';

export default function FindProfiles() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const { state } = useLocation();
  const locationState = state as any;
  console.log(state);

  const pageSize = 12;
  const { profile, isLoading } = useQueryEmployee({
    page: page,
    num: pageSize,
    ...filter,
    profession: locationState?.profession,
    jobTitle: locationState?.jobTitle
  });

  const handleFilter = (data: any) => {
    // for (const key in data) {
    //   if (data[key] === 'Tất cả') {
    //     data[key] = '';
    //   }
    // }

    setFilter((prev) => ({
      ...prev,
      ...data
    }));
  };

  if (isLoading) return <SuspenseLoader />;

  return (
    <Container sx={{ p: 3 }}>
      <Typography mb={2} fontSize={22} fontWeight={700}>
        Tìm kiếm ứng viên
      </Typography>
      <SearchBar to="/employer/find-profiles" sx={{ my: 3 }} />
      <JobFilter handleFilter={handleFilter} />
      <Container
        sx={{
          mb: 3,
          p: 3,
          bgcolor: '#fbfeff',
          minHeight: '65vh'
        }}
      >
        <Grid container spacing={1}>
          {profile.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ProfileCard profile={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
        {profile?.length === 0 && (
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
        )}
      </Container>
    </Container>
  );
}
