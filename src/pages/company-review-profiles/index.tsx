import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Tab
} from '@mui/material';
import useQueryCandidateApplications from 'src/modules/application/hooks/useQueryCandidateApplications';
import Table from './Table';
import { useMemo, useState } from 'react';
import TabsWrapper from 'src/components/TabWrapper';
import {
  ProfileApplicationType,
  getKeywords,
  preprocessJobData
} from 'src/utils/reviewProfile';
import { Job } from 'src/modules/jobs/model';
import { useQueryJobByIdListByOwner } from 'src/modules/jobs/hooks/useQueryJobByIdByOwner';

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
        id,
        createAt
      } = item;
      const { postId, jobTitle } = job;
      const keywords = getKeywords(item);

      const applicationInfo = {
        id: application_id,
        createAt: createAt,
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
  const [sortModel, setSortModel] = useState({
    orderBy: '',
    sort: ''
  });
  const {
    data,
    isLoading: isLoadingData,
    totalPages
  } = useQueryCandidateApplications({
    page: currentPage,
    num: pageSize,
    status: currentTab,
    orderBy: sortModel.orderBy,
    sort: sortModel.sort
  });
  const jobsIdList: number[] = useMemo(
    () => [...new Set<number>(data?.map((item) => item?.postId))],
    [data]
  );

  const { jobs, isLoading: isLoadingJobs } =
    useQueryJobByIdListByOwner(jobsIdList);

  const handleTabsChange = (e, value) => {
    setCurrentPage(1);
    setCurrentTab(value);
  };

  // First time render the page
  const initialJobProfileData = useMemo(() => {
    return matchJobAndProfile(jobs, data);
  }, [data, jobs]);

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
                loading={isLoadingData || isLoadingJobs}
                setSortModel={setSortModel}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateProfiles;
