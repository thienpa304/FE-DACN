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
  const pageSize = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('');
  const { data } = useQueryCandidateApplications({
    page: currentPage,
    num: pageSize,
    status: currentTab
  });
  const { totalResults, isLoading: isLoadingTotalResults } =
    useQueryTotalResultOfApplicationByEmployer({ status: currentTab });

  const handleTabsChange = (e, value) => {
    setCurrentTab(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalResults / pageSize) || 1;

  // useEffect(() => {
  //   setDataToShow(data);
  // }, [data]);

  if (isLoadingTotalResults) return <SuspenseLoader />;
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
                value={currentTab}
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  mb: -4,
                  display: 'inline-flex',
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
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={setCurrentPage}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateProfiles;
