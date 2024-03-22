import { Pagination as Page } from '@mui/material';
import React from 'react';

export default function Pagination(props) {
  const { currentPage, totalPages, handlePageChange } = props;
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
