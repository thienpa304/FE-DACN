import { Pagination as Page } from '@mui/material';
import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange
}) {
  return (
    <Page
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => handlePageChange(page)}
      color="secondary"
      variant="outlined"
      shape="rounded"
      size="large"
      sx={{ display: 'flex', justifyContent: 'center' }}
    />
  );
}
