import React, { useState, useEffect } from 'react';
import { Button, Typography, ButtonProps } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

export default function EditButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      variant="outlined"
      color="secondary"
      startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
      sx={{ borderRadius: 5 }}
    >
      <Typography textTransform="none">Chỉnh sửa</Typography>
    </Button>
  );
}
