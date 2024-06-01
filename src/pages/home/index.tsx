import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import JobOpeningsTab from './JobOpeningsTab';
import ProfessionType from './ProfessionType';
import Casousel from './Casousel';
import SearchBar from 'src/components/SearchBar/SearchBar';
import useQueryCompanyListByUser from 'src/modules/company/hook/useQueryCompanyListByUser';
import CompanyTab from './CompanyTab';

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
        <SearchBar to="profession" sx={{ mt: -0.7 }} />
        <ProfessionType />
        <JobOpeningsTab />
        <CompanyTab
          pageTitle="Công ty đang tuyển dụng"
          queryCompanys={useQueryCompanyListByUser}
        />
      </Container>
    </OverviewWrapper>
  );
};

export default Home;
