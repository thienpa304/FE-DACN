import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const checkIsMobile = (theme) => {
  return useMediaQuery(theme.breakpoints.down('sm'));
};
export const checkIsTablet = (theme) => {
  return useMediaQuery(theme.breakpoints.down('md'));
};
export const checkIsDesktop = (theme) => {
  return useMediaQuery(theme.breakpoints.down('lg'));
};
export const checkIsLargeDesktop = (theme) => {
  return useMediaQuery(theme.breakpoints.up('lg'));
};

export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = checkIsMobile(theme);
  const isTablet = checkIsTablet(theme);
  const isDesktop = checkIsDesktop(theme);
  const isLargeDesktop = checkIsLargeDesktop(theme);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  };
};
