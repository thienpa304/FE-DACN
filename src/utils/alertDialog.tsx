import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, styled } from '@mui/material';

const Text = styled(Typography)(({ theme }) => ({
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  textAlign: 'center',
  fontWeight: 700
}));

function alertDialog({ selectedId, handleConfirmDelete }) {
  const domNode = document.createElement('div'); // Tạo một thẻ div mới cho Portal
  const root = createRoot(domNode);
  document.body.appendChild(domNode);

  const handleClose = () => {
    root.unmount();
    // onClose();
  };

  root.render(
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle
        height={80}
        width={450}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={18}>Bạn có chắc chắn muốn xóa?</Text>
      </DialogTitle>
      <DialogActions style={{ padding: 16, gap: 16 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          fullWidth
          sx={{ color: '#767ca3', height: 40 }}
        >
          <Text fontSize={13}>Hủy</Text>
        </Button>
        <Button
          onClick={() => {
            handleConfirmDelete(selectedId);
            handleClose();
          }}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#fea410',
            color: '#000',
            height: 40,
            ':hover': {
              backgroundColor: '#cb830c'
            }
          }}
        >
          <Text fontSize={13}>Xác nhận</Text>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default alertDialog;
