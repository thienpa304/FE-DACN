import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
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
  GetFileByUserId,
  UploadFileByUserId,
  RemoveFileByUserId,
  DocumentType
} from 'src/common/firebaseService';
import { useApp } from 'src/modules/app/hooks';
import useQueryCompany from '../../hooks/useQueryCompany';
import {
  avatarFormat,
  coverImgFormat,
  defaultImage
} from 'src/constants/uploadFileRule';

const useStyles = makeStyles((theme) => ({
  coverImage: {
    width: '100%',
    height: '280px',
    objectFit: 'cover'
  },
  paper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Input = styled('input')({
  display: 'none'
});

function ErrorMessage({ objectName, errorObject, format }) {
  if (errorObject.error) {
    return (
      <Typography color="error" mt={1} fontSize={12}>
        <strong>{objectName}</strong> phải có định dạng
        <strong>
          {format.acceptTypes.join(', ').replace(/image\//g, '.')}
        </strong>
        , và dung lượng
        <strong>{` <= ${format.acceptSize / 1024 / 1024}MB`}</strong>
      </Typography>
    );
  }
  return null;
}

function CompanyCover() {
  const classes = useStyles();
  const { user } = useApp();
  const { company } = useQueryCompany();
  const { companyAvatarType, companyCoverType } = DocumentType;

  const defaultAvatar = {
    img: '',
    error: false,
    imageFile: null
  };

  const [companyAvatar, setCompanyAvatar] = useState(defaultAvatar);
  const [companyCover, setCompanyCover] = useState(defaultAvatar);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const getImage = async () => {
    const getUserId = user?.userId;
    const [avatarUrl, coverUrl] = await Promise.all([
      GetFileByUserId(getUserId, companyAvatarType).catch(
        () => defaultImage.companyAvatar
      ),
      GetFileByUserId(getUserId, companyCoverType).catch(
        () => defaultImage.companyCover
      )
    ]);
    setCompanyAvatar({ ...companyAvatar, img: avatarUrl });
    setCompanyCover({ ...companyCover, img: coverUrl });
  };

  const uploadImage = (e, setImage, format, kind) => {
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
    const documentType =
      kind === 'avatar' ? companyAvatarType : companyCoverType;
    UploadFileByUserId(user?.userId, image, documentType);
    setImage({ ...initial, img: imageUrl, error: false });
  };

  const removeImage = (e, setImage, kind) => {
    const initial = kind === 'cover' ? companyCover : companyAvatar;
    const defaultImg =
      kind === 'cover' ? defaultImage.companyCover : defaultImage.companyAvatar;
    const documentType =
      kind === 'avatar' ? companyAvatarType : companyCoverType;
    RemoveFileByUserId(user?.userId, documentType);
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
  }, [user]);

  const renderCoverImage = () => (
    <Paper className={classes.paper} elevation={12}>
      <img src={companyCover.img} alt="cover" className={classes.coverImage} />
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
    </Paper>
  );

  const renderAvatar = () => (
    <Box display="flex" flexDirection="column" alignItems="center">
      <IconButton component="label" sx={{ borderRadius: 10, mt: -5 }}>
        <Avatar
          src={companyAvatar.img}
          sx={{
            width: 120,
            height: 120,
            bgcolor: '#a0b9cfc2',
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

  return (
    <>
      {renderCoverImage()}
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          {renderAvatar()}
          <Typography variant="h3">{company?.companyName}</Typography>
        </Box>
        <Box>
          <ErrorMessage
            objectName={'Ảnh bìa'}
            errorObject={companyCover}
            format={coverImgFormat}
          />
          <ErrorMessage
            objectName={'Ảnh đại diện'}
            errorObject={companyAvatar}
            format={avatarFormat}
          />
        </Box>
      </Container>
    </>
  );
}

export default CompanyCover;
