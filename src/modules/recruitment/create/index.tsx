import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import Footer from 'src/components/Footer';

function RecruitmentCreate() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          marginTop={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Tạo tin tuyển dụng" />
              <Divider />
              <CardContent>
                <Typography variant="subtitle1">Thông tin cơ bản</Typography>
                content
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default RecruitmentCreate;
