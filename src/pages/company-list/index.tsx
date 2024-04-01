import { useState } from 'react';
import { Box, Grid, Container, Typography, Pagination } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import LinkText from 'src/components/LinkText';
import JobCard from '../../modules/jobs/components/JobCard';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';
import JobList from 'src/modules/jobs/components/JobList';
import CompanyList from 'src/modules/company/components/CompanyList';
import useQueryCompanyListByUser from 'src/modules/company/hook/useQueryCompanyListByUser';

function ShowCompanyPage() {
  return (
    <CompanyList
      pageTitle="Công ty đang tuyển dụng"
      queryJobs={useQueryAllJob}
      queryCompanys={useQueryCompanyListByUser}
    />
  );
}

export default ShowCompanyPage;
