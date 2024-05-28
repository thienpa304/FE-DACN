import { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import Pagination from 'src/components/Pagination';
import CompanyCard from './CompanyCard';
import BusinessIcon from '@mui/icons-material/Business';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { isTablet } from 'src/constants/reponsive';

function CompanyList(props) {
  const { pageTitle, sx, queryCompanys } = props;
  const pageSize = 14;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    companyList,
    totalItems: totalResults,
    isLoading,
    totalPages
  } = queryCompanys({
    num: pageSize,
    page: currentPage
  });
  // const totalResults = companyList?.length;
  // const totalPages = Math.ceil(totalResults / pageSize) || 1;

  if (isLoading) return <SuspenseLoader />;
  return (
    <Container disableGutters maxWidth="lg" sx={{ py: 3, ...sx }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" justifyContent="space-between">
          <BusinessIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h3" display={'flex'} alignItems={'center'}>
            {pageTitle}
          </Typography>
        </Box>
      </Box>
      <Container sx={{ mb: 3, py: 3, bgcolor: '#fbfeff' }}>
        <Typography fontSize={18} mb={2}>
          Danh sách công ty
          <Box sx={{ color: '#ce8b0e', display: 'inline', ml: 1 }}>
            ({totalResults ? totalResults : 0})
          </Box>
        </Typography>
        <Grid container spacing={2} minHeight={300}>
          {companyList?.length ? (
            companyList.map((company, index) => (
              <Grid key={company?.userId} item xs={12} sm={6} md={3}>
                <CompanyCard company={company} employerId={company?.userId} />
              </Grid>
            ))
          ) : (
            <Typography fontStyle={'italic'} margin={'auto'}>
              Chưa có công ty nào
            </Typography>
          )}
        </Grid>
      </Container>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </Container>
  );
}

export default CompanyList;
