import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { toOutputDateString } from 'src/utils/inputOutputFormat';

const bodyText = {
  fontSize: 15,
  lineHeight: 2.5
};

const PersonalViewUI = (props) => {
  const { user } = props;
  return (
    <Grid container mb={4} columnSpacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography sx={[bodyText]}>
          <strong>Họ và tên:</strong> {user?.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={[bodyText]}>
          <strong>Email:</strong> {user?.email}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={[bodyText]}>
          <strong>Điện thoại:</strong> {user?.phone}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={[bodyText]}>
          <strong>Ngày sinh:</strong>{' '}
          {toOutputDateString(user?.dob, 'DD-MM-YYYY')
            ? toOutputDateString(user?.dob, 'DD-MM-YYYY')
            : toOutputDateString(user?.dob, 'YYYY-MM-DD')}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={[bodyText]}>
          <strong>Giới tính:</strong> {user?.sex}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={[bodyText]}>
          <strong>Tình trạng hôn nhân:</strong>{' '}
          {user?.isMarried ? 'Đã kết hôn' : 'Độc thân'}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={[bodyText]}>
          <strong>Địa chỉ:</strong> {user?.address}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PersonalViewUI;
