import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import CompanyCard from 'src/modules/company/components/CompanyCard';
import useQueryFollowCompany from 'src/modules/company/hook/useQueryFollowCompany';

export default function JobFollow() {
  const { companyFollow, isLoading } = useQueryFollowCompany();

  if (isLoading) return <SuspenseLoader />;
  if (!companyFollow?.length) {
    return (
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography fontSize={18} fontStyle="italic">
          Bạn chưa theo dõi công ty nào cả
        </Typography>
      </Container>
    );
  }

  return (
    <Box p={3}>
      <Grid container mb={3} spacing={2}>
        {companyFollow?.map((company, index) => (
          <Grid key={company.postId} item xs={12} sm={4}>
            <CompanyCard
              key={index}
              company={company}
              employerId={company?.employerId}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </Box>
  );
}
