import { useState } from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Pagination
} from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import BusinessIcon from '@mui/icons-material/Business';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LinkText from 'src/components/LinkText';

function JobCard({ job }) {
  return (
    <Card sx={{ minHeight: 160, border: 1, borderColor: '#98E4FF' }}>
      <CardHeader
        sx={{ pt: 1.5, pb: 0, color: '#ce8b0e' }}
        title={job.jobTitle}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <Grid container gap={2}>
          <Grid item xs={2}>
            <Avatar
              src="https://images.vietnamworks.com/img/company-default-logo.svg"
              variant="rounded"
              sx={{
                bgcolor: '#a0b9cfc2',
                height: 100,
                width: '100%'
              }}
            >
              <BusinessIcon />
            </Avatar>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <BusinessIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                <Typography>{job.employer?.companyName}</Typography>
              </Box>
              <Box display="flex">
                <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                <Typography>
                  Lương:{' '}
                  {job.minSalary || job.maxSalary
                    ? `${job.minSalary || 'Thương lượng'} - ${
                        job.maxSalary || 'Thương lượng'
                      } triệu`
                    : 'Thương lượng'}
                </Typography>
              </Box>
              <Box display="flex">
                <LocationOnOutlinedIcon
                  sx={{ maxHeight: 18, color: 'grey.700' }}
                />
                <Typography>Địa điểm: {job.workAddress}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <ScheduleIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                <Typography>Loại hình: {job.employmentType}</Typography>
              </Box>
              <Box display="flex">
                <WorkHistoryIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                <Typography>Vị trí: {job.positionLevel}</Typography>
              </Box>
              <Box display="flex">
                <EventAvailableIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
                <Typography>Hạn nộp: {job.applicationDeadline}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function UrgentHiringJob() {
  const [currentPage, setCurrentPage] = useState(1);

  const { jobs } = useQueryJob();
  const jobsPerPage = 10;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentPageJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
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
          {currentPageJobs.map((job, index) => (
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
