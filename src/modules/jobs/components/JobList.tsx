import { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LinkText from 'src/components/LinkText';
import JobCard from './JobCard';
import Pagination from 'src/components/Pagination';
import JobFilter from './JobFilter';
import useQueryTotalResultOfJobs from '../hooks/useQueryTotalResultOfJobs';
import WorkIcon from '@mui/icons-material/Work';
import SuspenseLoader from 'src/components/SuspenseLoader';

function JobList(props) {
  const {
    pageTitle,
    profession,
    queryJobs,
    sx,
    numOfJobPerPage,
    employerId,
    jobTitle
  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    employerId: employerId,
    profession: profession,
    employmentType: '',
    degree: '',
    experience: '',
    positionLevel: '',
    sex: '',
    jobTitle: jobTitle
  });
  const {
    totalResults,
    refetch: refetchTotalResults,
    isLoading: isLoadingTotalResult
  } = useQueryTotalResultOfJobs({
    ...filter
  });
  const pageSize = numOfJobPerPage ? numOfJobPerPage : 15;
  const totalPages = Math.ceil(totalResults / pageSize);
  const { jobs, refetch, isLoading } = queryJobs({
    page: currentPage,
    num: pageSize,
    ...filter
  });
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = (data: any) => {
    setFilter((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    refetch();
    refetchTotalResults();
  }, [filter]);

  return (
    <Container disableGutters maxWidth="md" sx={{ py: 3, ...sx }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" justifyContent="space-between">
          <WorkIcon color="secondary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h3" display={'flex'} alignItems={'center'}>
            {pageTitle}
          </Typography>
        </Box>
      </Box>
      <JobFilter handleFilter={handleFilter} />
      <Container sx={{ mb: 3, py: 3, bgcolor: '#fbfeff' }}>
        <Typography fontSize={18} mb={2}>
          <Box style={{ color: '#ce8b0e', display: 'inline' }}>
            {totalResults ? totalResults : 0}
          </Box>{' '}
          việc làm đang tuyển dụng
        </Typography>
        <Grid container spacing={2} minHeight={300}>
          {(isLoading || isLoadingTotalResult) && <SuspenseLoader />}
          {jobs.length ? (
            jobs.map((job, index) => (
              <Grid key={job?.id} item xs={12}>
                <JobCard key={index} job={job} />
              </Grid>
            ))
          ) : (
            <Typography fontStyle={'italic'} margin={'auto'}>
              Không tìm thấy việc làm phù hợp
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

export default JobList;
