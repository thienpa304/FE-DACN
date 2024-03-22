import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  styled,
  Divider,
  CircularProgress,
  Grid
} from '@mui/material';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from 'src/components/FormControl';
import { useForm } from 'react-hook-form';
import { User } from 'src/modules/users/model';
import { useApp } from 'src/modules/app/hooks';
import { CVFormat } from 'src/constants/uploadFileRule';
import { applicationErrorText } from 'src/components/UploadError';
import CustomContainer from 'src/components/CustomContainer';
import pdfToText from 'react-pdftotext';
import JobRecommendTab from './JobRecommendTab';
import ChatGPT from 'src/modules/ai/ChatGPT';
import { cvAnalysist } from 'src/modules/ai/roles';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Input = styled('input')({
  display: 'none'
});

const UploadCV = (props) => {
  const { user } = useApp();
  const { acceptTypes, acceptSize } = CVFormat;
  const defaultUserValues = { ...user };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentDoc, setCurrentDoc] = useState({
    file: null,
    url: ''
  });
  const [analysisResults, setAnalysisResults] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [profile, setProfile] = useState('');
  const [sendRequest, setSendRequest] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const { control } = useForm<User>({
    defaultValues: defaultUserValues
  });

  const handleAnalysis = () => {
    setIsAnalyzing(true);
    setSendRequest(true);
  };

  const handleUploadFile = async (e) => {
    setError(false);
    setIsLoading(true);
    const file = e.target.files[0];
    if (file && acceptTypes.includes(file.type) && file.size <= acceptSize) {
      const fileUrl = URL.createObjectURL(file);
      setCurrentDoc({ url: fileUrl, file: file });
      pdfToText(file)
        .then((text) => {
          setProfile(text);
        })
        .catch((error) => console.error('Failed to extract text from pdf'));
    } else {
      setError(true);
    }
    setIsLoading(false);
  };

  const openFile = () => {
    window.open(currentDoc.url, '_blank');
  };

  useEffect(() => {
    setKeywords(JSON.parse(analysisResults));
    setSendRequest(false);
    setIsAnalyzing(false);
  }, [analysisResults]);

  return (
    <Box id="upload-cv">
      <CustomContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex">
            <Typography fontWeight={700} fontSize={21} lineHeight={3}>
              Tải CV đính kèm
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box py={2}>
          {!currentDoc?.url && (
            <Box>
              <Typography mb={2} color="grey.700">
                <em>* Vui lòng gửi lên CV xin việc của bạn !</em>
              </Typography>
              {error && applicationErrorText}
              <label htmlFor="CV">
                <Button
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  variant="outlined"
                  color="secondary"
                  disabled={isLoading}
                >
                  <FormControl
                    element={<Input type="file" accept=".pdf, .png" />}
                    control={control}
                    name="CV"
                    id="CV"
                    label="CV đính kèm"
                    onChange={handleUploadFile}
                    disabled={isLoading}
                  />
                  Tải file
                </Button>
              </label>
              {isLoading && <CircularProgress />}
            </Box>
          )}

          {currentDoc?.url && (
            <Box>
              <Box display="flex">
                <ContactPageIcon sx={{ width: 50, height: 50 }} color="info" />
                <Box
                  justifyContent="left"
                  component={Button}
                  color="inherit"
                  width="100%"
                  onClick={openFile}
                >
                  {currentDoc?.file?.name}
                  {isLoading && <CircularProgress />}
                </Box>
                {error && applicationErrorText}
              </Box>
              <Box display="flex" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAnalysis}
                  disabled={isAnalyzing}
                >
                  Phân tích Hồ sơ
                </Button>
                <Button
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  variant="outlined"
                  color="secondary"
                  disabled={isLoading}
                  sx={{ ml: 2 }}
                >
                  <FormControl
                    element={<Input type="file" accept=".pdf, .png" />}
                    control={control}
                    name="CV"
                    id="CV"
                    label="CV đính kèm"
                    onChange={handleUploadFile}
                    disabled={isLoading}
                  />
                  Tải file
                </Button>
              </Box>
            </Box>
          )}
          <Typography fontSize={13} color="grey.600" mt={1}>
            Định dạng file{' '}
            {acceptTypes.join(', ').replace(/application\//g, '.')} và dung
            lượng {` <= ${acceptSize / 1024 / 1024} MB`}
          </Typography>
          {analysisResults && (
            <Grid item xs={12}>
              <Divider />
              <Typography variant="h6" mt={2}>
                <b>Từ khóa:</b> <em>{keywords?.join(', ')}</em>
              </Typography>
            </Grid>
          )}
        </Box>
      </CustomContainer>
      {isAnalyzing && <CircularProgress />}
      {analysisResults && (
        <JobRecommendTab id={`recommend-upload-cv-profile`} />
      )}
      <ChatGPT
        request={cvAnalysist}
        content={profile}
        setAnswer={setAnalysisResults}
        sendRequest={sendRequest}
      />
    </Box>
  );
};

export default UploadCV;
