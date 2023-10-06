import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import DatePicker from 'src/components/DatePicker';
import Footer from 'src/components/Footer';
import FormControl from 'src/components/FormControl';
import TextEditor from 'src/components/TextEditor';
import TextField from 'src/components/TextField';

function RecruitmentCreate() {
  const methods = useForm({
    defaultValues: {
      description: ''
    }
  });
  const {
    control,
    formState: { errors }
  } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <Container maxWidth="lg">
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
                <CardHeader title="Tạo Tin Tuyển Dụng" />
                <Divider />
                <CardContent>
                  <Typography variant="h6" marginBottom={2}>
                    Thông tin cơ bản
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        required
                        id="name"
                        label="Chức danh"
                        placeholder="Vị trí hiển thị đăng tuyển"
                        name="name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Nghề nghiệp"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Hình thức làm việc"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Bằng cấp"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Kinh nghiệm"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Cấp bậc"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Độ tuổi tối thiểu"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Độ tuổi tối đa"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Yêu cầu giới tính"
                        name="dob"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Số lượng tuyển"
                        name="dob"
                      />{' '}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Thời giai thử việc"
                        name="dob"
                      />{' '}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<DatePicker />}
                        control={control}
                        errors={errors}
                        id="dob"
                        label="Hạn nộp hồ sơ"
                        name="dob"
                      />
                    </Grid>
                  </Grid>

                  <Typography variant="h6" marginBottom={2} marginTop={2}>
                    Mô tả công việc
                  </Typography>
                  <FormControl
                    element={<TextEditor />}
                    control={control}
                    errors={errors}
                    id="description"
                    name="description"
                  />
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    justifyContent={'end'}
                    marginBottom={1}
                    marginRight={1}
                  >
                    <Button color="success" variant="contained" size="small">
                      Tạo
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </FormProvider>

      <Footer />
    </>
  );
}

export default RecruitmentCreate;
