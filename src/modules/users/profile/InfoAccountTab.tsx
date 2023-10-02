import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  styled
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../model';
import FormControl from 'src/components/FormControl';
import DatePicker from 'src/components/DatePicker';
import TextField from 'src/components/TextField';
import SelectInput from 'src/components/SelectInput';
import { GENDER } from 'src/constants/enum';
import useMutateProfile from '../hooks/useMutateProfileHook';
import { useApp } from 'src/modules/app/hooks';
import dayjs from 'dayjs';
import AvatarUpload from './AvatarUpload';

const InfoAccountTab = () => {
  const { onSaveProfile } = useMutateProfile();
  const { user } = useApp();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      ...user,
      dob: dayjs(user.dob).isValid()
        ? dayjs(user.dob, 'DD-MM-YYYY').toISOString()
        : null,
      sex: GENDER.find((item) => item.label === user.sex).value
    }
  });
  const handleSaveProfile = (data) => {
    onSaveProfile(data);
  };
  return (
    <Card>
      <CardHeader title="Thông tin tài khoản" />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, marginTop: 1 }}
        >
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  required
                  id="name"
                  label="Họ và tên"
                  name="name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  element={<DatePicker />}
                  control={control}
                  errors={errors}
                  required
                  id="dob"
                  label="Ngày sinh"
                  name="dob"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  required
                  id="address"
                  label="Địa chỉ"
                  name="address"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  required
                  id="phone"
                  label="Số điện thoại"
                  name="phone"
                  pattern="phone"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  element={<SelectInput />}
                  options={GENDER}
                  control={control}
                  errors={errors}
                  required
                  id="sex"
                  label="Giới tính"
                  name="sex"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <AvatarUpload />
          </Grid>
        </Grid>

        <Grid container justifyContent={'end'} marginTop={2}>
          <Button
            color="success"
            onClick={handleSubmit(handleSaveProfile)}
            size="small"
            variant="contained"
          >
            Lưu
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoAccountTab;
