import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const TypographyEllipsis = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'wrap',
  lineHeight: '1.5',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
}));
