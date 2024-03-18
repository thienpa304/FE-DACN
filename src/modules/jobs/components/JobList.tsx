import { useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LinkText from 'src/components/LinkText';
import JobCard from './JobCard';
import Pagination from 'src/components/Pagination';

function JobList(props) {
  const { pageTitle, totalRecords, queryJobs } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 15;
  const validTotalPages = Number.isInteger(totalRecords) ? totalRecords : 1;
  const totalPages = Math.ceil(validTotalPages / jobsPerPage);
  const { jobs } = queryJobs({ page: currentPage, num: jobsPerPage });

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
          <Typography variant="h3">{pageTitle}</Typography>
        </Box>
      </Box>
      <Container sx={{ mb: 3, py: 3, bgcolor: '#fbfeff' }}>
        <Typography fontSize={18} mb={2}>
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
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}

export default JobList;
