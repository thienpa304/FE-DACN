import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import TablePost from 'src/pages/recruitment-list/TablePost';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';

const RecruitmentList = () => {
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
              <TablePost data={jobs || []} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecruitmentList;
