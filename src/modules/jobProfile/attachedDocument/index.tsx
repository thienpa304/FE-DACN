import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  styled,
  Backdrop,
  CircularProgress
} from '@mui/material';
import AttachCV from './components/AttachedCV';
import Personal from '../Personal';
import General from './components/General';
import TableOfContents from '../TableOfContent';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import useMutateAttachedDocument from './hooks/useMutateAttachedDocument';
import useMutateUpdateAttachedDocument from './hooks/useMutateUpdateAttachedDocument';
import useAttachedDocument from './hooks/useDocument';
import useQueryAttachedDocument from './hooks/useQueryAttachedDocument';
import { AttachedDocument as AttachedDocumentType } from '../model';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { useNavigate } from 'react-router';
import SubmitBox from '../SubmitBox';
import { getFileByUrl } from 'src/common/firebaseService';
import sendChatGPTRequest from 'src/modules/ai/sendChatGPTRequest';
import { cvAnalysist } from 'src/modules/ai/roles';
import pdfToText from 'react-pdftotext';
import { loadKeywords, preProcessData } from 'src/utils/keywords';

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
  const { setProfile, profile } = useAttachedDocument();
  const { attachedDocument, isLoading } = useQueryAttachedDocument();
  const navigate = useNavigate();
  const [finished, setFinished] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // const preProcessData = (
  //   profile: Partial<AttachedDocumentType>,
  //   cvContent: string
  // ) => {
  //   return {
  //     jobTitle: profile?.jobTitle,
  //     profession: profile?.profession,
  //     careerGoal: profile?.careerGoal,
  //     CV: cvContent
  //   };
  // };

  const handleSaveProfile = async () => {
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
      sendChatGPTRequest(cvAnalysist, [dataToAnalyze], null, {
        '58': 1,
        '60': 1
      }).then((analysisResults) => {
        const keywords = loadKeywords(
          analysisResults,
          JSON.stringify(dataToAnalyze)
        );
        onUpdateData({
          ...profile,
          keywords: keywords
        } as AttachedDocumentType);
        setFinished(true);
      });
      if (profile?.userId) {
        onUpdateData(profile as AttachedDocumentType);
      } else {
        onSaveData(profile as AttachedDocumentType);
      }
    } catch (error) {
      console.error('Error creating local URL:', error);
    } finally {
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

  useEffect(() => {
    setProfile(attachedDocument);
  }, [attachedDocument]);

  if (isLoading || isAnalyzing) {
    return <SuspenseLoader />;
  }

  return (
    <>
      <Container>
        <Typography mt={3} fontSize={22} fontWeight={700}>
          Tạo hồ sơ đính kèm
        </Typography>
        <Grid container columnSpacing={2} mt={2}>
          <Grid item xs={10}>
            {sections.map((section) => (
              <CustomBox key={section.id}>
                {section.id === 'cv' && <AttachCV />}
                {section.id === 'personal' && <Personal />}
                {section.id === 'general' && <General />}
              </CustomBox>
            ))}
          </Grid>
          <Grid item xs={2}>
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
    </>
  );
}
