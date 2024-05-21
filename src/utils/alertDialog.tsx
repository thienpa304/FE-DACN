import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {
  DialogContent,
  DialogContentText,
  Typography,
  styled
} from '@mui/material';
import ThemeProvider from '../theme/ThemeProvider';
import { isMobile } from 'src/constants/reponsive';

function alertDialog({
  selectedId,
  handleConfirm,
  message = 'Bạn có chắc chắn muốn xóa?',
  hideCancelButton = false
}: {
  selectedId: number | string;
  handleConfirm: (id: number | string, ...args: any[]) => void;
  message?: any;
  hideCancelButton?: boolean;
}) {
  const domNode = document.createElement('div'); // Tạo một thẻ div mới cho Portal
  const root = createRoot(domNode);
  document.body.appendChild(domNode);

  const handleClose = () => {
    root.unmount();
  };

  root.render(
    <ThemeProvider>
      <Dialog
        open={true}
        onClose={handleClose}
        maxWidth={isMobile ? 'lg' : 'sm'}
        fullWidth
      >
        <DialogTitle
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: { xs: '100%' } }}
        >
          <Typography
            sx={{ fontSize: { sm: 18, xs: 16 }, textAlign: 'center' }}
            fontWeight={700}
          >
            Thông báo
          </Typography>
        </DialogTitle>
        <DialogContent
          // display="flex"
          // justifyContent="center"
          // alignItems="center"
          sx={{ width: { xs: '100%' } }}
        >
          <DialogContentText
            sx={{ fontSize: { sm: 16, xs: 14 }, textAlign: 'center' }}
            fontWeight={700}
          >
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            gap: 1
          }}
        >
          <Button
            onClick={() => {
              handleConfirm(selectedId);
              handleClose();
            }}
            variant="contained"
            fullWidth
            color="primary"
          >
            Xác nhận
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            fullWidth
            color="secondary"
            sx={{ display: hideCancelButton && 'none' }}
            style={{ margin: 0 }}
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default alertDialog;
