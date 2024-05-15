import { Box, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import ProfileCard from './ProfileCard';
import useQueryEmployee from '../hook/useQueryEmployee';
import SearchBar from 'src/components/SearchBar/SearchBar';
import JobFilter from '../../jobs/components/JobFilter';
import { useLocation } from 'react-router';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useSearchParams } from 'react-router-dom';

export default function FindProfiles() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const { state } = useLocation();
  const locationState = state as any;
  const [searchParams, setSearchParams] = useSearchParams();
  const jobTitle = searchParams.get('search');
  const workAddress = searchParams.get('address');
  const profession = searchParams.get('profession');

  const pageSize = 12;
  const { profile, isLoading } = useQueryEmployee({
    page: page,
    num: pageSize,
    ...filter,
    profession: profession,
    jobTitle: jobTitle,
    workAddress: workAddress
  });

  const handleFilter = (data: any) => {
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
