import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import useLogin from '../hooks/useLoginHook';
import { LoginRequest } from '../model';
import { Role } from 'src/modules/users/model';
import backgroundImage from '../image/background-image.png';
import background from '../image/background.svg';

export default function Login() {
  const { isLoading, onLogin } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginRequest>({});

  const handleLogin = (data: LoginRequest) => {
    onLogin(data);
  };

  return (
    <>
      <Box
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover'
        }}
      />
      <Container component="main" maxWidth="xs" sx={{ ml: 25, my: 15 }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'white',
            p: 3,
            border: 1,
            borderColor: '#98E4FF',
            borderRadius: 2,
            boxShadow: '2px 2px 6px #98E4FF'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Nhớ mật khẩu"
            />
            <LoadingButton
              onClick={handleSubmit(handleLogin)}
              loading={isLoading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </LoadingButton>
            <Grid container mt={2}>
              <Grid item xs>
                <Link
                  href={`/register?role=${Role.EMPLOYER}`}
                  variant="body2"
                  fontWeight={700}
                  color="secondary"
                >
                  Dành cho NTD
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/register"
                  variant="body2"
                  fontWeight={700}
                  color="secondary"
                >
                  {'Chưa có tài khoản? Đăng ký'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
