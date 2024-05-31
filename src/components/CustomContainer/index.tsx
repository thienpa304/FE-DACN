import { Box, styled } from '@mui/material';
import { useResponsive } from 'src/utils/responsive';

const CustomContainer = styled(Box)(({ theme }) => {
  const { isMobile } = useResponsive();
  return {
    background: '#ffff',
    padding: isMobile ? theme.spacing(1) : theme.spacing(2),
    marginBottom: theme.spacing(4),
    boxShadow: '2px 2px 6px #aae2f7',
    border: '1px solid #aae2f7'
  };
});

export default CustomContainer;
