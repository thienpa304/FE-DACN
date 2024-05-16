import { Box, styled } from '@mui/material';
import { isMobile } from 'src/constants/reponsive';

const CustomContainer = styled(Box)(({ theme }) => ({
  background: '#ffff',
  padding: isMobile ? theme.spacing(1) : theme.spacing(2),
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7',
  border: '1px solid #aae2f7'
}));

export default CustomContainer;
