import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import UrgentJobTab from './UrgentJobTab';
import ProfessionType from './ProfessionType';
import Casousel from './Casousel';
import SearchBar from 'src/components/SearchBar/SearchBar';
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
      <Casousel />
      <Container>
        <SearchBar to="profession" />
        <ProfessionType />
        <UrgentJobTab />
      </Container>
    </OverviewWrapper>
  );
};

export default Home;
