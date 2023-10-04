import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { Avatar, Box, Grid, IconButton, styled } from '@mui/material';

import React, { useState } from 'react';
import { UploadService } from 'src/common/upload-image';
const Input = styled('input')({
  display: 'none'
});

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);
const AvatarUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    UploadService(file);
  };
  return (
    <Grid
      container
      justifyContent={'center'}
      alignContent={'center'}
      height={'100%'}
    >
      <Box position={'relative'}>
        <Avatar
          variant="rounded"
          src={selectedImage}
          sx={{ width: 150, height: 150 }}
        />
        <ButtonUploadWrapper>
          <Input
            accept="image/*"
            id="icon-button-file"
            name="icon-button-file"
            type="file"
            onChange={handleChangeImage}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" color="primary">
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </ButtonUploadWrapper>
      </Box>
    </Grid>
  );
};

export default AvatarUpload;
