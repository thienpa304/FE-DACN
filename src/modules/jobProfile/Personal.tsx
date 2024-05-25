import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  styled,
  Divider,
  Avatar,
  useTheme
} from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import DatePicker from 'src/components/DatePicker';
import TextField from 'src/components/TextField';
import EditButton from 'src/components/EditButton';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { User } from '../users/model';
import { useApp } from 'src/modules/app/hooks';
import useMutateUserData from '../users/hooks/useMutateUserHook';
import { GENDER, ISMARRIED, ISMARRIED_OPTION } from 'src/constants/option';
import {
  GetFileByUserId,
  UploadFileByUserId,
  RemoveFileByUserId,
  DocumentType,
  getFileByUrl,
  uploadFile,
  removeFileByUrl
} from 'src/common/firebaseService';
import { avatarFormat } from 'src/constants/uploadFileRule';
import { toOutputDateString, toInputDateString } from 'src/utils/formatData';
import ButtonGroup from 'src/components/ButtonGroup';
import { avatarErrorText } from 'src/components/UploadError';
import useMutateAvatar from 'src/modules/users/hooks/useMutateAvatar';
import PersonalViewUI from './PersonalViewUI';
import { checkIsMobile, checkIsTablet } from 'src/utils/responsive';

const Input = styled('input')({
  display: 'none'
});

export default function Personal() {
  const [avatarState, setAvatarState] = useState({
    avatar: null,
    avatarError: false,
    storageAvatar: null,
    uploadFile: null
  });
  const { user, setUserApp } = useApp();
  const { onSaveData: onSavaAvatar } = useMutateAvatar();
  const { onSaveData } = useMutateUserData();
  const { acceptTypes, acceptSize } = avatarFormat;
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    reset(defaultUserValues);
    handleGetAvatar();
  }, [user]);

  const handleEdit = () => setIsReadOnly(false);

  const handleSaveProfile = async (data) => {
    setLoading(true);

    let avatarUrl = user.avatar;
    if (avatarState.uploadFile)
      avatarUrl = await uploadFile(avatarState.uploadFile).catch(() => '');
    if (!avatarState.avatar) {
      await removeFileByUrl(user.avatar);
      avatarUrl = '';
    }

    const newData = {
      ...data,
      dob: toOutputDateString(data.dob),
      isMarried: data.isMarried === 'Đã kết hôn' ? '1' : '0',
      avatar: avatarUrl
    };
    setUserApp({
      ...newData,
      isMarried: newData.isMarried === '1',
      sex: GENDER.find((item) => item.value === newData.sex)?.label,
      avatar: avatarUrl
    });
    onSaveData(newData);

    onSavaAvatar(newData);
    setLoading(false);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(defaultUserValues);
    setAvatarState({ ...avatarState, avatar: avatarState.storageAvatar });
    setIsReadOnly(true);
  };

  const handleGetAvatar = async () => {
    const avatarUrl = await getFileByUrl(user?.avatar).catch(() => '');
    setAvatarState({
      ...avatarState,
      avatar: avatarUrl,
      storageAvatar: avatarUrl
    });
  };

  const handleUploadAvatar = (e) => {
    const image = e.target.files[0];
    if (!image) return;
    if (!acceptTypes.includes(image.type) || image.size > acceptSize) {
      setAvatarState({ ...avatarState, avatarError: true });
      return;
    }
    const imageUrl = URL.createObjectURL(image);
    setAvatarState({
      ...avatarState,
      avatar: imageUrl,
      uploadFile: image,
      avatarError: false
    });
  };

  const handleDeleteAvatar = () => {
    setAvatarState({ ...avatarState, avatar: null, avatarError: false });
  };

  const defaultUserValues = {
    ...user,
    dob: toInputDateString(user.dob as string, 'DD-MM-YYYY'),
    sex: GENDER.find((item) => item.label === user.sex)?.value,
    isMarried: user.isMarried ? 'Đã kết hôn' : 'Độc thân'
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: defaultUserValues
  });

  const theme = useTheme();
  const isMobile = checkIsMobile(theme);
  const isTablet = checkIsTablet(theme);

  return (
    <Container id="personal">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Typography fontWeight={700} fontSize={21} lineHeight={3}>
            Thông tin cá nhân
          </Typography>
        </Box>
        {isReadOnly && <EditButton onClick={handleEdit} />}
      </Box>
      <Divider />
      <Grid container sx={{ mt: 1 }} py={2}>
        <Grid item xs={isTablet ? 12 : 3} pr={2}>
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
                maxWidth: '180px',
                height: 180,
                objectFit: 'cover'
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
                    // sx={{ fontSize: 15 }}
                  />
                  <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                    Tải lên
                  </Typography>
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
                  <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                    Thay đổi
                  </Typography>
                </Button>
                <Button
                  component="label"
                  onClick={handleDeleteAvatar}
                  size="small"
                  startIcon={<DoNotDisturbOnOutlinedIcon />}
                  variant="text"
                  color="secondary"
                >
                  <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                    Xóa
                  </Typography>
                </Button>
              </Box>
            )}
            {avatarState.avatarError && avatarErrorText}
          </Box>
        </Grid>
        <Grid item xs={isTablet ? 12 : 9}>
          {!isReadOnly ? (
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
          ) : (
            <PersonalViewUI user={user} />
          )}
          {!isReadOnly && (
            <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                <ButtonGroup
                  handleSubmit={handleSubmit(handleSaveProfile)}
                  handleCancel={handleCancel}
                />
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
