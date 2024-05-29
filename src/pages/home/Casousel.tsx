import React from 'react';
import { Paper, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

export const casouselImages = [
  {
    imgPath: 'https://cdn.syncfusion.com/content/images/Careers/career-logo.png'
  },
  {
    imgPath:
      'https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2023%2F11%2F16%2FBanner-ThucTapSinh-Test-PC_170013022585.jpg&w=1920&q=75'
  },
  {
    imgPath: 'https://www.excelsecu.com.cn/upload/2015112117335170.jpg'
  },
  {
    imgPath:
      'https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/recruiter-using-social-strategy.jpg'
  }
];

function Casousel() {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Paper elevation={12}>
      <AutoPlaySwipeableViews interval={4000}>
        {casouselImages.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 3 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '230px',
                  objectFit: 'cover'
                }}
                src={step.imgPath}
                loading={index !== 0 ? 'lazy' : 'eager'}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Paper>
  );
}

export default Casousel;
