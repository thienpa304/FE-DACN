import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const TypographyEllipsis = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));
