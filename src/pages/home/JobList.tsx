import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Card,
  Divider
} from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CardItemJob from 'src/modules/jobs/components/CardItem';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';

function JobList() {
  const { jobs } = useQueryJob();
  const initialJobsToShow = 12;
  const jobsToShow = jobs.slice(0, initialJobsToShow);
  const filteredJobs = jobsToShow.filter((job) => {
    const applicationDeadline = new Date(job.applicationDeadline);
    const today = new Date();
    const dayFromNow = new Date(today);
    dayFromNow.setDate(today.getDate() + 20);
    return applicationDeadline <= dayFromNow;
  });

  return (
    <Container sx={{ py: 3 }}>
      <Card sx={{ border: 1, borderColor: '#98E4FF', borderRadius: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ bgcolor: '#B6FFFA', borderTopRadius: 1, p: 2 }}
        >
          <Box display="flex" justifyContent="space-between">
            <ScheduleIcon color="secondary" sx={{ fontSize: 35 }} />
            <Typography fontWeight={700} fontSize={20}>
              Việc làm tuyển gấp
            </Typography>
          </Box>
          <Divider />
          <Link
            href="/urgent-hiring-job"
            underline="none"
            color="secondary"
            fontSize={16}
            sx={{
              '&:hover': {
                color: '#FF7D55'
              }
            }}
          >
            Xem thêm
          </Link>
        </Box>
        <Box p={2}>
          <Grid container mb={4} spacing={2}>
            {filteredJobs.map((job, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <CardItemJob key={index} job={job} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}

export default JobList;
