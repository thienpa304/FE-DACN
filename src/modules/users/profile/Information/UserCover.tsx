import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Container,
  Grid,
  styled
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import IconButton from '@mui/material/IconButton';
import { useApp } from 'src/modules/app/hooks';
import { UploadAvatar, GetAvatar, RemoveAvatar } from 'src/common/upload-image';
import useMutateUserData from '../../hooks/useMutateUserHook';
import { useForm } from 'react-hook-form';
import { User } from '../../model';
import FormControl from 'src/components/FormControl';

const Input = styled('input')({
  display: 'none'
});

export default function Cover() {
  const { user } = useApp();
  const [currentUser, setCurrentUser] = useState(user);
  const [save, setSave] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      await getAvatar();
    };
    fetchData();
  }, [currentUser]);

  async function getAvatar() {
    let url = await GetAvatar(currentUser);
    setAvatar(url);
    setSave(true);
  }

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setAvatar(imageUrl);
      setFile(image);
      setSave(false);
    }
  };
  async function handleSaveAvatar(data) {
    setLoading(true);
    await UploadAvatar(file, currentUser);
    const url = await GetAvatar(currentUser);
    setAvatar(url);
    setSave(true);
    setLoading(false);
    // const newData = { ...data, avatar: url }
    // onSaveData(newData)
  }

  async function handleImageDelete() {
    setAvatar(null);
    await RemoveAvatar(currentUser);
  }

  const { control, handleSubmit } = useForm<User>({
    defaultValues: {
      ...currentUser
    }
  });

  return (
    <Container>
      <Box
        display="flex"
        sx={{ pb: 1, borderBottom: 1, borderColor: 'grey.300' }}
      >
        <MilitaryTechIcon color="primary" sx={{ fontSize: 40 }} />
        <Typography fontWeight={700} fontSize={22} lineHeight={2}>
          Hồ sơ của tôi
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid container columnSpacing={{ sm: 1 }}>
          <Grid item xs={6} md={3} display="flex" flexWrap="wrap">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              rowGap={0.5}
            >
              <label htmlFor="avatar">
                <IconButton component="label" sx={{ borderRadius: 10 }}>
                  <Avatar
                    alt={currentUser.name}
                    src={avatar}
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: '#a0b9cfc2'
                    }}
                  />
                  <FormControl
                    element={<Input type="file" accept="image/*" />}
                    control={control}
                    name="avatar"
                    id="avatar"
                    onChange={handleImageUpload}
                  />
                </IconButton>
              </label>

              {!avatar && (
                <label htmlFor="avatar">
                  <Button
                    component="label"
                    size="small"
                    startIcon={<AddPhotoAlternateOutlinedIcon />}
                    variant="outlined"
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

              {avatar && (
                <>
                  {!save && !loading && (
                    <Button
                      component="label"
                      onClick={handleSubmit(handleSaveAvatar)}
                      size="small"
                      startIcon={<TaskAltIcon />}
                      variant="outlined"
                      color="secondary"
                    >
                      Save
                    </Button>
                  )}

                  {loading ? (
                    <CircularProgress size={20} />
                  ) : (
                    save && (
                      <Button
                        component="label"
                        onClick={handleImageDelete}
                        size="small"
                        startIcon={<DoNotDisturbOnOutlinedIcon />}
                        variant="outlined"
                        color="secondary"
                      >
                        Delete
                      </Button>
                    )
                  )}
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={6} md={9}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              sx={{ lineHeight: 200 }}
            >
              <Typography fontSize={18} fontWeight={700} lineHeight={3}>
                {currentUser.name}
              </Typography>
              <Typography>Phone: {currentUser.phone}</Typography>
              <Typography>Email: {currentUser.email}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
