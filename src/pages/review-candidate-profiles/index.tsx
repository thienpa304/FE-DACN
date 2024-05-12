import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  styled
} from '@mui/material';
import useQueryCandidateApplications from 'src/modules/application/hooks/useQueryCandidateApplications';
import Table from './Table';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useEffect, useState } from 'react';
import useQueryTotalResultOfApplicationByEmployer from 'src/modules/application/hooks/useQueryTotalResultOfApplicationByEmployer';
import TabsWrapper from 'src/components/TabWrapper';
import Pagination from 'src/components/Pagination';

const tabs = [
  { label: 'Tất cả', value: '' },
  { label: 'Đã duyệt', value: 'Đã duyệt' },
  { label: 'Chờ duyệt', value: 'Chờ duyệt' },
  { label: 'Từ chối', value: 'Từ chối' },
  { label: 'Hết hạn', value: 'Hết hạn' }
];

const CandidateProfiles = () => {
  const pageSize = 9;
  const [currentQuery, setCurrentQuery] = useState({
    currentPage: 1,
    currentTab: ''
  });
  const { data, isLoading: isLoadingData } = useQueryCandidateApplications({
    page: currentQuery.currentPage,
    num: pageSize,
    status: currentQuery.currentTab
  });
  const { totalResults, isLoading: isLoadingTotalResults } =
    useQueryTotalResultOfApplicationByEmployer({
      status: currentQuery.currentTab
    });

  const handleTabsChange = (e, value) => {
    setCurrentQuery(() => ({
      currentPage: 1,
      currentTab: value
    }));
  };

  const handlePageChange = (page) => {
    setCurrentQuery((prev) => ({
      ...prev,
      currentPage: page
    }));
  };

  const totalPages = Math.ceil(totalResults / pageSize) || 1;
  console.log('rerender 1');

  if (isLoadingData || isLoadingTotalResults) return;
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        marginTop={0}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Danh Sách ứng viên" />
            <Divider />
            <CardContent>
              <TabsWrapper
                onChange={handleTabsChange}
                value={currentQuery.currentTab}
                variant="scrollable"
                scrollButtons={false}
                sx={{
                  display: { md: 'inline-block' },
                  borderBottom: 1,
                  borderColor: 'divider'
                }}
              >
                {tabs.map((tab) => {
                  return (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                  );
                })}
              </TabsWrapper>
              <Table
                data={data}
                pageSize={pageSize}
                currentPage={currentQuery.currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateProfiles;
