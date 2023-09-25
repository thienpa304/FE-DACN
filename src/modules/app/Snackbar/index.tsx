import { Alert, Snackbar as Toast } from '@mui/material';
import useToast from '../hooks/useToast';

const Snackbar = () => {
  const { duration, massage, open, type, close } = useToast();

  return (
    <Toast
      open={open}
      autoHideDuration={duration}
      onClose={close}
    >
      <Alert onClose={close} severity={type} sx={{ width: '100%' }}>
        {massage}
      </Alert>
    </Toast>
  );
};

export default Snackbar;
