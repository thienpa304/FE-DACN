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
import { useEffect, useMemo, useState } from 'react';
import useQueryTotalResultOfApplicationByEmployer from 'src/modules/application/hooks/useQueryTotalResultOfApplicationByEmployer';
import TabsWrapper from 'src/components/TabWrapper';
import Pagination from 'src/components/Pagination';
import useApplicationList from 'src/modules/application/hooks/useApplicationList';
import { deepEqual } from 'src/utils/formatData';
import {
  ProfileApplicationType,
  getKeywords,
  preprocessJobData
} from 'src/utils/reviewProfile';
import { Job } from 'src/modules/jobs/model';
import { useQueryJobByIdList } from 'src/modules/jobs/hooks/useQueryJobById';

const tabs = [
  { label: 'Tất cả', value: '' },
  { label: 'Đã duyệt', value: 'Đã duyệt' },
  { label: 'Chờ duyệt', value: 'Chờ duyệt' },
  { label: 'Từ chối', value: 'Từ chối' },
  { label: 'Hết hạn', value: 'Hết hạn' }
];

const matchJobAndProfile = (jobs: Job[], data): ProfileApplicationType[] =>
  data
    ?.map((item) => {
      const job = jobs?.find((job) => job?.postId === item?.postId);
      if (!job) return null;

      const {
        application_id,
        name,
        email,
        phone,
        applicationType,
        status,
        matchingScore,
        employee,
        CV,
        id
      } = item;
      const { postId, jobTitle } = job;
      const keywords = getKeywords(item);

      const applicationInfo = {
        id: application_id,
        employer_Requirement: preprocessJobData(job),
        employee_Profile: {
          online_profile: employee?.online_profile,
          attached_document: employee?.attached_document,
          personal_information: {
            ...employee?.user,
            name,
            email,
            phone
          },
          application: {
            id,
            application_id,
            postId,
            CV,
            applicationType,
            jobTitle,
            keywords,
            name,
            status,
            matchingScore
          }
        }
      };
      return applicationInfo;
    })
    .filter(Boolean);

const CandidateProfiles = () => {
  const pageSize = 9;
  const [currentTab, setCurrentTab] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data,
    isLoading: isLoadingData,
    totalPages
  } = useQueryCandidateApplications({
    page: currentPage,
    num: pageSize,
    status: currentTab
  });
  // const jobsIdList: number[] = useMemo(
  //   () => [...new Set<number>(data?.map((item) => item?.postId))],
  //   [data]
  // );
  const jobsIdList = [...new Set<number>(data?.map((item) => item?.postId))];
  console.log('jobsIdList', jobsIdList);
  const { jobs, isLoading: isLoadingJobs } = useQueryJobByIdList(jobsIdList);

  const handleTabsChange = (e, value) => {
    setCurrentPage(1);
    setCurrentTab(value);
  };

  // First time render the page
  const initialJobProfileData = useMemo(() => {
    console.log('...');

    return matchJobAndProfile(jobs, data);
  }, [data, jobs]);
  // console.log('jobs', jobs);
  // console.log('data', data);
  // console.log('initialJobProfileData', initialJobProfileData);

  if (isLoadingData) return <SuspenseLoader />;

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
                data={initialJobProfileData}
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
