import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  styled,
  Backdrop
} from '@mui/material';
import AttachCV from './components/AttachedCV';
import Personal from '../Personal';
import General from './components/General';
import TableOfContents from '../TableOfContent';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import useMutateAttachedDocument from './hooks/useMutateAttachedDocument';
import useMutateUpdateAttachedDocument from './hooks/useMutateUpdateAttachedDocument';
import useDocumentHook from './hooks/useDocumentHook';
import useQueryAttachedDocument from './hooks/useQueryAttachedDocument';
import { AttachedDocument as AttachedDocumentType } from '../model';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useNavigate } from 'react-router';
import SubmitBox from '../SubmitBox';
import { getFileByUrl } from 'src/common/firebaseService';
import sendChatGPTRequest from 'src/GPT/sendChatGPTRequest';
import { cvAnalysist, translate } from 'src/GPT/roles';
import pdfToText from 'react-pdftotext';
import { loadKeywords, preProcessData } from 'src/utils/keywords';
import { useResponsive } from 'src/utils/responsive';

const CustomBox = styled(Box)(({ theme }) => ({
  background: '#ffff',
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7'
}));

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
  const { onSaveData } = useMutateAttachedDocument();
  const { onUpdateData } = useMutateUpdateAttachedDocument();
  const { setProfile, profile } = useDocumentHook();
  const { attachedDocument, isLoading } = useQueryAttachedDocument();
  const navigate = useNavigate();
  const [finished, setFinished] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { isMobile } = useResponsive();

  const handleSaveProfile = async () => {
    if (!profile?.CV) return;
    setIsAnalyzing(true);
    try {
      const filePath = await getFileByUrl(profile?.CV);
      const response = await fetch(filePath);
      if (!response?.ok) {
        throw new Error('Failed to fetch file');
      }
      const blob = await response?.blob();
      const text = await pdfToText(blob);

      const dataToAnalyze = preProcessData(profile, 'document', text);

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

      if (profile?.userId) {
        onUpdateData({
          ...profile,
          keywords: profile?.skills + ', ' + keywords
        } as AttachedDocumentType);
      } else {
        onSaveData({
          ...profile,
          keywords: profile?.skills + ', ' + keywords
        } as AttachedDocumentType);
      }
      setFinished(true);
      setIsAnalyzing(false);
    } catch (error) {
      console.error('Error creating local URL:', error);
      setIsAnalyzing(false);
    }
  };

  const goBack = () => {
    navigate('/employee/recruitment-profile');
  };

  useEffect(() => {
    if (finished) {
      navigate('/employee/recruitment-profile');
    }
  }, [finished]);

  if (isLoading) return <SuspenseLoader />;
  return (
    <>
      <Container>
        <Typography mt={3} fontSize={22} fontWeight={700}>
          Tạo hồ sơ đính kèm
        </Typography>
        <Grid container columnSpacing={2} mt={2}>
          <Grid item xs={!isMobile ? 10 : 12}>
            {sections.map((section) => (
              <CustomBox key={section.id}>
                {section.id === 'cv' && <AttachCV />}
                {section.id === 'personal' && <Personal />}
                {section.id === 'general' && <General />}
              </CustomBox>
            ))}
          </Grid>
          <Grid
            item
            xs={!isMobile ? 2 : 0}
            sx={{ display: { xs: 'none', sm: 'inline' } }}
          >
            <CustomBox width={200} position="sticky" top={60}>
              <TableOfContents sections={sections} />
            </CustomBox>
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
        <Button
          variant="contained"
          sx={{ width: 200 }}
          onClick={handleSaveProfile}
        >
          Lưu hồ sơ
        </Button>
      </SubmitBox>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isAnalyzing}
      >
        <SuspenseLoader />
      </Backdrop>
    </>
  );
}
