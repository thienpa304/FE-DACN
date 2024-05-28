import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Snackbar,
  Alert,
  AlertTitle,
  Backdrop,
  useTheme
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
import { OnlineProfile as OnlineProfileType } from '../model';
import { loadKeywords, preProcessData } from 'src/utils/keywords';
import sendChatGPTRequest from 'src/GPT/sendChatGPTRequest';
import { cvAnalysist, translate } from 'src/GPT/roles';
import { checkIsMobile, useResponsive } from 'src/utils/responsive';

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
  const [finished, setFinished] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const { profile, setProfile } = useOnlineProfile();
  const { onUpdateData } = useMutateUpdateOnlineProfile();
  const navigate = useNavigate();

  const { isMobile } = useResponsive();

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    if (profile?.userId) {
      const dataToAnalyze = preProcessData(profile, 'online');
      const analysisResults = await sendChatGPTRequest(
        cvAnalysist,
        [dataToAnalyze],
        null,
        {
          '58': 5,
          '60': 5
        }
      );
      const translatedResults = await sendChatGPTRequest(
        translate,
        analysisResults
      );
      const keywords = loadKeywords(translatedResults);
      onUpdateData({
        ...profile,
        keywords: profile?.skills + ', ' + keywords
      } as OnlineProfileType);
      setFinished(true);
      setIsAnalyzing(false);
    } else {
      setMissingInfo(true);
      setIsAnalyzing(false);
    }
  };

  const goBack = async () => {
    setFinished(true);
  };

  useEffect(() => {
    if (finished) {
      navigate('/employee/recruitment-profile');
    }
  }, [finished]);

  useEffect(() => {
    setProfile(onlineProfile);
  }, [onlineProfile]);

  if (isLoading) return <SuspenseLoader />;
  return (
    <>
      <Container key="online">
        <Typography mt={3} fontSize={22} fontWeight={700}>
          Tạo hồ sơ trực tuyến
        </Typography>
        <Grid container columnSpacing={2} mt={2}>
          <Grid item xs={!isMobile ? 10 : 12}>
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
          <Grid
            item
            xs={!isMobile ? 2 : 0}
            sx={{ display: { xs: 'none', sm: 'inline' } }}
          >
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
          Lưu hồ sơ
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isAnalyzing}
      >
        <SuspenseLoader />
      </Backdrop>
    </>
  );
}
