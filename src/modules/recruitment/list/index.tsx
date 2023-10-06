import {
  Card,
  CardContent,
  Container,
  Grid,
  CardHeader,
  Divider
} from '@mui/material';
import RecruitmentTable from './Table';

const RecruitmentList = () => {
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
            <CardHeader title="Danh Sách Tin Tuyển Dụng" />
            <Divider />
            <CardContent>
              <RecruitmentTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecruitmentList;
