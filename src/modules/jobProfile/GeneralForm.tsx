import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, Divider } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import TextField from 'src/components/TextField';
import Autocomplete from 'src/components/Autocomplete';
import { useForm } from 'react-hook-form';
import {
  convertObjectListToString,
  convertObjectListToStringForSkill,
  convertToObjectsForSkill,
  findObjectKey
} from 'src/utils/formatData';
import NumericFormatCustom from 'src/components/NumberFormatCustom';
import EditButton from 'src/components/EditButton';
import ButtonGroup from 'src/components/ButtonGroup';
import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';
import GeneralViewUI from './GeneralViewUI';
import TagInput from 'src/components/TagInput';
import skills from 'src/constants/skills';
import { SKILLS } from 'src/constants';
interface Option {
  value: any;
  label: any;
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
  data,
  options,
  onSubmit
}) => {
  const defaultValues: FormProps = {
    jobTitle: '',
    profession: '',
    currentPosition: '',
    desiredPosition: '',
    desiredSalary: null,
    degree: '',
    experience: '',
    workAddress: '',
    employmentType: '',
    careerGoal: '',
    skills: ''
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    defaultValues: defaultValues
  });

  const ref = React.useRef(null);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [employeeSkills, setSetEmployeeSkills] = useState(null);

  const handleSaveProfile = (data: FormProps) => {
    const newData = processDataPayload(data);
    onSubmit(newData);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(data);
    setIsReadOnly(true);
  };

  const onEdit = () => setIsReadOnly(false);

  const processDataPayload = (data: FormProps) => {
    return {
      ...data,
      profession: convertObjectListToString(data?.profession as Option[]),
      workAddress: convertObjectListToString(data?.workAddress as Option[]),
      skills: Array.isArray(data.skills)
        ? data.skills.map((item) => item.value || item).join(', ')
        : data.skills
    };
  };

  useEffect(() => {
    reset(data);
    data?.skills &&
      setSetEmployeeSkills(convertToObjectsForSkill(data?.skills));
  }, [data]);

  return (
    <Container id="general">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={21} lineHeight={3}>
            Thông tin chung
          </Typography>
        </Box>
        {isReadOnly && <EditButton onClick={onEdit} />}
      </Box>
      <Divider />
      {isReadOnly ? (
        <GeneralViewUI
          user={{
            ...data,
            degree: Degree[data.degree] ? Degree[data.degree] : data.degree
          }}
        />
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
                InputProps={{
                  inputComponent: NumericFormatCustom as any,
                  endAdornment: (
                    <InputAdornment position="end">triệu VNĐ</InputAdornment>
                  )
                }}
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
                element={
                  <Autocomplete
                    freeSolo={true}
                    limitTags={7}
                    options={SKILLS.map((item) => item.value)}
                  />
                }
                defaultValue={data?.skills?.split(',')}
                control={control}
                errors={errors}
                id="skills"
                label="Kĩ năng bắt buộc"
                name="skills"
                required
              />
              <Typography
                fontSize={12}
                color="secondary"
                fontStyle={'italic'}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                Hãy liệt kê tối đa 10 từ khóa. Ví dụ: Python, ReactJS, HTML,
                Go... Sẽ giúp hệ thống tìm kiếm được doanh nghiệp phù hợp với hồ
                sơ bạn nhất
              </Typography>
            </Grid>
          </Grid>
          {!isReadOnly && (
            <ButtonGroup
              handleSubmit={handleSubmit(handleSaveProfile)}
              handleCancel={handleCancel}
            />
          )}
        </Grid>
      )}
    </Container>
  );
};

export default GeneralForm;
