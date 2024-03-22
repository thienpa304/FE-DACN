import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Divider,
  Checkbox,
  InputLabel,
  Alert,
  AlertTitle
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import { useForm } from 'react-hook-form';
import { WorkExperience } from '../../../model';
import useMutateExperience from './hooks/useMutateExperience';
import useMutateUpdateExperience from './hooks/useMutateUpdateExperience';
import DatePicker from 'src/components/DatePicker';
import dayjs from 'dayjs';
import {
  toInputDateString,
  toOutputDateString
} from 'src/utils/inputOutputFormat';
import useOnlineProfile from '../../hooks/useOnlineProfile';
import ButtonGroup from 'src/components/ButtonGroup';
import useWorkExperience from '../../hooks/useWorkExperience';
import { v4 } from 'uuid';

export default function EditExperience(props) {
  const { onSaveData } = useMutateExperience();
  const { onSaveDataById } = useMutateUpdateExperience();
  const { onClose, workId } = props;
  const { profile, setProfile } = useOnlineProfile();
  const { work_experiences, setWorkExperience } = useWorkExperience();
  const [error, setError] = useState({ state: false, message: '' });

  const defaultUserValues = {
    jobTitle: '',
    companyName: '',
    startDate: null,
    endDate: null,
    isDoing: false,
    jobDescription: ''
  };

  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<WorkExperience>({
    defaultValues: defaultUserValues
  });

  const isDoing = watch('isDoing', false);
  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const validateDates = () => {
    if (startDate && endDate) {
      if (dayjs(startDate).isAfter(endDate)) {
        setError({
          state: true,
          message: 'Ngày kết thúc phải sau ngày bắt đầu'
        });
      } else {
        setError({ state: false, message: '' });
      }
    }
    if (isDoing) setError({ state: false, message: '' });
  };

  useEffect(() => {
    validateDates();
  }, [startDate, endDate, isDoing]);

  const processInputData = (data) => {
    if (!data.isDoing)
      return {
        ...data,
        startDate: toInputDateString(data.startDate),
        endDate: toInputDateString(data.endDate)
      };
    return {
      ...data,
      startDate: toInputDateString(data.startDate),
      endDate: null
    };
  };

  const processOutputData = (data) => {
    if (!data.isDoing)
      return {
        ...data,
        startDate: toOutputDateString(data.startDate),
        endDate: toOutputDateString(data.endDate)
      };
    return {
      ...data,
      startDate: toOutputDateString(data.startDate),
      endDate: null
    };
  };

  const handleSaveExperienceData = async (data) => {
    if (error.state) return;
    const formattedOutputData = processOutputData(data);
    // if (!profile.userId) {
    //   if (data.id) {
    //     const index = work_experiences.findIndex((item) => item.id === data.id);
    //     if (index !== -1) {
    //       const expList = [...work_experiences];
    //       expList[index] = { ...formattedOutputData, id: data.id };
    //       setWorkExperience(expList);
    //     }
    //   } else {
    //     const expList = [
    //       ...work_experiences,
    //       { id: v4(), ...formattedOutputData }
    //     ];
    //     setWorkExperience(expList);
    //     setProfile({ work_experiences: expList });
    //   }
    // } else {
    // }
    if (data.id) onSaveDataById([data.id, formattedOutputData]);
    else onSaveData(formattedOutputData);
    onClose();
  };

  useEffect(() => {
    const foundExperience =
      profile?.work_experiences?.find(
        (experience) => experience.id === workId
      ) || work_experiences?.find((experience) => experience.id === workId);
    if (foundExperience) {
      const formattedInputData = processInputData(foundExperience);
      reset(formattedInputData);
    }
  }, [workId, profile]);

  return (
    <>
      <Divider />
      <Box py={3}>
        <Grid container mb={4} spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="jobTitle"
              label="Chức danh"
              name="jobTitle"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="companyName"
              label="Công ty"
              name="companyName"
              required
            />
          </Grid>
          <Grid item container xs={12} columnSpacing={3}>
            <Grid item xs={12} display="flex" height={30}>
              <FormControl
                element={<Checkbox checked={isDoing} />}
                control={control}
                errors={errors}
                fullWidth
                id="isDoing"
                label="Tôi đang làm ở đây"
                name="isDoing"
                sx={{ width: 10, height: 10, mr: 1 }}
              />
              <InputLabel htmlFor="isDoing">Tôi đang làm ở đây</InputLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<DatePicker />}
                control={control}
                errors={errors}
                fullWidth
                id="startDate"
                label="Thời gian bắt đầu"
                name="startDate"
                maxDate={dayjs()}
              />
            </Grid>
            {!isDoing && (
              <Grid item xs={12} sm={6}>
                <FormControl
                  element={<DatePicker />}
                  control={control}
                  errors={errors}
                  fullWidth
                  id="endDate"
                  label="Thời gian kết thúc"
                  name="endDate"
                  maxDate={dayjs()}
                />
              </Grid>
            )}
            {isDoing && (
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignContent="center"
                alignItems="center"
              >
                <TrendingFlatIcon />
                <Typography fontSize={20}>Hiện tại</Typography>
              </Grid>
            )}
          </Grid>
          {error.state && (
            <Grid item xs={12}>
              <Alert severity="error">
                <AlertTitle>{error.message}</AlertTitle>
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="jobDescription"
              label="Mô tả công việc"
              name="jobDescription"
              minRows={3}
              required
              multiline
            />
          </Grid>
        </Grid>
        <ButtonGroup
          handleSubmit={handleSubmit(handleSaveExperienceData)}
          handleCancel={onClose}
        />
      </Box>
    </>
  );
}
