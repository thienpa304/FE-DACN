import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
    const { onDeleteById, id } = props;
    const [open, setOpen] = React.useState(true);

    const handleAggree = () => {
        onDeleteById(id)
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Bạn có chắc chắn muốn xóa
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Hủy</Button>
                <Button onClick={handleAggree} autoFocus>
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    );
}
