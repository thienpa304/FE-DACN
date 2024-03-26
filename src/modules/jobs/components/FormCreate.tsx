import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Typography
} from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import SuspenseLoader from 'src/components/SuspenseLoader';
import {
  PROFESSION,
  WORKING_FORM,
  DEGREE,
  EXPERIENCE,
  POSITION_LEVEL,
  GENDER_OPTION
} from 'src/constants/option';
import { jobAnalysist } from 'src/modules/ai/roles';
import ChatGPT from 'src/modules/ai/ChatGPT';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import TextEditor from 'src/components/TextEditor';
import TextField from 'src/components/TextField';
import NumericFormatCustom from 'src/components/NumberFormatCustom';
import Footer from 'src/components/Footer';
import useMutateJob from '../hooks/useMutateJob';
import useQueryJobById from '../hooks/useQueryJobById';
import useMutateJobById from '../hooks/useMutateJobById';
import DatePicker from 'src/components/DatePicker';

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
  const { data, isLoading } = useQueryJobById(selectedId);
  const [message, setMessage] = useState({});
  const [analysisResults, setAnalysisResults] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const methods = useForm({ defaultValues });
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit
  } = methods;

  const handleSave = (newData) => {
    if (selectedId) onSaveDataById([selectedId, newData]);
    else onSaveData(newData);
  };

  const handleAnalysis = (newData) => {
    setMessage([
      {
        profession: newData.profession,
        positionLevel: newData.positionLevel,
        degree: newData.degree,
        experience: newData.experience,
        jobDescription: newData.jobDescription,
        jobRequirements: newData.jobRequirements,
        benefits: newData.benefits
      }
    ]);
    setIsAnalyzing(true);
    setSendRequest(true);
  };

  useEffect(() => {
    reset(data);
  }, [data]);

  useEffect(() => {
    if (analysisResults.length > 0) {
      const result = analysisResults[0];

      const startIndex = result.indexOf('[');
      if (startIndex === -1) {
        console.log("Không tìm thấy ký tự '['");
        return;
      }

      // Tìm vị trí kết thúc của ']'
      const endIndex = result.lastIndexOf(']');
      if (endIndex === -1) {
        console.log("Không tìm thấy ký tự ']'");
        return;
      }

      // Trích xuất chuỗi con từ vị trí startIndex đến endIndex
      const extractedString = result.substring(startIndex, endIndex + 1);

      // B1: Thay thế dấu "'" thành dấu '"' để đảm bảo JSON hợp lệ
      const jsonString = extractedString.replace(/'/g, '"');

      // B2: Parse string sang array
      const jsonArray = JSON.parse(jsonString);

      setKeywords(() => jsonArray);
    }
    setSendRequest(false);
    setIsAnalyzing(false);
  }, [analysisResults]);

  if (isLoading) return <SuspenseLoader />;

  return (
    <Box id={'form-create'}>
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
                      sx={{ minWidth: 100 }}
                    >
                      {selectedId ? 'Lưu' : 'Tạo'}
                    </Button>
                    <Button
                      onClick={handleSubmit(handleAnalysis)}
                      color="primary"
                      variant="contained"
                      sx={{ ml: 2, minWidth: 100 }}
                      disabled={isAnalyzing}
                    >
                      Phân tích
                    </Button>
                  </Grid>
                </CardActions>
                {isAnalyzing && <CircularProgress sx={{ mx: '50%' }} />}
                {analysisResults && (
                  <Container sx={{ mb: 2 }}>
                    <Divider />
                    <Typography mt={2}>
                      <b>Từ khóa:</b> <em>{keywords?.join(', ')}</em>
                    </Typography>
                  </Container>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </FormProvider>
      {sendRequest && (
        <ChatGPT
          request={jobAnalysist}
          content={message}
          setAnswer={setAnalysisResults}
          sendRequest={sendRequest}
        />
      )}
      <Footer />
    </Box>
  );
};

export default FormCreate;
