import { useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Tabs, Tab, Grid, Typography } from '@mui/material';
import Footer from 'src/components/Footer';
import { styled } from '@mui/material/styles';
import InfoAccountTab from './InfoAccountTab';
import InfoCompanyTab from './InfoCompanyTab';
import { useApp } from 'src/modules/app/hooks';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUserSettings() {
  const { isEmployer } = useApp();
  const [currentTab, setCurrentTab] = useState<string>('info_account');
  const tabs = [
    { value: 'info_account', label: 'Thông tin cá nhân', show: true },
    { value: 'info_company', label: 'Thông tin công ty', show: isEmployer }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>User Settings - Applications</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => {
                if (!tab.show) return <></>;
                return (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                );
              })}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'info_account' && <InfoAccountTab />}
            {currentTab === 'info_company' && <InfoCompanyTab />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserSettings;
