import React, { useState, useEffect } from 'react';
import { Button, Typography, ButtonProps } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { isMobile } from 'src/constants/reponsive';

export default function EditButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      variant="outlined"
      color="secondary"
      startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
      sx={{ borderRadius: { xs: 1, md: 5 } }}
      size={isMobile ? 'small' : 'medium'}
    >
      <Typography textTransform="none" display={isMobile && 'none'}>
        Chỉnh sửa
      </Typography>
    </Button>
  );
}
