import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import useRegister from '../hooks/useRegisterHook';
import { RegisterRequest } from '../model';
import { LoadingButton } from '@mui/lab';

const defaultTheme = createTheme();

export default function Register() {
  const { onRegister, isLoading } = useRegister();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterRequest>({});

  const handleRegister = (data: RegisterRequest) => {
    onRegister(data);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
              label="Email Address"
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
              label="Password"
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
              label="Confirm Password"
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
              Sign Up
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {'Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
