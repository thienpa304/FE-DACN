import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from 'src/components/Link';
import Pagination from 'src/components/Pagination';
import SuspenseLoader from 'src/components/SuspenseLoader';
import JobFilter from 'src/modules/jobs/components/JobFilter';
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryTotalResultOfJobs from 'src/modules/jobs/hooks/useQueryTotalResultOfJobs';
import { Job } from 'src/modules/jobs/model';
import { compareDegrees, compareExperience } from 'src/utils/compareEnum';

export default function JobRecommendTab(props) {
  const { id, profile } = props;
  const { keywords, profession, degree, experience, sex } = profile;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    profession: profession,
    employmentType: '',
    degree: '',
    experience: '',
    positionLevel: '',
    sex: sex
  });
  const pageSize = 4;

  const { jobs, isLoading, totalPages } = useQueryAllJob({
    keywords: keywords,
    profession: profession,
    page: currentPage,
    num: pageSize,
    ...filter
  });

  const handleFilter = (data: any) => {
    setFilter((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    const section = document.getElementById(id);
    // if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, [JSON.stringify(jobs)]);

  if (isLoading) return <SuspenseLoader />;
  return (
    <Card sx={{ borderRadius: 0, boxShadow: '2px 2px 6px #aae2f7' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          bgcolor: '#f0e9fe',
          borderTopRadius: 1,
          px: 3,
          py: 2
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={700} fontSize={20} alignSelf="end">
            Việc làm gợi ý
          </Typography>
        </Box>
      </Box>
      <JobFilter
        handleFilter={handleFilter}
        sx={{ bgcolor: '#fee9f7', borderRadius: 0, border: 0 }}
      />
      <Box p={3}>
        <Grid container mb={3} spacing={2}>
          {jobs.map((job, index) => (
            <Grid key={job?.postId} item xs={12} sm={6}>
              <SmallJobCard key={index} job={job} />
            </Grid>
          ))}
          {jobs.length === 0 && (
            <Grid item xs={12}>
              <Typography
                fontSize={16}
                color="#9999"
                fontStyle="italic"
                textAlign="center"
              >
                Không tìm được việc làm phù hợp
              </Typography>
            </Grid>
          )}
        </Grid>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
        />
      </Box>
    </Card>
  );
}
