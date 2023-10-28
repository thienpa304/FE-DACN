import { useState, useEffect } from 'react';
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
import {
  GetFileByUserId,
  UploadFileByUserId,
  RemoveFileByUserId,
  DocumentType
} from 'src/common/firebaseService';
import { avatarFormat } from 'src/constants/uploadFileRule';

const Input = styled('input')({
  display: 'none'
});

export default function Personal() {
  const [avatarState, setAvatarState] = useState({
    avatar: null,
    avatarError: false,
    storageAvatar: null,
    uploadFile: null,
  });
  const { user } = useApp();
  const { onSaveData } = useMutateUserData();
  const { acceptTypes, acceptSize } = avatarFormat;
  const { avatarType } = DocumentType;
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    reset(defaultUserValues);
    handleGetAvatar();
  }, [user]);

  const handleEdit = () => setIsReadOnly(false);

  const handleSaveProfile = async (data) => {
    setLoading(true);
    if (avatarState.uploadFile)
      await UploadFileByUserId(user.userId, avatarState.uploadFile, avatarType);
    let avatarUrl = '';
    if (!avatarState.avatar) await RemoveFileByUserId(user.userId, avatarType);
    else
      avatarUrl = await GetFileByUserId(user.userId, avatarType).catch(
        () => ''
      );

    const avatarString = avatarUrl !== '' ? avatarUrl : null;
    const isMarried = data.isMarried === 'Đã kết hôn' ? '1' : '0';
    const formattedDob = dayjs(data.dob).format('DD-MM-YYYY')
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
    setAvatarState({ ...avatarState, avatar: avatarState.storageAvatar })
    setIsReadOnly(true);
  };

  const handleGetAvatar = async () => {
    const avatarUrl = await GetFileByUserId(user.userId, avatarType).catch(
      () => null
    );
    setAvatarState({ ...avatarState, avatar: avatarUrl, storageAvatar: avatarUrl })
  };

  const handleUploadAvatar = (e) => {
    setAvatarState({ ...avatarState, avatarError: false })
    const image = e.target.files[0];
    if (!image) return;
    if (!acceptTypes.includes(image.type) || image.size > acceptSize) {
      setAvatarState({ ...avatarState, avatarError: true })
      return;
    }
    const imageUrl = URL.createObjectURL(image);
    setAvatarState({ ...avatarState, avatar: imageUrl, uploadFile: image })
  };

  const handleDeleteAvatar = () => {
    setAvatarState({ ...avatarState, avatar: null, avatarError: false })
  };

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
          <Typography fontWeight={700} fontSize={21} lineHeight={3}>
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
              src={avatarState.avatar}
              sx={{
                borderRadius: 2,
                width: '75%',
                height: 180,
                bgcolor: '#a0b9cfc2'
              }}
            />
            {!avatarState.avatar && !isReadOnly && (
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

            {avatarState.avatar && !isReadOnly && (
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
            {avatarState.avatarError && (
              <Typography color="error" fontSize={12}>
                Định dạng file chỉ có thể là
                {
                  <strong>
                    {acceptTypes.join(', ').replace(/image\//g, '.')}
                  </strong>
                }
                , và dung lượng{' '}
                {
                  <strong>
                    {` <=`} {acceptSize / 1024 / 1024}MB
                  </strong>
                }
              </Typography>
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
