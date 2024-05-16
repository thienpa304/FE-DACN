import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Avatar,
  Button,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import {
  DocumentType,
  uploadFile,
  removeFileByUrl
} from 'src/common/firebaseService';
import { useApp } from 'src/modules/app/hooks';
import useQueryCompany from '../../hooks/useQueryCompany';
import {
  avatarFormat,
  coverImgFormat,
  defaultImage
} from 'src/constants/uploadFileRule';
import { avatarErrorText, coverErrorText } from 'src/components/UploadError';
import useMutateCompanyLogo from '../../hooks/useMutateCompanyLogo';
import useMutateCompanyBanner from '../../hooks/useMutateCompanyBanner';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { isMobile } from 'src/constants/reponsive';

const CoverImage = styled('img')({
  width: '100%',
  height: '280px',
  objectFit: 'cover'
});

const ImagePaper = styled(Paper)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const Input = styled('input')({
  display: 'none'
});

function CompanyCover() {
  const { user } = useApp();
  const { company, isLoading } = useQueryCompany();
  const { companyAvatarType, companyCoverType } = DocumentType;
  const { onSaveData } = useMutateCompanyLogo();
  const { onSaveData: onSaveBanner } = useMutateCompanyBanner();

  const defaultAvatar = {
    img: '',
    error: false
  };

  const [companyAvatar, setCompanyAvatar] = useState({
    ...defaultAvatar,
    img: defaultImage.companyAvatar
  });
  const [companyCover, setCompanyCover] = useState({
    ...defaultAvatar,
    img: defaultImage.companyCover
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const getImage = async () => {
    setCompanyAvatar({
      ...companyAvatar,
      img: company?.logo?.trim() ? company?.logo : defaultImage.companyAvatar
    });
    setCompanyCover({
      ...companyCover,
      img: company?.banner?.trim() ? company?.banner : defaultImage.companyCover
    });
  };

  const uploadImage = async (e, setImage, format, kind) => {
    const initial = kind === 'cover' ? companyCover : companyAvatar;
    const image = e.target.files[0];
    if (!image) return;

    const acceptTypes = format.acceptTypes;
    const acceptSize = format.acceptSize;

    if (!acceptTypes.includes(image.type) || image.size > acceptSize) {
      setImage({ ...initial, error: true });
      return;
    }

    const imageUrl = URL.createObjectURL(image);
    // const documentType =
    //   kind === 'avatar' ? companyAvatarType : companyCoverType;

    // const logoUrl = await UploadFileByUserId(user?.userId, image, documentType); // old
    const url = await uploadFile(image).catch(() => ''); // new

    if (kind === 'avatar') {
      onSaveData({ logo: url });
    } else {
      onSaveBanner({ banner: url });
    }
    setImage({ img: imageUrl, error: false });
  };

  const removeImage = async (e, setImage, kind) => {
    const initial = kind === 'cover' ? companyCover : companyAvatar;
    const defaultImg =
      kind === 'cover' ? defaultImage.companyCover : defaultImage.companyAvatar;
    const documentType =
      kind === 'avatar' ? companyAvatarType : companyCoverType;

    if (kind === 'avatar') {
      await removeFileByUrl(company?.logo).then(() =>
        onSaveData({ logo: ' ' })
      );
    } else {
      await removeFileByUrl(company?.banner).then(() =>
        onSaveBanner({ banner: ' ' })
      );
    }
    setImage({ ...initial, img: defaultImg, error: false });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getImage();
  }, [user, company]);

  const renderCoverImage = () => (
    <ImagePaper elevation={12}>
      <CoverImage src={companyCover.img} alt="cover" />
      <Button
        color="primary"
        variant="contained"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1,
          opacity: 0.8
        }}
        onClick={handleClick}
      >
        Chỉnh sửa ảnh bìa
      </Button>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        elevation={24}
      >
        <MenuItem sx={{ fontWeight: 700 }}>
          <label htmlFor="cover">Tải ảnh mới</label>
          <Input
            id="cover"
            type="file"
            accept="image/*"
            onChange={(e) => {
              uploadImage(e, setCompanyCover, coverImgFormat, 'cover');
              handleClose();
            }}
          />
        </MenuItem>
        {companyCover.img !== defaultImage.companyCover && (
          <MenuItem
            sx={{ fontWeight: 700 }}
            onClick={(e) => {
              removeImage(e, setCompanyCover, 'cover');
              handleClose();
            }}
          >
            Gỡ
          </MenuItem>
        )}
      </Menu>
    </ImagePaper>
  );

  const renderAvatar = () => (
    <Box display="flex" flexDirection="column" alignItems="center">
      <IconButton component="label" sx={{ borderRadius: 10, mt: -5 }}>
        <Avatar
          src={companyAvatar.img}
          sx={{
            width: 120,
            height: 120,
            bgcolor: '#fff',
            border: 2,
            borderColor: 'grey.300'
          }}
        />
        <Input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={(e) =>
            uploadImage(e, setCompanyAvatar, avatarFormat, 'avatar')
          }
        />
      </IconButton>
      {companyAvatar.img !== defaultImage.companyAvatar && (
        <Button
          component="label"
          onClick={(e) => {
            removeImage(e, setCompanyAvatar, 'avatar');
          }}
          size="small"
          startIcon={<DoNotDisturbOnOutlinedIcon />}
          variant="contained"
          color="primary"
          sx={{ mt: -2, opacity: 0.7 }}
        >
          Xóa
        </Button>
      )}
    </Box>
  );

  if (isLoading) return <SuspenseLoader />;
  return (
    <>
      {renderCoverImage()}
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          {renderAvatar()}
          <Typography variant={isMobile ? 'h4' : 'h3'}>
            {company?.companyName}
          </Typography>
        </Box>
        <Box>
          {companyCover.error && coverErrorText}
          {companyAvatar.error && avatarErrorText}
        </Box>
      </Container>
    </>
  );
}

export default CompanyCover;
