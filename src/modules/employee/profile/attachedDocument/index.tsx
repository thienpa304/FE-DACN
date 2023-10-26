import { Box, Container, Grid, Typography } from '@mui/material';
import AttachCV from './AttachedCV';
import Personal from '../Personal';
import General from './General';
import TableOfContents from '../TableOfContent';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const MyBox = ({ children }) => (
  <Box bgcolor="#ffff" sx={{ mb: 4, boxShadow: '2px 2px 6px #aae2f7' }}>
    {children}
  </Box>
);

const sections = [
  {
    icon: <AccountBoxOutlinedIcon sx={{ width: 20 }} />,
    title: 'Tải CV đính kèm',
    id: 'cv'
  },
  {
    icon: <AccountBoxOutlinedIcon sx={{ width: 20 }} />,
    title: 'Thông tin cá nhân',
    id: 'personal'
  },
  {
    icon: <WorkOutlineIcon sx={{ width: 20 }} />,
    title: 'Thông tin chung',
    id: 'general'
  }
];

export default function AttachedDocument() {
  return (
    <Container>
      <Typography mt={3} fontSize={22} fontWeight={700}>
        Tạo hồ sơ đính kèm
      </Typography>
      <Grid container columnSpacing={2} mt={2}>
        <Grid item xs={10}>
          {sections.map((section) => (
            <MyBox key={section.id}>
              {section.id === 'cv' && <AttachCV />}
              {section.id === 'personal' && <Personal />}
              {section.id === 'general' && <General />}
            </MyBox>
          ))}
        </Grid>
        <Grid item xs={2}>
          <Box
            bgcolor="#ffff"
            sx={{ boxShadow: '2px 2px 6px #aae2f7' }}
            width={200}
            position="fixed"
          >
            <TableOfContents sections={sections} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
