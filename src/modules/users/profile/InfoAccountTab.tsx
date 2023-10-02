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
      dob: dayjs(user.dob, 'DD-MM-YYYY').toISOString(),
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
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root, .MuiFormControl-root': {
                  m: 1,
                  width: '40ch'
                }
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  required
                  id="name"
                  label="Họ và tên"
                  name="name"
                />
                <FormControl
                  element={<DatePicker />}
                  control={control}
                  errors={errors}
                  required
                  id="dob"
                  label="Ngày sinh"
                  name="dob"
                />
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  required
                  id="address"
                  label="Địa chỉ"
                  name="address"
                />
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
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <AvatarUpload />
          </Grid>
        </Grid>

        <Grid container justifyContent={'end'}>
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
