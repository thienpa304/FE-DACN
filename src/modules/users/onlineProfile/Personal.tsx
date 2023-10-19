import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  styled,
  Divider,
  Avatar
} from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import useMutateUserData from '../hooks/useMutateUserHook';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import DatePicker from 'src/components/DatePicker';
import TextField from 'src/components/TextField';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { User } from '../model';
import { useApp } from 'src/modules/app/hooks';
import { DEGREE, GENDER, ISMARRIED } from 'src/constants/option';
import { UploadAvatar, GetAvatar, RemoveAvatar } from 'src/common/upload-image';

const Input = styled('input')({
  display: 'none'
});

export default function Personal() {
  const { user } = useApp();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [storageAvatar, setStorageAvatar] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { onSaveData } = useMutateUserData('Profile');

  const handleEdit = () => setIsReadOnly(false);

  const handleImageGet = async () => {
    const urlAvatar = await GetAvatar(user);
    setStorageAvatar(urlAvatar);
    setAvatar(urlAvatar);
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setAvatar(imageUrl);
      setUploadFile(image);
    }
  };

  const handleImageDelete = () => setAvatar(null);

  const DEGREE_OPTION = DEGREE.map((item) => ({
    value: item.label,
    label: item.label
  }));

  const defaultUserValues = {
    ...user,
    dob: dayjs(user.dob, 'DD-MM-YYYY').isValid()
      ? dayjs(user.dob, 'DD-MM-YYYY').toISOString()
      : null,
    sex: GENDER.find((item) => item.label === user.sex)?.value
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: defaultUserValues
  });

  useEffect(() => {
    reset(defaultUserValues);
    handleImageGet();
  }, [user]);

  const handleSaveProfile = async (data) => {
    setLoading(true);
    if (uploadFile) await UploadAvatar(uploadFile, user);
    let avatarUrl = null;
    if (!avatar) await RemoveAvatar(user);
    else avatarUrl = await GetAvatar(user);
    const formattedDob = dayjs(data.dob, 'DD-MM-YYYY').format('DD-MM-YYYY');
    const newData = { ...data, dob: formattedDob, avatar: avatarUrl };
    onSaveData(newData);
    setLoading(false);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(defaultUserValues);
    setAvatar(storageAvatar);
    setIsReadOnly(true);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={22} lineHeight={3}>
            Thông tin cá nhân
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
      <Grid container sx={{ mt: 1 }} py={2} >
        <Grid item xs={2} pr={2}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap={2}
          >
            <Avatar
              alt={user.name}
              src={avatar}
              sx={{
                borderRadius: 2,
                width: '85%',
                height: 150,
                bgcolor: '#a0b9cfc2'
              }}
            />
            {!avatar && !isReadOnly && (
              <label htmlFor="avatar">
                <Button
                  component="label"
                  size="small"
                  startIcon={<AddPhotoAlternateOutlinedIcon />}
                  variant="text"
                  color="secondary"
                >
                  <FormControl
                    element={<Input type="file" accept="image/*" />}
                    control={control}
                    name="avatar"
                    id="avatar"
                    onChange={handleImageUpload}
                  />
                  Upload
                </Button>
              </label>
            )}

            {avatar && !isReadOnly && (
              <Box display="flex" flexDirection="row" alignItems="center">
                <Button
                  component="label"
                  size="small"
                  startIcon={<AddPhotoAlternateOutlinedIcon />}
                  variant="text"
                  color="secondary"
                >
                  <FormControl
                    element={<Input type="file" accept="image/*" />}
                    control={control}
                    name="avatar"
                    id="avatar"
                    onChange={handleImageUpload}
                  />
                  Upload
                </Button>
                <Button
                  component="label"
                  onClick={handleImageDelete}
                  size="small"
                  startIcon={<DoNotDisturbOnOutlinedIcon />}
                  variant="text"
                  color="secondary"
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Grid container mb={4} spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="name"
                label="Họ và tên"
                name="name"
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
                id="email"
                label="Email"
                name="email"
                pattern="email"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="phone"
                label="Số điện thoại"
                name="phone"
                pattern="phone"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                fullWidth
                id="address"
                label="Địa chỉ"
                name="address"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<DatePicker maxDate={dayjs()} />}
                control={control}
                errors={errors}
                fullWidth
                id="dob"
                label="Ngày sinh"
                name="dob"
                required
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={GENDER}
                control={control}
                errors={errors}
                fullWidth
                id="sex"
                label="Giới tính"
                name="sex"
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                element={<SelectInput />}
                options={DEGREE_OPTION}
                control={control}
                errors={errors}
                fullWidth
                id="isMarried"
                label="Tình trạng hôn nhân"
                name="isMarried"
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
      </Grid>
    </Container>
  );
}
