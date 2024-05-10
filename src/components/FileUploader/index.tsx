import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { User } from 'src/modules/users/model';

const Input = styled('input')({
  display: 'none'
});

const FileUploader = ({ isLoading, handleUploadFile }) => {
  const { control } = useForm<User>({});
  return (
    <Box>
      <Button
        component="label"
        startIcon={<CloudUploadIcon />}
        variant="outlined"
        color="secondary"
        disabled={isLoading}
      >
        <FormControl
          element={<Input type="file" accept=".pdf" />}
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
  );
};

export default FileUploader;
