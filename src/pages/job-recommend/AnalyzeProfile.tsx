import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  styled,
  Divider,
  CircularProgress,
  List,
  ListItem,
  Grid,
  ListItemText
} from '@mui/material';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from 'src/components/FormControl';
import { useForm } from 'react-hook-form';
import { User } from 'src/modules/users/model';
import { useApp } from 'src/modules/app/hooks';
import {
  getFileByUrl,
  uploadFile,
  removeFileByUrl
} from 'src/common/firebaseService';
import { CVFormat } from 'src/constants/uploadFileRule';
import { applicationErrorText } from 'src/components/UploadError';
import CustomContainer from 'src/components/CustomContainer';
import useQueryOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useQueryOnlineProfile';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';
import useAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useDocument';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import ChatGPT from 'src/modules/ai/ChatGPT';
import JobRecommendTab from './JobRecommendTab';
import { cvAnalysist } from 'src/modules/ai/roles';
import SuspenseLoader from 'src/components/SuspenseLoader';

const AnalyzeProfile = (props) => {
  const { id } = props;
  const { profile: onlineProfile } = useOnlineProfile();
  const { profile: documentProfile } = useAttachedDocument();
  const [profile, setProfile] = useState<
    Partial<OnlineProfile> | Partial<AttachedDocument>
  >();
  const [analysisResults, setAnalysisResults] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = () => {
    setIsAnalyzing(true);
    setSendRequest(true);
  };

  useEffect(() => {
    if (id === 'online') setProfile(onlineProfile);
    else setProfile(documentProfile);
  }, [onlineProfile, documentProfile]);

  useEffect(() => {
    setKeywords(JSON.parse(analysisResults));
    setSendRequest(false);
    setIsAnalyzing(false);
  }, [analysisResults]);

  return (
    <Box id={id}>
      <CustomContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex">
            <Typography fontWeight={700} fontSize={21} lineHeight={3}>
              Phân tích Hồ sơ {id === 'online' ? 'trực tuyến' : 'đính kèm'}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box py={2}>
          {profile?.userId ? (
            <Box display="flex">
              <img
                src={
                  id === 'online'
                    ? 'https://cdn-icons-png.flaticon.com/128/1309/1309245.png'
                    : 'https://cdn-icons-png.flaticon.com/512/3135/3135796.png'
                }
                width={50}
                color="secondary"
              />
              <Typography fontWeight={700} fontSize={16} lineHeight={3} ml={2}>
                {profile?.jobTitle}
              </Typography>
            </Box>
          ) : (
            <Typography mb={2} color="grey.700">
              <em>* Vui lòng gửi lên CV xin việc của bạn !</em>
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAnalysis}
            sx={{ mt: 2 }}
            disabled={isAnalyzing}
          >
            Phân tích Hồ sơ
          </Button>
        </Box>
        {analysisResults && (
          <Grid item xs={12}>
            <Divider />
            <Typography variant="h6" mt={2}>
              <b>Từ khóa:</b> <em>{keywords?.join(', ')}</em>
            </Typography>
          </Grid>
        )}
      </CustomContainer>
      {isAnalyzing && <CircularProgress />}
      {analysisResults && <JobRecommendTab id={`recommend-${id}-profile`} />}
      <ChatGPT
        request={cvAnalysist}
        content={profile}
        setAnswer={setAnalysisResults}
        sendRequest={sendRequest}
      />
    </Box>
  );
};

export default AnalyzeProfile;
