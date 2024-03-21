import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  styled,
  Divider,
  CircularProgress
} from '@mui/material';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from 'src/components/FormControl';
import { useForm } from 'react-hook-form';
import { User } from '../../../users/model';
import { useApp } from 'src/modules/app/hooks';
import {
  getFileByUrl,
  uploadFile,
  removeFileByUrl
} from 'src/common/firebaseService';
import { CVFormat } from 'src/constants/uploadFileRule';
import useAttachedDocument from '../hooks/useDocument';
import { applicationErrorText } from 'src/components/UploadError';
import FileFormatInfo from 'src/components/FileFormatInfo';

const Input = styled('input')({
  display: 'none'
});
const ACCEPTED_FILE_TYPES = CVFormat.acceptTypes;
const ACCEPTED_FILE_SIZE_MB = CVFormat.acceptSize / 1024 / 1024;

const AttachCV = (props) => {
  const { user } = useApp();
  const { setProfile, profile } = useAttachedDocument();
  const { acceptTypes, acceptSize } = CVFormat;
  const defaultUserValues = { ...user };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentDoc, setCurrentDoc] = useState({
    file: null,
    url: ''
  });

  const { control } = useForm<User>({
    defaultValues: defaultUserValues
  });

  useEffect(() => {
    handleGetFile();
  }, [profile]);

  const handleGetFile = async () => {
    const fileUrl = await getFileByUrl(profile?.CV).catch(() => '');
    setCurrentDoc({ url: fileUrl, file: null });
  };

  const handleUploadFile = async (e) => {
    setError(false);
    setLoading(true);
    const file = e.target.files[0];
    if (file && acceptTypes.includes(file.type) && file.size <= acceptSize) {
      const fileUrl = await uploadFile(file);
      setCurrentDoc({ url: fileUrl, file: file });
      setProfile({ CV: fileUrl });
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const handleDeleteFile = () => {
    setError(false);
    setLoading(true);
    removeFileByUrl(currentDoc.url);
    setCurrentDoc({ url: '', file: null });
    setProfile({ CV: '' });
    setLoading(false);
  };

  const openFile = () => {
    window.open(currentDoc.url, '_blank');
  };

  return (
    <Container id="cv">
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
              >
                <FormControl
                  element={<Input type="file" accept=".pdf" />}
                  control={control}
                  name="CV"
                  id="CV"
                  label="CV đính kèm"
                  onChange={handleUploadFile}
                />
                Tải file
              </Button>
            </label>
            {loading && <CircularProgress />}
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
                width="50%"
                onClick={openFile}
              >
                {currentDoc?.file?.name ||
                  ` CV cho vị trí công việc ${profile?.jobTitle || ''}`}
                {loading && <CircularProgress />}
              </Box>
              {error && applicationErrorText}
            </Box>
            <Box display="flex">
              <Button
                component="label"
                startIcon={<CloudUploadIcon />}
                variant="text"
                color="secondary"
              >
                <FormControl
                  element={<Input type="file" accept=".pdf" />}
                  control={control}
                  name="CV"
                  id="CV"
                  label="CV đính kèm"
                  onChange={handleUploadFile}
                />
                Tải file
              </Button>
              <Button
                component="label"
                onClick={handleDeleteFile}
                startIcon={<DoNotDisturbOnOutlinedIcon />}
                variant="text"
                color="secondary"
              >
                Xóa file
              </Button>
            </Box>
          </Box>
        )}
        <FileFormatInfo
          acceptTypes={ACCEPTED_FILE_TYPES}
          acceptSize_MB={ACCEPTED_FILE_SIZE_MB}
        />
      </Box>
    </Container>
  );
};

export default AttachCV;
