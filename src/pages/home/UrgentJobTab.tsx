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
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';
import { useState } from 'react';
import Pagination from 'src/components/Pagination';

function UrgentJobTab() {
  const { totalResults } = useQueryTotalResults();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  const validvalidTotalPages = Number.isInteger(totalResults)
    ? totalResults
    : 1;
  const totalPages = Math.ceil(validvalidTotalPages / jobsPerPage);
  const { jobs } = useQueryAllJob({ page: currentPage, num: jobsPerPage });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          {jobs.map((job, index) => (
            <Grid key={job.id} item xs={12} sm={6} md={4}>
              <SmallJobCard key={index} job={job} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Box>
    </Card>
  );
}

export default UrgentJobTab;
