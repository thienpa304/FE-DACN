import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import DatePicker from 'src/components/DatePicker';
import Footer from 'src/components/Footer';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import TextEditor from 'src/components/TextEditor';
import TextField from 'src/components/TextField';
import {
  DEGREE,
  EXPERIENCE,
  GENDER_OPTION,
  POSITION_LEVEL,
  WORKING_FORM,
  PROFESSION
} from 'src/constants/option';
import useMutateJob from '../hooks/useMutateJob';
import useQueryJobById from '../hooks/useQueryJobById';
import useMutateJobById from '../hooks/useMutateJobById';
import dayjs from 'dayjs';
import {
  convertObjectListToString,
  findObjectKey,
  toOutputDateString,
  toOutputOptionLabel
} from 'src/utils/inputOutputFormat';
import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';
import NumericFormatCustom from 'src/components/NumberFormatCustom';

const defaultValues = {
  sex: '',
  positionLevel: '',
  degree: '',
  employmentType: '',
  experience: '',
  jobDescription: '',
  jobRequirements: '',
  benefits: '',
  profession: ''
};
type Props = {
  title?: string;
  selectedId?: string;
};
const FormCreate: React.FC<Props> = ({ title, selectedId }) => {
  const { onSaveData } = useMutateJob();
  const { onSaveDataById } = useMutateJobById();
  // fetch data by selectedId
  const { data: defaultData } = useQueryJobById(selectedId);

  const methods = useForm({
    defaultValues
  });
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit
  } = methods;

  // reset Data if selected is true
  useEffect(() => {
    reset({
      ...defaultData,
      profession: PROFESSION.find(
        (item) => item.label === defaultData?.profession
      )?.value.toString()
    });
  }, [defaultData]);

  const handleSave = (data) => {
    const profession = toOutputOptionLabel(data.profession, PROFESSION);
    const degree = findObjectKey(data.degree, Degree);
    const employmentType = findObjectKey(data.employmentType, EmploymentType);
    const experience = findObjectKey(data.experience, Experience);
    const positionLevel = findObjectKey(data.positionLevel, PositionLevel);

    const newData = {
      ...data,
      profession
      // degree,
      // employmentType,
      // experience,
      // positionLevel
    };

    if (selectedId) onSaveDataById([selectedId, newData]);
    else onSaveData(newData);
  };

  return (
    <>
      <FormProvider {...methods}>
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
                <CardHeader title={title || 'Tạo Tin Tuyển Dụng'} />
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
                        id="jobTitle"
                        label="Chức danh"
                        placeholder="Vị trí hiển thị đăng tuyển"
                        name="jobTitle"
                        inputProps={{ maxLength: 300 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        element={<SelectInput />}
                        options={PROFESSION}
                        control={control}
                        errors={errors}
                        id="profession"
                        label="Nghề nghiệp"
                        name="profession"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<SelectInput />}
                        options={WORKING_FORM}
                        control={control}
                        errors={errors}
                        id="employmentType"
                        label="Hình thức làm việc"
                        name="employmentType"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        options={DEGREE}
                        element={<SelectInput />}
                        control={control}
                        errors={errors}
                        id="degree"
                        label="Bằng cấp"
                        name="degree"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        options={EXPERIENCE}
                        element={<SelectInput />}
                        control={control}
                        errors={errors}
                        id="experience"
                        label="Kinh nghiệm"
                        name="experience"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        options={POSITION_LEVEL}
                        element={<SelectInput />}
                        control={control}
                        errors={errors}
                        id="positionLevel"
                        label="Cấp bậc"
                        name="positionLevel"
                        required
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <FormControl
                        element={
                          <TextField InputProps={{ inputProps: { min: 0 } }} />
                        }
                        control={control}
                        errors={errors}
                        id="minAge"
                        label="Độ tuổi tối thiểu"
                        name="minAge"
                        type="number"
                        pattern="integer"
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <FormControl
                        element={
                          <TextField InputProps={{ inputProps: { min: 0 } }} />
                        }
                        control={control}
                        errors={errors}
                        id="maxAge"
                        label="Độ tuổi tối đa"
                        type="number"
                        name="maxAge"
                        pattern="integer"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        options={GENDER_OPTION}
                        element={<SelectInput />}
                        control={control}
                        errors={errors}
                        id="sex"
                        label="Yêu cầu giới tính"
                        name="sex"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={
                          <TextField InputProps={{ inputProps: { min: 0 } }} />
                        }
                        control={control}
                        errors={errors}
                        id="numberOfVacancies"
                        label="Số lượng tuyển"
                        name="numberOfVacancies"
                        required
                        type="number"
                        pattern="integer"
                      />{' '}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={
                          <TextField InputProps={{ inputProps: { min: 0 } }} />
                        }
                        control={control}
                        errors={errors}
                        id="trialPeriod"
                        label="Thời giai thử việc"
                        name="trialPeriod"
                        pattern="integer"
                        type="number"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              tháng
                            </InputAdornment>
                          )
                        }}
                      />{' '}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<DatePicker minDate={dayjs()} />}
                        control={control}
                        errors={errors}
                        id="applicationDeadline"
                        label="Hạn nộp hồ sơ"
                        name="applicationDeadline"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={
                          <TextField InputProps={{ inputProps: { min: 0 } }} />
                        }
                        control={control}
                        errors={errors}
                        id="minSalary"
                        label="Mức lương tối thiểu"
                        name="minSalary"
                        pattern="integer"
                        required
                        InputProps={{
                          inputComponent: NumericFormatCustom as any,
                          endAdornment: (
                            <InputAdornment position="end">
                              triệu VNĐ
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={
                          <TextField InputProps={{ inputProps: { min: 0 } }} />
                        }
                        control={control}
                        errors={errors}
                        id="maxSalary"
                        label="Mức lương tối đa"
                        name="maxSalary"
                        pattern="integer"
                        required
                        InputProps={{
                          inputComponent: NumericFormatCustom as any,
                          endAdornment: (
                            <InputAdornment position="end">
                              triệu VNĐ
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="workAddress"
                        label="Địa chỉ làm việc"
                        name="workAddress"
                        required
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
                    id="jobDescription"
                    name="jobDescription"
                  />
                  <Typography variant="h6" marginBottom={2} marginTop={2}>
                    Yêu cầu công việc
                  </Typography>
                  <FormControl
                    element={<TextEditor />}
                    control={control}
                    errors={errors}
                    id="jobRequirements"
                    name="jobRequirements"
                  />
                  <Typography variant="h6" marginBottom={2} marginTop={2}>
                    Quyền lợi
                  </Typography>
                  <FormControl
                    element={<TextEditor />}
                    control={control}
                    errors={errors}
                    id="benefits"
                    name="benefits"
                  />
                  <Typography variant="h6" marginBottom={2} marginTop={2}>
                    Thông tin người liên hệ
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="name"
                        label="Họ và tên"
                        name="name"
                        required
                      />
                    </Grid>{' '}
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="email"
                        label="Email"
                        name="email"
                        required
                        pattern="email"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        required
                        id="phone"
                        label="Điện thoại"
                        name="phone"
                        pattern="phone"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        required
                        id="contactAddress"
                        label="Địa chỉ liên hệ"
                        name="contactAddress"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    justifyContent={'end'}
                    marginBottom={1}
                    marginRight={1}
                  >
                    <Button
                      onClick={handleSubmit(handleSave)}
                      color="success"
                      variant="contained"
                      size="small"
                    >
                      {selectedId ? 'Lưu' : 'Tạo'}
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
};

export default FormCreate;
