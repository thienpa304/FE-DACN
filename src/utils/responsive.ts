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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  };
};
