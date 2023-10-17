import { useState } from 'react';
import { Box, Grid, Container, Typography, Pagination } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import LinkText from 'src/components/LinkText';
import JobCard from './JobCard';

function UrgentHiringJob() {
  const { jobs } = useQueryJob();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentPageJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredJobs = currentPageJobs.filter((job) => {
    const applicationDeadline = new Date(job.applicationDeadline);
    const today = new Date();
    const tenDaysAgo = new Date(today);
    tenDaysAgo.setDate(today.getDate() + 10);
    return applicationDeadline <= tenDaysAgo;
  });

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
          <span style={{ color: '#ce8b0e' }}>{filteredJobs.length}</span> việc làm đang
          tuyển dụng
        </Typography>
        <Grid container spacing={2}>
          {filteredJobs.map((job, index) => (
            <Grid key={index} item xs={12}>
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
