import { useState } from 'react';
import { Box, Grid, Container, Typography, Pagination } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import LinkText from 'src/components/LinkText';
import JobCard from '../../modules/jobs/components/JobCard';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';
import JobList from 'src/modules/jobs/components/JobList';

function UrgentHiringJob() {
  return <JobList pageTitle="Công việc tuyển gấp" queryJobs={useQueryAllJob} />;
}

export default UrgentHiringJob;
