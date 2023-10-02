import { Alert, Snackbar as Toast } from '@mui/material';
import { useApp } from '../hooks';

const Snackbar = () => {
  const {
    snackbar: { duration, massage, open, type },
    toast
  } = useApp();

  return (
    <Toast open={open} autoHideDuration={duration} onClose={toast.close}>
      <Alert onClose={toast.close} severity={type} sx={{ width: '100%' }}>
        {massage}
      </Alert>
    </Toast>
  );
};

export default Snackbar;
