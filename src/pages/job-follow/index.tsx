import { Box, Grid, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryFollowJobs from 'src/modules/jobs/hooks/useQueryFollowJobs';

export default function JobFollow() {
  const { jobFollow } = useQueryFollowJobs();
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const newList = jobFollow?.map((job) => {
      return {
        maxSalary: job?.maxSalary,
        minSalary: job?.minSalary,
        postId: job?.postId,
        workAddress: job?.workAddress,
        jobTitle: job?.jobTitle,
        employer: {
          companyName: job?.companyName,
          logo: job?.logo
        }
      };
    });
    setJobList(() => newList);
  }, [jobFollow]);

  return (
    <Box p={3}>
      <Grid container mb={3} spacing={2}>
        {jobList?.map((job, index) => (
          <Grid key={job.postId} item xs={12} sm={4}>
            <SmallJobCard key={index} job={job} />
          </Grid>
        ))}
      </Grid>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </Box>
  );
}
