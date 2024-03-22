import { useState } from 'react';
import { Box, Grid, Container, Typography, Pagination } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import LinkText from 'src/components/LinkText';
import JobCard from '../../modules/jobs/components/JobCard';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';
import JobList from 'src/modules/jobs/components/JobList';

function UrgentHiringJob() {
  const { totalResults } = useQueryTotalResults();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 15;
  const validTotalPages = Number.isInteger(totalResults) ? totalResults : 1;
  const totalPages = Math.ceil(validTotalPages / jobsPerPage);
  const { jobs } = useQueryAllJob({ page: currentPage, num: jobsPerPage });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <JobList
      pageTitle="Công việc tuyển gấp"
      totalRecords={totalResults}
      queryJobs={useQueryAllJob}
    />
  );
}

export default UrgentHiringJob;
