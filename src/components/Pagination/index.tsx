import { Pagination as Page } from '@mui/material';
import React from 'react';
import { handlePageChange as handleChange } from 'src/utils/pagination';

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
  disabled = false,
  sx = null,
  ...props
}) {
  return (
    <Page
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => handleChange(page, handlePageChange)}
      color="secondary"
      variant="outlined"
      shape="rounded"
      size="large"
      sx={{ display: 'flex', justifyContent: 'center', ...sx }}
      disabled={disabled}
      {...props}
    />
  );
}
