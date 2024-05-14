import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid
} from '@mui/material';
import useQueryJobByAdmin from 'src/modules/jobs/hooks/useQueryJobByAdmin';
import Table from './Table';
import SelectInput from 'src/components/SelectInput';
import { APPROVAL_STATUS } from 'src/constants';
import { useState } from 'react';
import ProfessionList from 'src/modules/admin/components/ProfessionList';
import useQueryTotalJobsEachProfession from 'src/modules/jobs/hooks/useQueryTotalJobsEachProfession';
import SuspenseLoader from 'src/components/SuspenseLoader';

const ApprovalStatusOption = [
  {
    value: '',
    label: 'Tất cả',
    color: 'info',
    optionColor: '#000'
  },
  ...APPROVAL_STATUS
];

const RecruitmentApproval = () => {
  const [status, setStatus] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [isProfessionView, setIsProfessionView] = useState(false);

  const { dataList, isLoading } = useQueryTotalJobsEachProfession();

  const handleChangeStatusFilter = (e) => {
    setStatus(e.target.value);
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
                {!isProfessionView && (
                  <Box sx={{ margin: 'auto', width: '120px' }}>
                    <SelectInput
                      label="Trạng thái"
                      value={status}
                      options={ApprovalStatusOption}
                      onChange={(e) => handleChangeStatusFilter(e)}
                      sx={{
                        color: ApprovalStatusOption.find(
                          (item) => item.value === status
                        ).optionColor
                      }}
                    />
                  </Box>
                )}
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
                <Table
                  statusFilter={status}
                  selectedProfession={selectedProfession}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecruitmentApproval;
