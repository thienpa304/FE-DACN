import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import HiringJobTab from './HiringJobTab';
import ProfessionType from './ProfessionType';
import Casousel from './Casousel';
import SearchBar from 'src/components/SearchBar/SearchBar';
import CompanyList from 'src/modules/company/components/CompanyList';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import useQueryCompanyListByUser from 'src/modules/company/hook/useQueryCompanyListByUser';
import Company from './Company';
import { isTablet } from 'src/constants/reponsive';

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
    <OverviewWrapper pb={2}>
      <Casousel />
      <Container>
        <SearchBar to="profession" />
        <ProfessionType />
        <HiringJobTab />
        <Company
          pageTitle="Công ty đang tuyển dụng"
          queryCompanys={useQueryCompanyListByUser}
          defaultPageSize={isTablet ? 3 : 4}
        />
      </Container>
    </OverviewWrapper>
  );
};

export default Home;
