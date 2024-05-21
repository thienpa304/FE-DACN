import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import useLogin from '../hooks/useLoginHook';
import { LoginRequest } from '../model';
import backgroundImage from '../image/background-image.png';
import { useEffect, useState } from 'react';
import useRequestCode from '../hooks/useRequestCode';
import useResetPassword from '../hooks/useResetPassword';

export default function ForgotPassword() {
  const {
    onRequestCode,
    isLoading: isGettingCode,
    isSuccess
  } = useRequestCode();
  const { onResetPassword, isLoading } = useResetPassword();
  const [isGotCode, setIsGotCode] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleRequestResetPassword = (data) => {
    onRequestCode(data);
  };

  const handleResetPassword = (data) => {
    onResetPassword(data);
  };

  useEffect(() => {
    if (isSuccess) setIsGotCode(true);
  }, [isSuccess]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          flex: 1,
          alignItems: 'center'
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            position: 'relative',
            zIndex: 10,
            ml: { xs: 'auto', sm: 15 }
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'white',
              p: 3,
              border: 1,
              borderColor: '#79b6cc',
              borderRadius: 2,
              boxShadow: '2px 2px 6px #98E4FF',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Quên mật khẩu
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {!isGotCode ? (
                <>
                  <FormControl
                    element={<TextField />}
                    control={control}
                    errors={errors}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    pattern="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <LoadingButton
                    onClick={handleSubmit(handleRequestResetPassword)}
                    loading={isGettingCode}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Nhận mã xác nhận
                  </LoadingButton>
                </>
              ) : (
                <>
                  <FormControl
                    element={<TextField />}
                    control={control}
                    errors={errors}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    pattern="email"
                    name="email"
                    autoComplete="email"
                  />
                  <FormControl
                    element={<TextField />}
                    control={control}
                    margin="normal"
                    required
                    fullWidth
                    id="token"
                    label="Nhập mã xác nhận"
                    name="token"
                  />
                  <FormControl
                    element={<TextField />}
                    control={control}
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="newPassword"
                    label="Mật khẩu mới"
                    name="newPassword"
                  />
                  <LoadingButton
                    onClick={handleSubmit(handleResetPassword)}
                    loading={isLoading}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Xác nhận
                  </LoadingButton>
                </>
              )}

              <Grid container rowGap={1}>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                  <Link
                    href={`/login`}
                    variant="body2"
                    fontWeight={700}
                    color="secondary"
                  >
                    Đăng nhập
                  </Link>
                </Grid>
                <Grid
                  item
                  xs
                  md
                  sx={{ textAlign: { xs: 'center', md: 'right' } }}
                >
                  <Link
                    href="/register"
                    variant="body2"
                    fontWeight={700}
                    color="secondary"
                  >
                    Đăng ký
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
