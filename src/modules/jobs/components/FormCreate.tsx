import React, { useEffect, useState } from 'react';
import {
  Backdrop,
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
  GENDER_OPTION,
  SKILLS,
  WORK_AT
} from 'src/constants/option';
import { jobAnalysist, translate } from 'src/GPT/roles';
import FormControl from 'src/components/FormControl';
import SelectInput, { Option } from 'src/components/SelectInput';
import TextEditor from 'src/components/TextEditor';
import TextField from 'src/components/TextField';
import NumericFormatCustom from 'src/components/NumberFormatCustom';
import Footer from 'src/components/Footer';
import useMutateJob from '../hooks/useMutateJob';
import useQueryJobById from '../hooks/useQueryJobById';
import useMutateJobById from '../hooks/useMutateJobById';
import DatePicker from 'src/components/DatePicker';
import _ from 'lodash';
import { preProcessText, removeHTMLTag } from 'src/utils/inputOutputFormat';
import { loadKeywords } from 'src/utils/keywords';
import useProfileHook from 'src/modules/users/hooks/useUserHook';
import sendChatGPTRequest from 'src/GPT/sendChatGPTRequest';
import Autocomplete from 'src/components/Autocomplete';

const defaultValues = {
  sex: '',
  positionLevel: '',
  degree: '',
  employmentType: '',
  experience: '',
  jobDescription: '',
  jobRequirements: '',
  benefits: '',
  profession: '',
  email: '',
  name: '',
  address: '',
  phone: '',
  contactAddress: '',
  requiredSkills: ''
};
type Props = {
  title?: string;
  selectedId?: string;
};

