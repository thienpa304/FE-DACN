import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import Pagination from 'src/components/Pagination';
import SuspenseLoader from 'src/components/SuspenseLoader';
import CompanyCard from 'src/modules/company/components/CompanyCard';
import useQueryFollowCompany from 'src/modules/company/hook/useQueryFollowCompany';

export default function JobFollow() {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const { companyFollow, isLoading, totalPages } = useQueryFollowCompany({
    page: currentPage,
    num: pageSize
  });

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
        <Typography fontSize={18} fontStyle="italic" color="#9999">
          Bạn chưa theo dõi công ty nào cả
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ p: 3 }}>
      <Typography mb={2} fontSize={22} fontWeight={700}>
        Công ty đã theo dõi
      </Typography>
      <Grid container mb={3} spacing={2}>
        {companyFollow?.map((company, index) => (
          <Grid key={company?.employerId} item xs={12} sm={6} md={4}>
            <CompanyCard
              key={index}
              company={company?.employer}
              employerId={company?.employerId}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </Container>
  );
}
