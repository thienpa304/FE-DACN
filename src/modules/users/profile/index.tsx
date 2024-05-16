import { useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Tabs, Tab, Grid, Typography } from '@mui/material';
import Footer from 'src/components/Footer';
import { styled } from '@mui/material/styles';
import InfoAccountTab from './InfoAccountTab';
import InfoCompanyTab from './InfoCompanyTab';
import { useApp } from 'src/modules/app/hooks';
import TabsWrapper from 'src/components/TabWrapper';

export default function ManagementUserSettings() {
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
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
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
              scrollButtons={false}
              textColor="primary"
              indicatorColor="primary"
              sx={{ borderBottom: 2, borderColor: 'grey.300', mb: -2 }}
            >
              {tabs
                .filter((tab) => tab.show)
                .map((tab) => {
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
