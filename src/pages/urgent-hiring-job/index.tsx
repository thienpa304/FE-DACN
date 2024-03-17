import { useState } from 'react';
import { Box, Grid, Container, Typography, Pagination } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import LinkText from 'src/components/LinkText';
import JobCard from './JobCard';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';

function UrgentHiringJob() {
  const { totalResults } = useQueryTotalResults();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 15;
  const validvalidTotalPages = Number.isInteger(totalResults)
    ? totalResults
    : 1;
  const totalPages = Math.ceil(validvalidTotalPages / jobsPerPage);
  const { jobs } = useQueryAllJob({ page: currentPage, num: jobsPerPage });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" justifyContent="space-between">
          <ScheduleIcon color="secondary" sx={{ fontSize: 40 }} />
          <Typography variant="h3">Việc làm tuyển gấp</Typography>
        </Box>
      </Box>
      <Container sx={{ mb: 3, py: 3, bgcolor: '#fbfeff' }}>
        <Typography fontSize={15} mb={2}>
          <span style={{ color: '#ce8b0e' }}>{jobs.length}</span> việc làm đang
          tuyển dụng
        </Typography>
        <Grid container spacing={2}>
          {jobs.map((job, index) => (
            <Grid key={job.id} item xs={12}>
              <LinkText to={`/job/${job?.postId}`}>
                <JobCard key={index} job={job} />
              </LinkText>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => handlePageChange(page)}
        color="secondary"
        variant="outlined"
        shape="rounded"
        size="large"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
}

export default UrgentHiringJob;
