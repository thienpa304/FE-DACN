import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Divider,
  CircularProgress,
  Grid
} from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CustomContainer from 'src/components/CustomContainer';
import pdfToText from 'react-pdftotext';
import JobRecommendTab from './JobRecommendTab';
import { cvAnalysist } from 'src/gpt/roles';
import {
  applicationErrorText,
  failedOCRErrorText,
  overTokenErrorText
} from 'src/components/UploadError';
import { CVFormat } from 'src/constants/uploadFileRule';
import { pdfjs } from 'react-pdf';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';
import useDocumentHook from 'src/modules/jobProfile/attachedDocument/hooks/useDocumentHook';
import { getFileByUrl } from 'src/common/firebaseService';
import FileUploader from 'src/components/FileUploader';
import FileFormatInfo from 'src/components/FileFormatInfo';
import ProfileInfo from './ProfileInfo';
import { loadKeywords, preProcessData } from 'src/utils/keywords';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import sendChatGPTRequest from 'src/gpt/sendChatGPTRequest';

const ACCEPTED_FILE_TYPES = CVFormat.acceptTypes;
const ACCEPTED_FILE_SIZE = CVFormat.acceptSize;
const ACCEPTED_FILE_SIZE_MB = CVFormat.acceptSize / 1024 / 1024;

const onlineRecommend = JobRecommendTab;
const documentRecommend = JobRecommendTab;

const AnalyzeProfile = (props) => {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [failedOCR, setFailedOCR] = useState(false);
  const [overToken, setOverToken] = useState(false);
  const [currentDoc, setCurrentDoc] = useState({
    file: null,
    url: ''
  });
  const [analysisResults, setAnalysisResults] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [profile, setProfile] = useState<
    Partial<OnlineProfile> | Partial<AttachedDocument>
  >(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [message, setMessage] = useState([]);
  const { profile: onlineProfile } = useOnlineProfile();
  const { profile: documentProfile } = useDocumentHook();

  const handleUploadFile = async (e) => {
    setFailedOCR(false);
    const file = e.target.files[0];
    if (!file) return;
    if (isFileValid(file)) {
      processFile(file);
    } else {
      setError(true);
    }
  };

  const isFileValid = (file) => {
    return (
      ACCEPTED_FILE_TYPES.includes(file.type) && file.size <= ACCEPTED_FILE_SIZE
    );
  };

  const processFile = async (file) => {
    setError(false);
    setOverToken(false);
    setIsLoading(true);
    const fileUrl = URL.createObjectURL(file);
    try {
      const text = await pdfToText(file);
      const tokens = text.split(/\s+/);
      const tokenCount = tokens.length;
      if (tokenCount > 4000) {
        setOverToken(true);
      } else {
        setCurrentDoc({ url: fileUrl, file: file });
        setMessage(() => [text]);
      }
    } catch (error) {
      console.error('Failed to extract text from pdf');
      setFailedOCR(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalysis = async () => {
    if (id === 'upload-cv' && !currentDoc.url) return;
    if (id !== 'upload-cv' && !profile?.userId) return;

    if (profile?.keywords) {
      setKeywords(profile?.keywords?.split(', ')?.slice(0, 15).join(', '));
      return;
    }

    setIsAnalyzing(true);
    if (id === 'upload-cv') {
      const result = await sendChatGPTRequest(cvAnalysist, message, null, {
        '58': 5,
        '60': 5
      });
      setAnalysisResults(result);
      return;
    }
    const processedProfile = preProcessData(profile, id);
    const skillsArray = profile?.skills?.split(', ');
    if (id === 'document') {
      try {
        const filePath = await getFileByUrl(documentProfile?.CV);
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Failed to fetch file');
        }
        const blob = await response.blob();
        const text = await pdfToText(blob);

        setMessage((prev) => [{ ...prev, CV: text }]);
        const result = await sendChatGPTRequest(
          cvAnalysist,
          [{ ...processedProfile, CV: text }],
          null,
          {
            '58': 5,
            '60': 5
          }
        );
        setAnalysisResults([...skillsArray, ...result]);
      } catch (error) {
        console.error('Error creating local URL:', error);
      }
    } else {
      setMessage(() => [processedProfile]);
      const result = await sendChatGPTRequest(
        cvAnalysist,
        [processedProfile],
        null,
        {
          '58': 5,
          '60': 5
        }
      );
      setAnalysisResults([...skillsArray, ...result]);
    }
  };

  useEffect(() => {
    if (id === 'online') setProfile(onlineProfile);
    else if (id === 'document') setProfile(documentProfile);
  }, [onlineProfile, documentProfile]);

  useEffect(() => {
    const keywords = loadKeywords(analysisResults, JSON.stringify(message));
    setKeywords(keywords);
    setIsAnalyzing(false);
    const section = document.getElementById(`recommend-${id}`);

    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, [analysisResults]);

  return (
    <Box id={id}>
      <CustomContainer sx={{ mb: 1, mt: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex">
            <Typography fontWeight={700} fontSize={21} lineHeight={3}>
              Phân tích Hồ sơ{' '}
              {id === 'online'
                ? 'trực tuyến'
                : id === 'document'
                ? 'đính kèm'
                : 'từ máy tính'}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box py={2}>
          <ProfileInfo id={id} profile={profile} uploadedCV={currentDoc} />
          {id === 'upload-cv' && currentDoc.url && (
            <Box display="flex">
              <ContactPageIcon sx={{ width: 50, height: 50 }} color="info" />
              <Box
                textAlign="left"
                justifyContent="left"
                component={Button}
                color="inherit"
                width="100%"
                onClick={() => window.open(currentDoc.url, '_blank')}
              >
                {currentDoc.file.name}
                {isLoading && <CircularProgress />}
              </Box>
            </Box>
          )}
          {error && applicationErrorText}
          {overToken && overTokenErrorText}
          {failedOCR && failedOCRErrorText}
          <Box display="flex" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAnalysis}
              disabled={isAnalyzing || (!profile?.userId && !currentDoc?.url)}
              sx={{ mr: 2 }}
            >
              Phân tích Hồ sơ
            </Button>

            {id === 'upload-cv' && (
              <FileUploader
                isLoading={isLoading}
                handleUploadFile={handleUploadFile}
              />
            )}
          </Box>
          {id === 'upload-cv' && (
            <FileFormatInfo
              acceptTypes={ACCEPTED_FILE_TYPES}
              acceptSize_MB={ACCEPTED_FILE_SIZE_MB}
            />
          )}
          {isAnalyzing && <CircularProgress sx={{ mx: '50%' }} />}
          {keywords && (
            <Grid item xs={12}>
              <Divider />
              <Typography mt={2}>
                <b>Từ khóa:</b> <em>{keywords}</em>
              </Typography>
            </Grid>
          )}
        </Box>
      </CustomContainer>

      {keywords && (
        <JobRecommendTab id={id} profile={profile || { keywords: keywords }} />
      )}
    </Box>
  );
};

export default AnalyzeProfile;
