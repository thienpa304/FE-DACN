import React, { useEffect, useState } from 'react';
import useChangePassword from 'src/modules/auth/hooks/useChangePassword';
import CustomContainer from 'src/components/CustomContainer';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography
} from '@mui/material';
import { isMobile } from 'src/constants/reponsive';
import { useApp } from 'src/modules/app/hooks';
import FormControl from 'src/components/FormControl';
import EditButton from 'src/components/EditButton';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { useForm } from 'react-hook-form';
import ButtonGroup from 'src/components/ButtonGroup';

export default function ManageAccount() {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const { onChangePassword, isSuccess, isLoading } = useChangePassword();
  const { user } = useApp();
  const handleChangePassword = (data) => {
    onChangePassword(data);
  };
  useEffect(() => {
    if (isSuccess) {
      reset();
      setOpen(false);
    }
  }, [isSuccess]);
  return (
    <CustomContainer sx={{ p: 4 }}>
      <Typography
        fontWeight={700}
        lineHeight={2}
        sx={{ fontSize: { md: 22, xs: 18 } }}
      >
        Quản lý tài khoản
      </Typography>
      <Divider />
      <Typography mt={2}>
        <b>Email đăng nhập: </b>
        {user.email}
      </Typography>
      <Button
        startIcon={<AutoFixHighOutlinedIcon fontSize="small" />}
        color="secondary"
        onClick={() => setOpen(true)}
        size="small"
        sx={{ mt: 2 }}
      >
        Thay đổi mật khẩu
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { md: '1.3rem', xs: '1rem' }
          }}
        >
          Thay đổi mật khẩu
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FormControl
            element={<TextField />}
            name="password"
            label="Mật khẩu hiện tại"
            required
            type="password"
            control={control}
          />
          <FormControl
            element={<TextField />}
            name="newPassword"
            label="Mật khẩu mới"
            required
            type="password"
            control={control}
          />
          <FormControl
            element={<TextField />}
            name="confirmNewPassword"
            label="Xác nhận mật khẩu mới"
            required
            type="password"
            control={control}
          />
        </DialogContent>
        <DialogActions>
          <ButtonGroup
            handleCancel={() => setOpen(false)}
            handleSubmit={handleSubmit(handleChangePassword)}
          />
        </DialogActions>
      </Dialog>
    </CustomContainer>
  );
}
