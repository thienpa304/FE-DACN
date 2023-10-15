import { Box } from '@mui/material';
import Cover from './Information/UserCover';
import UserInfo from './Information/UserInfo';

const Container = ({ children }) => (
  <Box bgcolor="#ffff" sx={{ padding: 2, mb: 4 }}>
    {children}
  </Box>
);

export default function InfoAccountTab() {
  return (
    <>
      <Container>
        <Cover />
      </Container>
      <Container>
        <UserInfo />
      </Container>
    </>
  );
}
