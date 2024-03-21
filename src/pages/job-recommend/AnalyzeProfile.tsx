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
import ChatGPT from 'src/modules/ai/ChatGPT';
import { cvAnalysist } from 'src/modules/ai/roles';
import {
  applicationErrorText,
  failedOCRErrorText,
  overTokenErrorText
} from 'src/components/UploadError';
import { useApp } from 'src/modules/app/hooks';
import { CVFormat } from 'src/constants/uploadFileRule';
import Tesseract from 'tesseract.js';
import { pdfjs } from 'react-pdf';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';
import useAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useDocument';
import { getFileByUrl } from 'src/common/firebaseService';
import FileUploader from 'src/components/FileUploader';
import FileFormatInfo from 'src/components/FileFormatInfo';
import ProfileInfo from './ProfileInfo';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ACCEPTED_FILE_TYPES = CVFormat.acceptTypes;
const ACCEPTED_FILE_SIZE = CVFormat.acceptSize;
const ACCEPTED_FILE_SIZE_MB = CVFormat.acceptSize / 1024 / 1024;

const AnalyzeProfile = (props) => {
  const { user } = useApp();
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [failedOCR, setFailedOCR] = useState(false);
  const [overToken, setOverToken] = useState(false);
  const [currentDoc, setCurrentDoc] = useState({
    file: null,
    url: ''
  });
  const [analysisResults, setAnalysisResults] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [profile, setProfile] = useState(null);
  const [sendRequest, setSendRequest] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [message, setMessage] = useState({});
  const { profile: onlineProfile } = useOnlineProfile();
  const { profile: documentProfile } = useAttachedDocument();

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
        setMessage(text);
      }
    } catch (error) {
      console.error('Failed to extract text from pdf');
      setFailedOCR(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalysis = async () => {
    if (id === 'upload-cv') {
      if (!currentDoc.url) return;
    } else {
      if (!profile.userId) return;
      const object = removeAttributes(profile);
      setMessage(object);
      if (id === 'document') {
        try {
          const filePath = await getFileByUrl(documentProfile?.CV);
          const response = await fetch(filePath);
          if (!response.ok) {
            throw new Error('Failed to fetch file');
          }
          const blob = await response.blob();
          const text = await pdfToText(blob);
          setMessage({ ...object, CV: text });
          setIsAnalyzing(true);
          setSendRequest(true);
        } catch (error) {
          console.error('Error creating local URL:', error);
        }
      }
    }
    setIsAnalyzing(true);
    setSendRequest(true);
  };

  function removeDateAttributes(data) {
    return data.map((item) => {
      const { startDate, endDate, id, ...rest } = item;
      return rest;
    });
  }

  function removeAttributes(object) {
    const includeDateAttributes = [
      'work_experiences',
      'education_informations'
    ];
    const { userId, view, isHidden, employee, ...rest } = object;
    for (const attr in rest) {
      if (includeDateAttributes.includes(attr)) {
        rest[attr] = removeDateAttributes(rest[attr]);
      }
    }
    return rest;
  }

  useEffect(() => {
    if (id === 'online') setProfile(onlineProfile);
    else if (id === 'document') setProfile(documentProfile);
  }, [onlineProfile, documentProfile]);

  useEffect(() => {
    if (analysisResults) {
      setKeywords(JSON.parse(analysisResults));
      setSendRequest(false);
      setIsAnalyzing(false);
    }
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
          {analysisResults && (
            <Grid item xs={12}>
              <Divider />
              <Typography mt={2}>
                <b>Từ khóa:</b> <em>{keywords?.join(', ')}</em>
              </Typography>
            </Grid>
          )}
        </Box>
      </CustomContainer>

      {analysisResults && (
        <JobRecommendTab id={`recommend-upload-cv-profile`} />
      )}
      {sendRequest && (
        <ChatGPT
          request={cvAnalysist}
          content={message}
          setAnswer={setAnalysisResults}
          sendRequest={sendRequest}
        />
      )}
    </Box>
  );
};

export default AnalyzeProfile;
