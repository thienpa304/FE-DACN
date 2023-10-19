import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid
} from '@mui/material';
import { Link } from 'react-router-dom';
import useQueryJobOwner from 'src/modules/jobs/hooks/useQueryJobOwner';
import TablePost from 'src/pages/recruitment-list/TablePost';

const RecruitmentList = () => {
  const { jobs } = useQueryJobOwner();
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
