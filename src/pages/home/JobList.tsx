import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { useState } from 'react';

import ScheduleIcon from '@mui/icons-material/Schedule';
import CardItemJob from 'src/modules/jobs/components/CardItem';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';

function JobList() {
  const { jobs } = useQueryJob();
  const [isFavorite, setIsFavorite] = useState(false);
  const initialJobsToShow = 12;
  const jobsToShow = jobs.slice(0, initialJobsToShow);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="space-between" gap={1}>
            <ScheduleIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h3">Việc làm tuyển gấp</Typography>
          </Box>
          <Link
            href="/urgent-hiring-job"
            underline="hover"
            color="secondary"
            fontWeight={700}
          >
            Xem thêm
          </Link>
        </Box>
        <Box sx={{ pt: 2, mb: 4 }}>
          <Grid container mb={4} spacing={2}>
            {jobsToShow.map((job, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <CardItemJob key={index} job={job} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default JobList;
