import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Button
} from '@mui/material';
import useQueryJob from '../../hooks/useQueryJob';
import RecruitmentTable from './Table';
import { Link } from 'react-router-dom';

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
              <RecruitmentTable data={jobs || []} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecruitmentList;
