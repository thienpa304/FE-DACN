import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid
} from '@mui/material';
import useQueryJobAppliedByEmployee from 'src/modules/application/hooks/useQueryJobAppliedByEmployee';
import TablePost from './TablePost';

const JobApplied = () => {
  const { data } = useQueryJobAppliedByEmployee();
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
            <CardHeader title="Danh Sách Việc Đã Ứng Tuyển" />
            <Divider />
            <CardContent>
              <TablePost data={data || []} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobApplied;
