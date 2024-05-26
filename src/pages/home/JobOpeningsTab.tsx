import { Box, Container, Grid, Typography, Card, Divider } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryTotalResultOfJobs from 'src/modules/jobs/hooks/useQueryTotalResultOfJobs';
import { useEffect, useState } from 'react';
import Pagination from 'src/components/Pagination';
import Link from 'src/components/Link';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { isMobile, isTablet } from 'src/constants/reponsive';
import { useTheme } from '@emotion/react';
import { checkIsMobile, checkIsTablet } from 'src/utils/responsive';

function JobOpeningsTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();
  const isTablet = checkIsTablet(theme);
  const pageSize = isTablet ? 8 : 9;
  const { jobs, isLoading, totalPages } = useQueryAllJob({
    page: currentPage,
    num: pageSize
  });

  if (isLoading) return <SuspenseLoader />;

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
      {jobs.length > 0 ? (
        <Grid container mb={3} spacing={1} p={3} display={'flex'}>
          {jobs.map((job, index) => (
            <Grid key={job.id} item xs={12} sm={6} md={4}>
              <SmallJobCard key={index} job={job} />
            </Grid>
          ))}
        </Grid>
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
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </Card>
  );
}

export default JobOpeningsTab;