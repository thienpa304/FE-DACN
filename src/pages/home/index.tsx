import React from 'react';
import { styled } from '@mui/material/styles';
import JobList from './JobList';
import { Box } from '@mui/material';
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
const Home = () => {
  return (
    <OverviewWrapper>
      <JobList />
    </OverviewWrapper>
  );
};

export default Home;
