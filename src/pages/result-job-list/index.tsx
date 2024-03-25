import { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography, Pagination } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import LinkText from 'src/components/LinkText';
import JobCard from '../../modules/jobs/components/JobCard';
import professions from 'src/constants/professions';
import { useParams } from 'react-router';
import JobFilter from 'src/modules/jobs/components/JobFilter';

function ResultJobList() {
  const { id } = useParams();
  const { jobs } = useQueryAllJob();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterResult, setFilterResult] = useState({});
  const [totalPages, setTotalPages] = useState(1);
  const [jobsToShow, setJobsToShow] = useState([]);
  const [profession, setProfession] = useState('');
  const jobsPerPage = 15;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = (data) => {
    setFilterResult(data);
  };

  useEffect(() => {
    const profession = professions.find(
      (profession) => profession.code.toString() === id
    )?.name;
    setProfession(profession);

    if (!profession) return;

    let filteredJobs = jobs.filter((job) => job.profession === profession);
    if (filterResult) {
      filteredJobs = filteredJobs.filter((job) =>
        Object.keys(filterResult).every(
          (key) =>
            filterResult[key] === null ||
            filterResult[key] === 'Tất cả' ||
            filterResult[key] === job[key]
        )
      );
    }

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = currentPage * jobsPerPage;
    const jobsToShow = filteredJobs.slice(startIndex, endIndex);

    setTotalPages(totalPages);
    setJobsToShow(jobsToShow);
  }, [id, currentPage, jobs.length, filterResult]);

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h4" lineHeight={2}>
              Việc làm
            </Typography>
            <Typography variant="h3" color="#7a530c">
              {profession}
            </Typography>
          </Box>
        </Box>
      </Box>
      <JobFilter handleFilter={handleFilter} />
      <Container sx={{ mb: 3, py: 3, bgcolor: '#fbfeff' }}>
        <Typography fontSize={18} mb={2}>
          <span style={{ color: '#ce8b0e' }}>{jobsToShow.length}</span> việc làm
          đang tuyển
        </Typography>
        <Grid container spacing={2}>
          {jobsToShow.map((job, index) => (
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

export default ResultJobList;
