import { Box, styled } from '@mui/material';
import Cover from './Information/UserCover';
import UserInfo from './InfoUser';

const CustomBox = styled(Box)(({ theme }) => ({
  background: '#ffff',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7'
}));

export default function InfoAccountTab() {
  return (
    <>
      <CustomBox>
        <Cover />
      </CustomBox>
      <CustomBox>
        <UserInfo />
      </CustomBox>
    </>
  );
}
