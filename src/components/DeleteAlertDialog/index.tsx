import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteAlertDialog({
  open,
  selectedId,
  handleConfirmDelete,
  onClose
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        height={80}
        width={450}
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="h4"
      >
        Bạn có chắc chắn muốn xóa?
      </DialogTitle>
      <DialogActions style={{ padding: 16, gap: 16 }}>
        <Button
          onClick={onClose}
          color="secondary"
          variant="outlined"
          fullWidth
        >
          Hủy
        </Button>
        <Button
          onClick={() => handleConfirmDelete(selectedId)}
          color="primary"
          variant="contained"
          fullWidth
        >
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
}
