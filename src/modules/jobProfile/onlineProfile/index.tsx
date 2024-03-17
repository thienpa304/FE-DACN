import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Snackbar,
  Alert,
  AlertTitle
} from '@mui/material';
import Personal from '../Personal';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import Degree from './components/Degree';
import TableOfContents from '../TableOfContent';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import useQueryOnlineProfile from './hooks/useQueryOnlineProfile';
import useOnlineProfile from './hooks/useOnlineProfile';
import SuspenseLoader from 'src/components/SuspenseLoader';
import SubmitBox from '../SubmitBox';
import { useNavigate } from 'react-router';
import useMutateUpdateOnlineProfile from './hooks/useMutateUpdateOnlineProfile';
import useWorkExperience from './hooks/useWorkExperience';
import useProfileHook from 'src/modules/users/hooks/useUserHook';
import useMutateOnlineProfile from './hooks/useMutateOnlineProfile';
import { OnlineProfile as OnlineProfileType } from '../model';
import useMutateEducation from './components/Education/hooks/useMutateEducation';

const MyBox = ({ children }) => (
  <Box bgcolor="#ffff" sx={{ mb: 4, boxShadow: '2px 2px 6px #aae2f7' }}>
    {children}
  </Box>
);

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

export default function OnlineProfile() {
  const [missingInfo, setMissingInfo] = useState(false);
  useMutateUpdateOnlineProfile();
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const { profile, setProfile } = useOnlineProfile();
  const { onSaveData: onSaveGeneral } = useMutateOnlineProfile();
  const { onSaveData: onSaveEducation } = useMutateEducation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (profile?.userId) navigate('/employee/recruitment-profile');
    else setMissingInfo(true);
    // debugger;
    // const education_informations = profile?.education_informations
    //   ? [...profile?.education_informations]
    //   : [];
    // const work_experiences = profile?.work_experiences
    //   ? [...profile?.work_experiences]
    //   : [];
    // debugger;
    // onSaveGeneral(profile as OnlineProfileType);
    // debugger;
    // for (let i = 0; i < education_informations.length; i++)
    //   onSaveEducation(education_informations[i]);
  };

  const goBack = () => {
    navigate('/employee/recruitment-profile');
  };

  useEffect(() => {
    setProfile(onlineProfile);
  }, [onlineProfile]);

  if (isLoading) {
    return <SuspenseLoader />;
  }

  return (
    <>
      <Container key="online">
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
              position="sticky"
              top={60}
            >
              <TableOfContents sections={sections} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SubmitBox>
        <Button
          onClick={goBack}
          variant="outlined"
          color="secondary"
          sx={{ width: 200 }}
        >
          Quay lại
        </Button>
        <Button variant="contained" sx={{ width: 200 }} onClick={handleSubmit}>
          Đăng hồ sơ
        </Button>
      </SubmitBox>
      <Snackbar
        open={missingInfo}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={() => setMissingInfo(false)}
      >
        <Alert severity="error">
          <AlertTitle>
            {missingInfo && 'Vui lòng cung cấp thông tin chung'}
          </AlertTitle>
        </Alert>
      </Snackbar>
    </>
  );
}
