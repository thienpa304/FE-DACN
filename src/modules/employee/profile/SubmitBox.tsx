import {
  Box,
  styled,
} from '@mui/material';


const SubmitBox = styled(Box)(({ theme }) => ({
  background: '#ffff',
  height: 70,
  width: '100%',
  boxShadow: '0px 0px 10px #aae2f7',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  position: 'sticky',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(4)
}));

export default SubmitBox;
