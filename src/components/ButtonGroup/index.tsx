import { Box, Button } from '@mui/material';

export default function ButtonGroup(props) {
  const { handleSubmit, handleCancel } = props;
  return (
    <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
      <Button
        onClick={handleCancel}
        variant="outlined"
        color="secondary"
        sx={{ width: 120 }}
      >
        Hủy
      </Button>
      <Button
        color="success"
        onClick={handleSubmit}
        variant="contained"
        sx={{ width: 120 }}
      >
        Xác nhận
      </Button>
    </Box>
  );
}
