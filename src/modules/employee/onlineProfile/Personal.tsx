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
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import DatePicker from 'src/components/DatePicker';
import TextField from 'src/components/TextField';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { User } from '../../users/model';
import { useApp } from 'src/modules/app/hooks';
import useMutateUserData from '../../users/hooks/useMutateUserHook';
import { GENDER, ISMARRIED, ISMARRIED_OPTION } from 'src/constants/option';
import useProfileHook from '../../users/hooks/useUserHook';
import {
  UploadAvatarByUser,
  GetAvatarByUser,
  RemoveAvatarByUser
} from 'src/common/upload-image';

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

  useEffect(() => {
    reset(defaultUserValues);
    handleGetAvatar();
  }, [user]);

  const handleEdit = () => setIsReadOnly(false);

  const handleSaveProfile = async (data) => {
    setLoading(true);
    if (uploadFile) await UploadAvatarByUser(uploadFile, user);
    let avatarUrl = '';
    if (!avatar) await RemoveAvatarByUser(user);
    else avatarUrl = await GetAvatarByUser(user);

    const avatarString = avatarUrl !== '' ? avatarUrl : '';
    const isMarried = data.isMarried === 'Đã kết hôn' ? '1' : '0';
    const formattedDob = dayjs(data.dob, 'DD-MM-YYYY').format('DD-MM-YYYY');
    const newData = {
      ...data,
      dob: formattedDob,
      avatar: avatarString,
      isMarried: isMarried
    };

    onSaveData(newData);
    setLoading(false);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(defaultUserValues);
    setAvatar(storageAvatar);
    setIsReadOnly(true);
  };

  const handleGetAvatar = async () => {
    const avatarUrl = await GetAvatarByUser(user);
    setStorageAvatar(avatarUrl);
    setAvatar(avatarUrl);
  };

  const handleUploadAvatar = (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setAvatar(imageUrl);
      setUploadFile(image);
    }
  };

  const handleDeleteAvatar = () => setAvatar(null);

  debugger;
  const defaultUserValues = {
    ...user,
    dob: dayjs(user.dob, 'DD-MM-YYYY').isValid()
      ? dayjs(user.dob, 'DD-MM-YYYY').toISOString()
      : null,
    sex: GENDER.find((item) => item.label === user.sex)?.value,
    isMarried: user.isMarried === true ? 'Đã kết hôn' : 'Độc thân'
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: defaultUserValues
  });

  return (
    <Container id="personal">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={20} lineHeight={3}>
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
      <Grid container sx={{ mt: 1 }} py={2}>
        <Grid item xs={3} pr={2}>
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
                width: '75%',
                height: 160,
                bgcolor: '#a0b9cfc2'
              }}
            />
            {!avatar && !isReadOnly && (
              <label htmlFor="userAvatar">
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
                    name="userAvatar"
                    id="userAvatar"
                    label="Ảnh đại diện"
                    onChange={handleUploadAvatar}
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
                    name="userAvatar"
                    id="userAvatar"
                    label="Ảnh đại diện"
                    onChange={handleUploadAvatar}
                  />
                  Upload
                </Button>
                <Button
                  component="label"
                  onClick={handleDeleteAvatar}
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
        <Grid item xs={9}>
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
            <Grid item xs={12} sm={6}>
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
                options={ISMARRIED_OPTION}
                control={control}
                errors={errors}
                fullWidth
                id="isMarried"
                label="Tình trạng hôn nhân"
                name="isMarried"
                disabled={isReadOnly}
              />
            </Grid>
            <Grid item xs={12}>
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
