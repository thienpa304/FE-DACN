import { Box, Container, Grid, Typography } from '@mui/material';
import Personal from '../Personal';
import General from './General';
import Experience from './Experience';
import Education from './Education';
import Degree from './Degree';
import TableOfContents from '../TableOfContent';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const MyBox = ({ children }) => (
  <Box bgcolor="#ffff" sx={{ mb: 4, boxShadow: '2px 2px 6px #aae2f7' }}>
    {children}
  </Box>
);

export default function OnlineProfile() {
  const sections = [
    {
      icon: <AccountBoxOutlinedIcon sx={{ width: 20 }} />,
      title: 'Thông tin cá nhân',
      id: 'personal'
    },
    {
      icon: <WorkOutlineIcon sx={{ width: 20 }} />,
      title: 'Thông tin chung',
      id: 'general'
    },
    {
      icon: <AssignmentOutlinedIcon sx={{ width: 20 }} />,
      title: 'Thông tin nghề nghiệp',
      id: 'work_experience'
    },
    {
      icon: <SchoolOutlinedIcon sx={{ width: 20 }} />,
      title: 'Thông tin học vấn',
      id: 'education'
    },
    {
      icon: <WorkspacePremiumOutlinedIcon sx={{ width: 20 }} />,
      title: 'Những chứng chỉ khác',
      id: 'other_degree'
    }
  ];

  return (
    <Container key='online'>
      <Typography mt={3} fontSize={22} fontWeight={700}>
        Tạo hồ sơ trực tuyến
      </Typography>
      <Grid container columnSpacing={2} mt={2}>
        <Grid item xs={10}>
          {sections.map((section) => (
            <MyBox key={section.id}>
              {section.id === 'personal' && <Personal />}
              {section.id === 'general' && <General />}
              {section.id === 'work_experience' && <Experience />}
              {section.id === 'education' && <Education />}
              {section.id === 'other_degree' && <Degree />}
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
