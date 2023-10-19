import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid
} from '@mui/material';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import Table from './Table';

const RecruitmentApproval = () => {
  const { jobs } = useQueryJob();
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
            <CardHeader title="Danh sách việc đăng tuyển" />
            <Divider />
            <CardContent>
              <Table data={jobs || []} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecruitmentApproval;
