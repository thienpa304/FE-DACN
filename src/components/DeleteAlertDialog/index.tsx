import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function DeleteAlertDialog(props) {
  const { open, selectedId, handleConfirmDelete, onClose } = props;
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
        Bạn có chắc chắn muốn xóa dòng này?
      </DialogTitle>
      <DialogActions sx={{ p: 2, gap: 2 }}>
        <Button
          onClick={onClose}
          color="secondary"
          variant="outlined"
          fullWidth
        >
          Hủy
        </Button>
        <Button
          onClick={handleConfirmDelete(selectedId)}
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
