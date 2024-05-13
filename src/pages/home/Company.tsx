import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Link from 'src/components/Link';
import Pagination from 'src/components/Pagination';
import CompanyCard from 'src/modules/company/components/CompanyCard';
import BusinessIcon from '@mui/icons-material/Business';

export default function Company(props) {
  const { pageTitle, sx, numOfJobPerPage, queryCompanys } = props;
  const { companyList, totalResults } = queryCompanys({ num: 4, page: 1 });
  // const totalResults = companyList?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = numOfJobPerPage ? numOfJobPerPage : 15;
  const totalPages = Math.ceil(totalResults / pageSize) || 1;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Card
      sx={{
        borderColor: '#98E4FF',
        borderRadius: '5px',
        mt: 2
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          <BusinessIcon color="secondary" sx={{ fontSize: 35 }} />
          <Typography fontWeight={700} fontSize={20} alignSelf="end">
            Danh sách công ty
          </Typography>
        </Box>
        <Link
          to="/company"
          sx={{
            fontSize: 16,
            fontWeight: 700
          }}
        >
          Xem thêm
        </Link>
      </Box>
      <Box p={3}>
        <Grid container spacing={1} minHeight={400} mb={2}>
          {companyList?.length ? (
            companyList.map((company, index) => (
              <Grid key={company?.userId} item xs={12} sm={6} md={4} lg={3}>
                <CompanyCard company={company} employerId={company?.userId} />
              </Grid>
            ))
          ) : (
            <Typography fontStyle={'italic'} margin={'auto'}>
              Chưa có công ty nào
            </Typography>
          )}
        </Grid>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Box>
    </Card>
  );
}
