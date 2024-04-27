import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, styled } from '@mui/material';
import ThemeProvider from '../theme/ThemeProvider';

function alertDialog({
  selectedId,
  handleConfirm,
  message = 'Bạn có chắc chắn muốn xóa?'
}: {
  selectedId: number | string;
  handleConfirm: (id: number | string, ...args: any[]) => void;
  message?: any;
}) {
  const domNode = document.createElement('div'); // Tạo một thẻ div mới cho Portal
  const root = createRoot(domNode);
  document.body.appendChild(domNode);

  const handleClose = () => {
    root.unmount();
  };

  root.render(
    <ThemeProvider>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle
          minHeight={80}
          minWidth={400}
          maxWidth={550}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize={18} fontWeight={700}>
            {message}
          </Typography>
        </DialogTitle>
        <DialogActions style={{ padding: 16, gap: 16 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            fullWidth
            color="secondary"
          >
            Hủy
          </Button>
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
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default alertDialog;
