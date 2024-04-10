import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Tab
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useQueryJobByOwner from 'src/modules/jobs/hooks/useQueryJobByOwner';
import TablePost from 'src/pages/recruitment-list/TablePost';
import TabsWrapper from 'src/components/TabWrapper';
import Pagination from 'src/components/Pagination';

const tabs = [
  { label: 'Tất cả', value: '' },
  { label: 'Đã duyệt', value: 'Đã duyệt' },
  { label: 'Chờ duyệt', value: 'Chờ duyệt' },
  { label: 'Từ chối', value: 'Từ chối' },
  { label: 'Hết hạn', value: 'Hết hạn' }
];

const RecruitmentList = () => {
  const pageSize = 8;
  const [currentTab, setCurrentTab] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { jobs, totalResults } = useQueryJobByOwner({
    status: currentTab,
    page: currentPage,
    num: pageSize
  });
  const totalPages = Math.ceil(totalResults / pageSize) || 1;

  const handleTabsChange = (e, value) => {
    setCurrentTab(value);
    setCurrentPage(1);
  };
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
            <CardHeader
              title="Danh Sách Tin Tuyển Dụng"
              action={
                <Link to={'/employer/recruitment/create'}>
                  <Button variant="contained">Tạo tin tuyển dụng</Button>
                </Link>
              }
            />
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
                  borderBottom: 1,
                  borderColor: 'divider',
                  display: 'inline-flex'
                }}
              >
                {tabs.map((tab) => {
                  return (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                  );
                })}
              </TabsWrapper>
              <TablePost data={jobs || []} pageSize={pageSize} />
              <Pagination
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

export default RecruitmentList;
