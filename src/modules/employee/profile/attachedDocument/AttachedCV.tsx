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
import useQueryAttachedDocument from './hooks/useQueryAttachedDocument';
import { User } from '../../../users/model';
import { useApp } from 'src/modules/app/hooks';
import {
  GetFileByUserId,
  UploadFileByUserId,
  RemoveFileByUserId,
  DocumentType
} from 'src/common/firebaseService';
import { CVFormat } from 'src/constants/uploadFileRule';

const Input = styled('input')({
  display: 'none'
});

const AttachCV = (props) => {
  console.log('CV');
  const { user } = useApp();
  const { attachedDocument } = useQueryAttachedDocument();
  const { cvType } = DocumentType;
  const { acceptTypes, acceptSize } = CVFormat;
  const defaultUserValues = { ...user };

  const [currentFile, setCurrentFile] = useState(null);
  const [currentFileUrl, setCurrentFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { control, handleSubmit } = useForm<User>({
    defaultValues: defaultUserValues
  });

  useEffect(() => {
    handleGetFile();
  }, [user]);

  const handleGetFile = async () => {
    const fileUrl = await GetFileByUserId(user.userId, cvType).catch(() => '');
    setCurrentFile(fileUrl);
    setCurrentFileUrl(fileUrl);
  };

  const handleUploadFile = async (e) => {
    setError(false);
    setLoading(true);
    const file = e.target.files[0];
    if (file && acceptTypes.includes(file.type) && file.size <= acceptSize) {
      const fileUrl = URL.createObjectURL(file);
      setCurrentFile(file);
      setCurrentFileUrl(fileUrl);
      await UploadFileByUserId(user.userId, file, cvType);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const handleDeleteFile = () => {
    setError(false);
    setLoading(true);
    RemoveFileByUserId(user.userId, cvType);
    setCurrentFile(null);
    setCurrentFileUrl(null);
    setLoading(false);
  };

  const openFile = () => {
    window.open(currentFileUrl, '_blank');
  };

  const displayError = () => (
    <Typography color="error" my={1}>
      File tải lên không hợp lệ. File phải có định dạng{' '}
      <strong>{acceptTypes.join(', ').replace(/application\//g, '.')}</strong>{' '}
      và dung lượng <strong>{` <= ${acceptSize / 1024 / 1024}MB`}</strong>
    </Typography>
  );

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
        {!currentFile && (
          <Box>
            <Typography mb={2} color="grey.700">
              <em>* Vui lòng gửi lên CV xin việc của bạn !</em>
            </Typography>
            {error && displayError()}
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
          </Box>
        )}

        {currentFile && (
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
                {currentFile?.name ||
                  ` CV cho vị trí: ${attachedDocument?.jobTitle || ''}`}
                {loading && <CircularProgress />}
              </Box>
              {error && displayError()}
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
        <Typography fontSize={13} color="grey.600" mt={1}>
          Định dạng file {acceptTypes.join(', ').replace(/application\//g, '.')}{' '}
          và dung lượng {` <= ${acceptSize / 1024 / 1024} MB`}
        </Typography>
      </Box>
    </Container>
  );
};

export default AttachCV;
