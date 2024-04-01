import { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LinkText from 'src/components/LinkText';
import JobCard from '../../jobs/components/JobCard';
import Pagination from 'src/components/Pagination';
import JobFilter from '../../jobs/components/JobFilter';
import useQueryTotalResults from '../../jobs/hooks/useQueryTotalResults';
import WorkIcon from '@mui/icons-material/Work';
import CompanyCard from './CompanyCard';
import BusinessIcon from '@mui/icons-material/Business';

function CompanyList(props) {
  const {
    pageTitle,
    profession,
    queryJobs,
    sx,
    numOfJobPerPage,
    queryCompanys
  } = props;
  const { companyList } = queryCompanys({ num: 10, page: 1 });
  const totalResults = companyList?.length;
  const [currentPage, setCurrentPage] = useState(1);
  // const { totalResults } = useQueryTotalResults({});
  const jobsPerPage = numOfJobPerPage ? numOfJobPerPage : 15;
  const validTotalPages = Number.isInteger(totalResults) ? totalResults : 1;
  const totalPages = Math.ceil(validTotalPages / jobsPerPage);
  const { jobs } = queryJobs({
    page: currentPage,
    num: jobsPerPage
  });
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          </Box>{' '}
        </Typography>
        <Grid container spacing={2} minHeight={300}>
          {companyList?.length ? (
            companyList.map((company, index) => (
              <Grid key={company?.id} item xs={4}>
                <CompanyCard key={index} company={company} />
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
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}

export default CompanyList;
