import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const checkIsMobile = (theme) => {
  return useMediaQuery(theme.breakpoints.down('sm'));
};