const FormCreate: React.FC<Props> = ({ title, selectedId }) => {
  const { onSaveData } = useMutateJob();
  const { onSaveDataById } = useMutateJobById();
  const { data, isLoading, isFetching } = useQueryJobById(selectedId);
  const [analysisResults, setAnalysisResults] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [documentText, setDocumentText] = useState('');
  const [onSaveNewData, setOnSaveNewData] = useState(null);
  const [requiredSkills, setRequiredSkills] = useState(null);
  const [isEmpty, setIsEmpty] = useState([]);
  const { profile } = useProfileHook();

  const ref = React.useRef(null);

  const methods = useForm({ defaultValues });
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit
  } = methods;

  const handleSave = (newData) => {
    const fieldsToCheck = {
      jobDescription: 'jobDescription',
      jobRequirements: 'jobRequirements',
      benefits: 'benefits'
    };

    const emptyList = [];
    for (const [field, fieldName] of Object.entries(fieldsToCheck)) {
      if (!removeHTMLTag(newData?.[field])) {
        setIsEmpty((prev) => [...prev, fieldName]);
        emptyList.push(fieldName);
      }
    }

    if (emptyList.length) {
      // Báo lỗi nếu có bất kỳ trường nào bị thiếu
      return;
    }

    setOnSaveNewData({
      ...newData,
      requiredSkills: Array.isArray(newData.requiredSkills)
        ? newData.requiredSkills.map((item) => item.value || item).join(', ')
        : newData.requiredSkills,
      sex: newData.sex === 'Tất cả' ? null : newData.sex,
      profession: Array.isArray(newData.profession)
        ? newData.profession.map((item) => item.value || item).join(', ')
        : newData.profession
    });
    handleAnalysis(newData);
  };

  const handleAnalysis = async (newData) => {
    const jobDescription = preProcessText(
      JSON.stringify(newData.jobDescription)
    );
    const jobRequirements = preProcessText(
      JSON.stringify(newData.jobRequirements)
    );
    const processedText = {
      jobDescription: jobDescription,
      jobRequirements: jobRequirements
    };
    setDocumentText(JSON.stringify(processedText));
    setIsAnalyzing(true);
    const result = await sendChatGPTRequest(
      jobAnalysist,
      [processedText],
      null,
      {
        '58': 5,
        '60': 5
      }
    );
    const translatedKeywords = await sendChatGPTRequest(translate, result);
    setAnalysisResults(translatedKeywords);
  };

  useEffect(() => {
    if (data) {
      reset(data);
    } else if (!selectedId) {
      reset({
        name: profile?.name,
        email: profile?.email,
        phone: profile?.phone
        // contactAddress: profile?.address
      });
    }
  }, [JSON.stringify(data), JSON.stringify(profile)]);

  useEffect(() => {
    if (analysisResults.length > 0 && analysisResults[0]) {
      const keywords = loadKeywords(analysisResults) || '';

      const keywordToStore = onSaveNewData.requiredSkills + ', ' + keywords;

      if (selectedId)
        onSaveDataById([
          selectedId,
          { ...onSaveNewData, keywords: keywordToStore }
        ]);
      else onSaveData({ ...onSaveNewData, keywords: keywordToStore });
    }
    setIsAnalyzing(false);
  }, [analysisResults]);

  if (isFetching) return <SuspenseLoader />;

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
                        multiline
                        minRows={1}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        element={
                          <Autocomplete
                            limitTags={7}
                            options={PROFESSION.map((item) => item.value)}
                          />
                        }
                        defaultValue={data?.profession?.split(',')}
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
                    <Grid item xs={12} md={2}>
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
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
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
                        required
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
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="numberOfVacancies"
                        label="Số lượng tuyển"
                        name="numberOfVacancies"
                        required
                        type="number"
                        pattern="integer"
                        InputProps={{ inputProps: { min: 1 } }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="trialPeriod"
                        label="Thời giai thử việc"
                        name="trialPeriod"
                        required
                        type="number"
                        pattern="integer"
                        InputProps={{
                          inputProps: { min: 1 },
                          endAdornment: (
                            <InputAdornment position="end">
                              tháng
                            </InputAdornment>
                          )
                        }}
                      />
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
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="minSalary"
                        label="Mức lương tối thiểu"
                        name="minSalary"
                        type="number"
                        pattern="integer"
                        required
                        InputProps={{
                          inputProps: { min: 1 },
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
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="maxSalary"
                        label="Mức lương tối đa"
                        name="maxSalary"
                        type="number"
                        pattern="integer"
                        required
                        InputProps={{
                          inputProps: { min: 1 },
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
                        options={WORK_AT}
                        element={<SelectInput />}
                        control={control}
                        errors={errors}
                        id="workAddress"
                        label="Khu vực tuyển dụng"
                        name="workAddress"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        id="contactAddress"
                        label="Địa chỉ làm việc"
                        name="contactAddress"
                        required
                        multiline
                        minRows={2}
                      />
                    </Grid>
                    {/* <Grid item container xs={12}>
                      <Grid item xs={3}>
                        <FormControl
                          options={WORK_AT}
                          element={<SelectInput />}
                          control={control}
                          errors={errors}
                          id="province"
                          label="Tỉnh thành"
                          name="province"
                          required
                        />
                      </Grid>
                      <Grid item xs={9}>
                        <FormControl
                          element={<TextField />}
                          control={control}
                          errors={errors}
                          id="workAddress"
                          label="Địa chỉ làm việc"
                          name="workAddress"
                          required
                          multiline
                          minRows={1}
                        />
                      </Grid>
                    </Grid> */}

                    <Grid item xs={12}>
                      <Box display="flex" marginBottom={1}>
                        {isEmpty.find((item) => item === 'requiredSkills') && (
                          <Typography
                            color="error"
                            fontWeight={700}
                            fontStyle="italic"
                            textAlign="center"
                            flex={1}
                          >
                            * Vui lòng nhập yêu cầu kĩ năng
                          </Typography>
                        )}
                      </Box>
                      <FormControl
                        element={
                          <Autocomplete
                            freeSolo={true}
                            limitTags={7}
                            options={SKILLS.map((item) => item.value)}
                          />
                        }
                        defaultValue={data?.requiredSkills?.split(',')}
                        control={control}
                        errors={errors}
                        id="requiredSkills"
                        label="Kĩ năng bắt buộc"
                        name="requiredSkills"
                        required
                      />
                      <Typography
                        fontSize={12}
                        color="secondary"
                        fontStyle={'italic'}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        Hãy liệt kê tối đa 10 từ khóa. Ví dụ: Python, ReactJS,
                        HTML, Go... Sẽ giúp hệ thống tìm kiếm được hồ sơ phù hợp
                        với doanh nghiệp bạn nhất
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box display="flex" marginBottom={1} marginTop={4}>
                    <Typography variant="h6">Mô tả công việc</Typography>
                    {isEmpty.find((item) => item === 'jobDescription') && (
                      <Typography
                        color="error"
                        fontWeight={700}
                        fontStyle="italic"
                        textAlign="center"
                        flex={1}
                      >
                        * Vui lòng nhập mô tả công việc
                      </Typography>
                    )}
                  </Box>
                  <FormControl
                    element={<TextEditor />}
                    control={control}
                    errors={errors}
                    id="jobDescription"
                    name="jobDescription"
                    required
                  />

                  <Box display="flex" marginBottom={1} marginTop={4}>
                    <Typography variant="h6">Yêu cầu công việc</Typography>
                    {isEmpty.find((item) => item === 'jobRequirements') && (
                      <Typography
                        color="error"
                        fontWeight={700}
                        fontStyle="italic"
                        textAlign="center"
                        flex={1}
                      >
                        * Vui lòng nhập yêu cầu công việc
                      </Typography>
                    )}
                  </Box>
                  <FormControl
                    element={<TextEditor />}
                    control={control}
                    errors={errors}
                    id="jobRequirements"
                    name="jobRequirements"
                    required
                  />
                  <Box display="flex" marginBottom={1} marginTop={4}>
                    <Typography variant="h6">Quyền lợi</Typography>
                    {isEmpty.find((item) => item === 'benefits') && (
                      <Typography
                        color="error"
                        fontWeight={700}
                        fontStyle="italic"
                        textAlign="center"
                        flex={1}
                      >
                        * Vui lòng nhập quyền lợi công việc
                      </Typography>
                    )}
                  </Box>
                  <FormControl
                    element={<TextEditor />}
                    control={control}
                    errors={errors}
                    id="benefits"
                    name="benefits"
                    required
                  />
                  <Typography variant="h6" marginBottom={1} marginTop={4}>
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
                    {/* <Grid item xs={12} md={8}>
                      <FormControl
                        element={<TextField />}
                        control={control}
                        errors={errors}
                        required
                        id="contactAddress"
                        label="Địa chỉ liên hệ"
                        name="contactAddress"
                        multiline
                        minRows={1}
                      />
                    </Grid> */}
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    justifyContent="end"
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
                  </Grid>
                </CardActions>
                <Backdrop
                  sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                  }}
                  open={isAnalyzing}
                >
                  <CircularProgress />
                </Backdrop>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </FormProvider>
      <Footer />
    </Box>
  );
};

export default FormCreate;
