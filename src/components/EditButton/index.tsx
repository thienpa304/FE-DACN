import React, { useState, useEffect } from 'react';
import { Button, Typography, ButtonProps } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { useResponsive } from 'src/utils/responsive';

export default function EditButton(props: ButtonProps) {
  const { isMobile } = useResponsive();
  return (
    <Button
      {...props}
      variant="outlined"
      color="secondary"
      // startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
      sx={{ display: 'flex', borderRadius: { xs: 1, md: 5 } }}
      size={isMobile ? 'small' : 'medium'}
    >
      <AutoFixHighOutlinedIcon fontSize="small" />
      <Typography textTransform="none" display={isMobile && 'none'}>
        Chỉnh sửa
      </Typography>
    </Button>
  );
}
