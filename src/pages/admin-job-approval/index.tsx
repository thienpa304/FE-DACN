import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Tab
} from '@mui/material';
import Table from './Table';
import SelectInput from 'src/components/SelectInput';
import { APPROVAL_STATUS } from 'src/constants';
import { useState } from 'react';
import ProfessionList from 'src/modules/admin/components/ProfessionList';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useQueryTotalJobsEachProfessionByAdmin from 'src/modules/jobs/hooks/useQueryTotalJobsEachProfessionByAdmin';
import TabsWrapper from 'src/components/TabWrapper';

const ApprovalStatusOption = [
  {
    value: '',
    label: 'Tất cả',
    color: 'info',
    optionColor: '#000'
  },
  ...APPROVAL_STATUS
];

const JobApproval = () => {
  const [status, setStatus] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [isProfessionView, setIsProfessionView] = useState(false);

  const { dataList, isLoading } = useQueryTotalJobsEachProfessionByAdmin();

  const handleChangeStatusFilter = (e, value) => {
    setStatus(value);
  };

  const handleSelectProfession = (name: string) => {
    setSelectedProfession(name);
    setIsProfessionView(false);
  };

  const handleToggleViewMode = () => {
    setIsProfessionView((prev) => !prev);
    setSelectedProfession(null);
  };

  if (isLoading) return <SuspenseLoader />;
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: { sm: 'space-between', xs: 'center' },
                flexWrap: 'wrap'
              }}
            >
              <CardHeader title="Danh sách tin tuyển dụng" />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'end' },
                  px: 2,
                  gap: 1
                }}
              >
                <Button
                  variant="contained"
                  color={!isProfessionView ? 'primary' : 'info'}
                  onClick={handleToggleViewMode}
                  sx={{ margin: 'auto', height: 35, width: 150 }}
                >
                  {!isProfessionView ? 'Xem theo ngành' : 'Tất cả'}
                </Button>
              </Box>
            </Box>

            <Divider />
            <CardContent>
              {isProfessionView && !selectedProfession && (
                <ProfessionList
                  handleSelectProfession={handleSelectProfession}
                  handleViewProfessionMode={setIsProfessionView}
                  total={dataList}
                />
              )}
              {!isProfessionView && (
                <>
                  <TabsWrapper
                    onChange={handleChangeStatusFilter}
                    value={status}
                    variant="scrollable"
                    scrollButtons={false}
                    sx={{
                      display: { md: 'inline-block' },
                      borderBottom: 1,
                      borderColor: 'divider'
                    }}
                  >
                    {ApprovalStatusOption.map((tab) => {
                      return (
                        <Tab
                          key={tab.value}
                          label={tab.label}
                          value={tab.value}
                        />
                      );
                    })}
                  </TabsWrapper>
                  <Table
                    statusFilter={status}
                    selectedProfession={selectedProfession}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobApproval;
