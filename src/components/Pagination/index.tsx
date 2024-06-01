import { Pagination as Page } from '@mui/material';
import React from 'react';
import { isMobile } from 'src/constants/responsiveSize';
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
      onChange={(event, page) =>
        handleChange(page, handlePageChange, props.scrollToTop)
      }
      color="secondary"
      variant="outlined"
      shape="rounded"
      size={!isMobile ? 'large' : 'small'}
      sx={{ display: 'flex', justifyContent: 'center', my: 1, ...sx }}
      disabled={disabled}
      {...props}
    />
  );
}
