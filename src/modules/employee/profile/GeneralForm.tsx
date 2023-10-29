import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import TextField from 'src/components/TextField';
import Autocomplete from 'src/components/Autocomplete';
import { useForm } from 'react-hook-form';
import LinearProgress from '@mui/material/LinearProgress';
import { convertObjectListToString } from 'src/utils/inputOutputFormat';

interface Option {
  value: any;
  label: string;
}
interface FormProps {
  jobTitle: string;
  profession: string | Option[];
  currentPosition: string;
  desiredPosition: string;
  desiredSalary: number;
  degree: string;
  experience: string;
  workAddress: string | Option[];
  employmentType: string;
  careerGoal: string;
  skills: string;
}

interface GeneralFormProps {
  isLoading: boolean;
  data: FormProps;
  options: {
    profession: Option[];
    workAddress: Option[];
    positionLevel: Option[];
    degree: Option[];
    experience: Option[];
    workingForm: Option[];
  };
  onSubmit: (data: FormProps) => void;
}

const GeneralForm: React.FC<GeneralFormProps> = ({
  isLoading,
  data,
  options,
  onSubmit
}) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    defaultValues: data
  });

  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleSaveProfile = (data: FormProps) => {
    const newData = processDataAfter(data);
    onSubmit(newData);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(data);
    setIsReadOnly(true);
  };

  const onEdit = () => setIsReadOnly(false);

  const processDataAfter = (data: FormProps) => {
    return {
      ...data,
      profession: convertObjectListToString(data?.profession as Option[]),
      workAddress: convertObjectListToString(data?.workAddress as Option[])
    };
  };

  useEffect(() => {
    reset(data);
  }, [data]);

  console.log('isLoading', isLoading);

  return (
    <Container id="general">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={21} lineHeight={3}>
            Thông tin chung
          </Typography>
        </Box>
        {isReadOnly && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={onEdit}
            startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
            sx={{ borderRadius: 5 }}
          >
            <Typography textTransform="none">Chỉnh sửa</Typography>
          </Button>
        )}
      </Box>
      <Divider />
      {isLoading ? (
        <Box sx={{ width: '100%', minHeight: 300 }}>
          <LinearProgress color="primary" />
          <Typography sx={{ textAlign: 'center', mt: 4 }}>
            Loading...
          </Typography>
        </Box>
      ) : (
        <Grid sx={{ mt: 1 }} py={2}>
          <Grid container mb={4} spacing={3}>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="jobTitle"
                label="Vị trí mong muốn"
                name="jobTitle"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<Autocomplete />}
                control={control}
                errors={errors}
                fullWidth
                id="profession"
                label="Nghề nghiệp"
                name="profession"
                options={options.profession}
                required
                disabled={isReadOnly}
                defaultValue={data?.profession}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={options.positionLevel}
                control={control}
                errors={errors}
                fullWidth
                id="currentPosition"
                label="Cấp bậc hiện tại"
                name="currentPosition"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={options.positionLevel}
                control={control}
                errors={errors}
                fullWidth
                id="desiredPosition"
                label="Cấp bậc mong muốn"
                name="desiredPosition"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="desiredSalary"
                label="Mức lương mong muốn"
                name="desiredSalary"
                pattern="integer"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={options.degree}
                control={control}
                errors={errors}
                fullWidth
                id="degree"
                label="Trình độ học vấn"
                name="degree"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={options.experience}
                control={control}
                errors={errors}
                fullWidth
                id="experience"
                label="Số năm kinh nghiệm"
                name="experience"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<Autocomplete />}
                options={options.workAddress}
                control={control}
                errors={errors}
                defaultValue={data?.workAddress}
                fullWidth
                id="workAddress"
                label="Địa chỉ làm việc"
                name="workAddress"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={options.workingForm}
                control={control}
                errors={errors}
                fullWidth
                id="employmentType"
                label="Hình thức làm việc"
                name="employmentType"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="careerGoal"
                label="Mục tiêu nghề nghiệp"
                name="careerGoal"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="skills"
                label="Kĩ năng"
                name="skills"
                disabled={isReadOnly}
              />
            </Grid>
          </Grid>
          {!isReadOnly && (
            <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
              <Button
                color="success"
                onClick={handleSubmit(handleSaveProfile)}
                variant="contained"
                sx={{ width: 120 }}
              >
                Xác nhận
              </Button>
              <Button
                onClick={handleCancel}
                variant="outlined"
                sx={{ width: 120 }}
              >
                Hủy
              </Button>
            </Box>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default GeneralForm;
