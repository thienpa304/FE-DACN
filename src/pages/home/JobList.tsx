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
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';

function JobList() {
  const { jobs } = useQueryAllJob();
  const initialJobsToShow = 12;
  const jobsToShow = jobs.slice(0, initialJobsToShow);
  const { totalResults } = useQueryTotalResults();
  console.log(totalResults);

  return (
    <Card sx={{ border: 1, borderColor: '#98E4FF', borderRadius: 1 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          <ScheduleIcon color="secondary" sx={{ fontSize: 35 }} />
          <Typography fontWeight={700} fontSize={20} alignSelf="end">
            Việc làm tuyển gấp
          </Typography>
        </Box>
        <Link
          href="/urgent-hiring-job"
          underline="none"
          color="secondary"
          fontSize={16}
          fontWeight={700}
          sx={{
            '&:hover': {
              color: '#FF7D55'
            }
          }}
        >
          Xem thêm
        </Link>
      </Box>
      <Box p={3}>
        <Grid container mb={3} spacing={2}>
          {jobsToShow.map((job, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CardItemJob key={index} job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}

export default JobList;
