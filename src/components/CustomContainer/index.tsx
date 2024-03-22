import { Box, styled } from '@mui/material';

const CustomContainer = styled(Box)(({ theme }) => ({
  background: '#ffff',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7'
}));

export default CustomContainer;
