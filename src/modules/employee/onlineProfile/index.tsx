import { Box, Container, Grid, styled, Typography } from '@mui/material';
import Personal from './Personal';
import General from './General';
import TableOfContents from './TableContent';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// const MyBox = styled(Box)(({ theme }) => ({
//   bgcolor: "#ffff",
//   paddingY: 2,
//   margin: 3,
// }));

const MyBox = ({ children }) => (
  <Box bgcolor="#ffff" sx={{ mb: 4 }}>
    {children}
  </Box>
);

export default function OnlineProfile() {
  const sections = [
    {
      icon: <AccountBoxOutlinedIcon />,
      title: 'Thông tin cá nhân',
      id: 'personal'
    },
    { icon: <WorkOutlineIcon />, title: 'Thông tin chung', id: 'general' }
  ];
  return (
    <Container>
      <Typography mt={3} fontSize={22} fontWeight={700}>
        Tạo hồ sơ trực tuyến
      </Typography>
      <Grid container columnSpacing={4} mt={1}>
        <Grid item xs={9}>
          <MyBox>
            <Personal />
          </MyBox>
          <MyBox>
            <General />
          </MyBox>
        </Grid>
        <Grid item xs>
          <Box bgcolor="#ffff" sx={{ p: 0 }} width={290} position="fixed">
            <TableOfContents sections={sections} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
