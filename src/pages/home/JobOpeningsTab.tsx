import { Box, Grid, Typography, Card } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import { useState } from 'react';
import Pagination from 'src/components/Pagination';
import Link from 'src/components/Link';
import { useResponsive } from 'src/utils/responsive';

function JobOpeningsTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const pageSize = isMobile ? 3 : isTablet ? 6 : isDesktop ? 9 : 9;
  const { jobs, totalPages } = useQueryAllJob({
    page: currentPage,
    num: pageSize
  });

  return (
    <Card
      sx={{
        borderColor: '#98E4FF',
        borderRadius: '5px',
        mt: 2,
        pb: 3
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          <ScheduleIcon color="secondary" sx={{ fontSize: 35 }} />
          <Typography fontWeight={700} fontSize={20} alignSelf="end">
            Việc làm đang tuyển
          </Typography>
        </Box>
        <Link
          to="/hiring-job"
          sx={{
            fontSize: 16,
            fontWeight: 700
          }}
        >
          Xem thêm
        </Link>
      </Box>
      <Grid container mb={3} spacing={1} p={3} display={'flex'} height={550}>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <Grid key={job.id} item xs={12} sm={6} md={4}>
              <SmallJobCard key={index} job={job} />
            </Grid>
          ))
        ) : (
          <Typography
            fontStyle={'italic'}
            textAlign={'center'}
            color={'gray'}
            width={'100%'}
            lineHeight={10}
          >
            Không có việc làm
          </Typography>
        )}
      </Grid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </Card>
  );
}

export default JobOpeningsTab;
