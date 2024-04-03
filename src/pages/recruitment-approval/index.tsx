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
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import Table from './Table';
import SelectInput from 'src/components/SelectInput';
import { APPROVAL_STATUS } from 'src/constants';
import { useState } from 'react';
import ProfessionList from 'src/modules/admin/components/ProfessionList';

const RecruitmentApproval = () => {
  const [status, setStatus] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [isProfessionView, setIsProfessionView] = useState(false);
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
                justifyContent: 'space-between'
              }}
            >
              <CardHeader title="Danh sách tin tuyển dụng" />
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                {!isProfessionView && (
                  <Box sx={{ margin: 'auto 25px auto auto', width: '120px' }}>
                    <SelectInput
                      label="Trạng thái"
                      value={status}
                      options={APPROVAL_STATUS}
                      onChange={(e) => handleChangeStatusFilter(e)}
                    />
                  </Box>
                )}
                <Button
                  variant="contained"
                  color={!isProfessionView ? 'primary' : 'info'}
                  onClick={handleToggleViewMode}
                  sx={{ margin: 'auto 25px auto auto', height: 35, width: 150 }}
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
