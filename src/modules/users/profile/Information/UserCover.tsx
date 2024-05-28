import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Container,
  Grid
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import IconButton from '@mui/material/IconButton';
import { useApp } from 'src/modules/app/hooks';
import { uploadFile, removeFileByUrl } from 'src/common/firebaseService';
import { useForm } from 'react-hook-form';
import { User } from '../../model';
import FormControl from 'src/components/FormControl';
import { avatarFormat } from 'src/constants/uploadFileRule';
import useMutateAvatar from '../../hooks/useMutateAvatar';
import { avatarErrorText } from 'src/components/UploadError';
import { styled } from '@mui/material/styles';
import { isMobile } from 'src/constants/reponsive';
import { LoadingButton } from '@mui/lab';

const Input = styled('input')({
  display: 'none'
});

export default function UserCover() {
  const { user } = useApp();
  const { onSaveData, isLoading } = useMutateAvatar();
  const { acceptTypes, acceptSize } = avatarFormat;
  const [save, setSave] = useState(true);
  const [userAvatar, setUserAvatar] = useState({
    avatar: '',
    error: false,
    imageFile: null
  });
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    handleGetAvatar();
  }, [user]);

  const handleGetAvatar = () => {
    setUserAvatar({ ...userAvatar, avatar: user?.avatar?.replace(' ', '') });
    setSave(true);
  };

  const handleUploadAvatar = (e) => {
    const image = e.target.files[0];
    if (!image) return;
    if (!acceptTypes.includes(image.type) || image.size > acceptSize) {
      setUserAvatar({ ...userAvatar, error: true });
      return;
    }
    const imageUrl = URL.createObjectURL(image);
    setUserAvatar({ avatar: imageUrl, error: false, imageFile: image });
    setSave(false);
  };

  const handleSaveAvatar = async (data) => {
    setIsUploading(true);
    const url = await uploadFile(userAvatar.imageFile).catch(() => '');
    setUserAvatar({ ...userAvatar, avatar: url, error: false });
    const newData = { ...data, avatar: url };
    onSaveData(newData);
    setSave(true);
    setIsUploading(false);
  };

  const handleDeleteAvatar = async (data) => {
    setIsUploading(true);
    await removeFileByUrl(userAvatar.avatar);
    setUserAvatar({ ...userAvatar, avatar: null, error: false });
    const newData = { ...data, avatar: ' ' };
    onSaveData(newData);
    setIsUploading(false);
  };

  const { control, handleSubmit } = useForm<User>({
    defaultValues: {
      ...user
    }
  });

  return (
    <Container>
      <Box
        display="flex"
        sx={{ pb: 1, borderBottom: 1, borderColor: 'grey.300' }}
      >
        <MilitaryTechIcon
          color="primary"
          sx={{ fontSize: { md: 40, xs: 30 } }}
        />
        <Typography
          fontWeight={700}
          lineHeight={2}
          sx={{ fontSize: { md: 22, xs: 18 } }}
        >
          Hồ sơ của tôi
        </Typography>
      </Box>
      <Grid container columnSpacing={{ sm: 1 }} mt={2} rowGap={1}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'start' },
            flexWrap: 'wrap'
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            justifyItems="center"
            rowGap={0.5}
          >
            <IconButton component="label" sx={{ borderRadius: 10 }}>
              <Avatar
                alt={user.name}
                src={userAvatar.avatar}
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: '#a0b9cfc2'
                }}
              />
              <FormControl
                element={<Input type="file" accept="image/*" />}
                control={control}
                name="userAvatar"
                id="userAvatar"
                onChange={handleUploadAvatar}
              />
            </IconButton>

            {!userAvatar.avatar && (
              <label htmlFor="userAvatar">
                <LoadingButton
                  component="label"
                  size="small"
                  startIcon={<AddPhotoAlternateOutlinedIcon />}
                  variant="outlined"
                  color="secondary"
                  loading={isLoading || isUploading}
                >
                  <FormControl
                    element={<Input type="file" accept="image/*" />}
                    control={control}
                    name="userAvatar"
                    id="userAvatar"
                    onChange={handleUploadAvatar}
                  />
                  Tải lên
                </LoadingButton>
              </label>
            )}

            {userAvatar.avatar && (
              <>
                {!save && (
                  <LoadingButton
                    component="label"
                    onClick={handleSubmit(handleSaveAvatar)}
                    size="small"
                    startIcon={<TaskAltIcon />}
                    variant="outlined"
                    color="secondary"
                    loading={isLoading || isUploading}
                  >
                    Lưu
                  </LoadingButton>
                )}

                {save && (
                  <LoadingButton
                    component="label"
                    onClick={handleSubmit(handleDeleteAvatar)}
                    size="small"
                    startIcon={<DoNotDisturbOnOutlinedIcon />}
                    variant="outlined"
                    color="secondary"
                    loading={isLoading || isUploading}
                  >
                    Xóa
                  </LoadingButton>
                )}
              </>
            )}
          </Box>

          {userAvatar.error && avatarErrorText}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{
            display: { xs: 'flex', sm: 'inline' },
            justifyContent: { xs: 'center', sm: 'start' }
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isMobile ? 'center' : 'flex-start'}
            sx={{
              lineHeight: 200
            }}
          >
            <Typography fontSize={18} fontWeight={700} lineHeight={3}>
              {user.name}
            </Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Email: {user.email}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
