import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import { Role } from 'src/modules/users/model';
import useRegister from '../hooks/useRegisterHook';
import { RegisterRequest } from '../model';
import backgroundImage from '../image/background-image.png';

export default function Register() {
  const { onRegister, isLoading } = useRegister();
  const [params] = useSearchParams();
  let role = params.get('role') as Role;
  if (!Object.values(Role).includes(role)) role = Role.EMPLOYEE;
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterRequest>({});

  const handleRegister = (data: RegisterRequest) => {
    onRegister({
      ...data,
      role: role || Role.EMPLOYEE
    });
  };

  return (
    <>
      <Box
        sx={{
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
            borderColor: '#79b6cc',
            borderRadius: 2,
            boxShadow: '2px 2px 6px #98E4FF'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký với{' '}
            {role.toLowerCase() === 'employer'
              ? 'Nhà tuyển dụng'
              : 'Người tìm việc'}
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
              name="email"
              pattern="email"
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
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Nhập lại mật khẩu"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
            />

            <LoadingButton
              onClick={handleSubmit(handleRegister)}
              loading={isLoading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng kí
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  fontWeight={700}
                  color="secondary"
                >
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  fontWeight={700}
                  color="secondary"
                >
                  Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
