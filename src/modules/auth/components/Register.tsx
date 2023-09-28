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
          Sign up with {role.toLowerCase()}
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
  );
}
