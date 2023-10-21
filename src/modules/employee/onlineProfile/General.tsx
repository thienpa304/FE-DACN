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
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import TextField from 'src/components/TextField';
import Autocomplete from 'src/components/Autocomplete';
import { useForm } from 'react-hook-form';
import { OnlineProfile, User } from '../../users/model';
import { useApp } from 'src/modules/app/hooks';
import useMutateUserData from '../hooks/useMutateEmployee';
import useUpdateOnlineProfile from '../hooks/useMutateOnlineProfile';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';

export default function General() {
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [professionOptions, setProfessionOptions] = useState([]);
  const [workAddressOptions, setWorkAddressOptions] = useState([]);
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const { onSaveData } = useMutateUserData();
  const { onUpdateData } = useUpdateOnlineProfile();

  const handleEdit = () => setIsReadOnly(false);

  const defaultUserValues = {
    ...onlineProfile
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<OnlineProfile>({
    defaultValues: defaultUserValues
  });

  useEffect(() => {
    setSelectedId(onlineProfile?.userId || null);

    const professionList = onlineProfile?.profession
      ?.split(', ')
      .map((label) => PROFESSION.find((option) => option.label === label));
    const workAddressList = onlineProfile?.workAddress
      ?.split(', ')
      .map((label) => WORK_AT.find((option) => option.label === label));
    setProfessionOptions(professionList || []);
    setWorkAddressOptions(workAddressList || []);

    reset(defaultUserValues);
  }, [onlineProfile]);

  const handleSaveProfile = async (data) => {
    setLoading(true);
    debugger;
    let professionString: string;
    if (typeof data.profession === 'string') {
      professionString = data.profession;
    } else if (Array.isArray(data.profession)) {
      professionString = data.profession
        .map((option) => option.label)
        .join(', ');
    }
    let workAddressString: string;
    if (typeof data.workAddress === 'string') {
      workAddressString = data.workAddress;
    } else if (Array.isArray(data.workAddress)) {
      workAddressString = data.workAddress
        .map((option) => option.label)
        .join(', ');
    }
    const newData = {
      ...data,
      profession: professionString,
      workAddress: workAddressString
    };
    debugger;
    if (selectedId) onUpdateData(newData);
    else onSaveData(newData);
    setLoading(false);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(defaultUserValues);
    setIsReadOnly(true);
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Container id="general">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex">
              <Typography fontWeight={700} fontSize={20} lineHeight={3}>
                Thông tin chung
              </Typography>
            </Box>
            {isReadOnly && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleEdit}
                startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
                sx={{ borderRadius: 5 }}
              >
                <Typography textTransform="none">Chỉnh sửa</Typography>
              </Button>
            )}
          </Box>
          <Divider />
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
                  options={PROFESSION}
                  control={control}
                  errors={errors}
                  fullWidth
                  id="profession"
                  label="Nghề nghiệp"
                  name="profession"
                  defaultValue={professionOptions}
                  required
                  disabled={isReadOnly}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  element={<SelectInput />}
                  options={POSITION_LEVEL}
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
                  options={POSITION_LEVEL}
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
                  options={DEGREE}
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
                  options={EXPERIENCE}
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
                  options={WORK_AT}
                  control={control}
                  errors={errors}
                  defaultValue={workAddressOptions}
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
                  options={WORKING_FORM}
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
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <>
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
                  </>
                )}
              </Box>
            )}
          </Grid>
        </Container>
      )}
    </>
  );
}
