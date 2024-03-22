import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';

const bodyText = {
  fontSize: 15
};

const PersonalViewUI = ({ user }) => {
  return (
    <Grid container mb={4} spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography sx={bodyText}>
          <strong>Họ và tên:</strong> {user.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={bodyText}>
          <strong>Email:</strong> {user.email}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={bodyText}>
          <strong>Điện thoại:</strong> {user.phone}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={bodyText}>
          <strong>Ngày sinh:</strong>{' '}
          {dayjs(user.dob, 'DD-MM-YYYY').isValid()
            ? dayjs(user.dob, 'DD-MM-YYYY').format('DD/MM/YYYY')
            : ''}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={bodyText}>
          <strong>Giới tính:</strong> {user.sex}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={bodyText}>
          <strong>Tình trạng hôn nhân:</strong>{' '}
          {user.isMarried ? 'Đã kết hôn' : 'Độc thân'}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={bodyText}>
          <strong>Địa chỉ:</strong> {user.address}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PersonalViewUI;
