import { Box, Grid, Typography } from '@mui/material';

import React from 'react';

const bodyText = {
  fontSize: 15,
  lineHeight: 2.5
};

const GeneralViewUI = (props) => {
  const { user, sx } = props;
  return (
    <Box sx={{ p: 3, ...sx }}>
      <Typography sx={bodyText}>
        <strong>Vị trí mong muốn:</strong> {user?.jobTitle}
      </Typography>
      <Typography sx={bodyText}>
        <strong>Nghề nghiệp: </strong>
        {Array.isArray(user?.profession)
          ? user?.profession?.map((item) => (
              <span key={item.value}>{item.label}, </span>
            ))
          : user?.profession}
      </Typography>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={bodyText}>
            <strong>Cấp bậc hiện tại:</strong> {user?.currentPosition}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={bodyText}>
            <strong>Cấp bậc mong muốn:</strong> {user?.desiredPosition}
          </Typography>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={bodyText}>
            <strong>Mức lương mong muốn:</strong>{' '}
            {user?.desiredSalary && `${user?.desiredSalary} triệu VNĐ`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={bodyText}>
            <strong>Trình độ học vấn:</strong> {user?.degree}
          </Typography>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={bodyText}>
            <strong>Kinh nghiệm làm việc:</strong> {user?.experience}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={bodyText}>
            <strong>Hình thức làm việc:</strong> {user?.employmentType}
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={bodyText}>
        <strong>Địa chỉ làm việc: </strong>
        {Array.isArray(user?.workAddress)
          ? user?.workAddress?.map((item) => (
              <span key={item.value}>{item.label}, </span>
            ))
          : user?.workAddress}
      </Typography>
      <Typography sx={bodyText}>
        <strong>Mục tiêu nghề nghiệp:</strong> {user?.careerGoal}
      </Typography>
      <Typography sx={bodyText}>
        <strong>Kỹ năng:</strong> {user?.skills}
      </Typography>
    </Box>
  );
};

export default GeneralViewUI;
