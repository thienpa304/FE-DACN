import { Box, Card, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomContainer from 'src/components/CustomContainer';
import Pagination from 'src/components/Pagination';
import CardItemJob from 'src/modules/jobs/components/CardItem';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryTotalResults from 'src/modules/jobs/hooks/useQueryTotalResults';

export default function JobRecommendTab(props) {
  const { totalResults } = useQueryTotalResults();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const validvalidTotalPages = Number.isInteger(totalResults)
    ? totalResults
    : 1;
  const totalPages = Math.ceil(validvalidTotalPages / jobsPerPage);
  const { jobs } = useQueryAllJob({ page: currentPage, num: jobsPerPage });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Card
      sx={{ mb: 5, borderRadius: 0, boxShadow: '2px 2px 6px #aae2f7' }}
      id={props.id}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          {/* <ScheduleIcon color="secondary" sx={{ fontSize: 35 }} /> */}
          <Typography fontWeight={700} fontSize={20} alignSelf="end">
            Việc làm phù hợp
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
            <Grid key={job.id} item xs={12} sm={6}>
              <CardItemJob key={index} job={job} />
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
