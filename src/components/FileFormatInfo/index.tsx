import React from 'react';
import { Typography } from '@mui/material';

const FileFormatInfo = ({ acceptTypes, acceptSize_MB }) => (
  <Typography fontSize={13} color="grey.600" mt={1}>
    Định dạng file {acceptTypes.join(', ').replace(/application\//g, '.')} và
    dung lượng {` <= ${acceptSize_MB} MB`}
  </Typography>
);

export default FileFormatInfo;
