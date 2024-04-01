import { Box, Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import JobList from 'src/modules/jobs/components/JobList';
import SmallJobCard from 'src/modules/jobs/components/SmallJobCard';
import useQueryFollowJobs from 'src/modules/jobs/hooks/useQueryFollowJobs';

export default function JobFollow() {
  const { jobFollow } = useQueryFollowJobs();
  console.log(jobFollow);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const newList = jobFollow?.map((job) => {
      console.log(job);

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
    // console.log('newList', newList);
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
