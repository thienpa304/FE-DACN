import { Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import LazyLoadImage from 'src/components/LazyLoadImage';
import { useResponsive } from 'src/utils/responsive';

export const casouselImages = [
  {
    lg: '/static/images/placeholders/casousel/casousel-1.png',
    md: '/static/images/placeholders/casousel/casousel-1-md.png',
    sm: '/static/images/placeholders/casousel/casousel-1-sm.png'
  },
  {
    lg: '/static/images/placeholders/casousel/casousel-2.jpg',
    md: '/static/images/placeholders/casousel/casousel-2-md.jpg',
    sm: '/static/images/placeholders/casousel/casousel-2-sm.jpg'
  },
  {
    lg: '/static/images/placeholders/casousel/casousel-3.jpg',
    md: '/static/images/placeholders/casousel/casousel-3-md.jpg',
    sm: '/static/images/placeholders/casousel/casousel-3-sm.jpg'
  },
  {
    lg: '/static/images/placeholders/casousel/casousel-4.jpg',
    md: '/static/images/placeholders/casousel/casousel-4-md.jpg',
    sm: '/static/images/placeholders/casousel/casousel-4-sm.jpg'
  }
];

function Casousel() {
  const { isMobile, isTablet } = useResponsive();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  return (
    <Box>
      <AutoPlaySwipeableViews interval={4000}>
        {casouselImages.map((step, index) => (
          <Box key={index}>
            {index <= casouselImages.length ? (
              <LazyLoadImage
                width="100%"
                height={isMobile ? '120px' : isTablet ? '180px' : '230px'}
                objectFit="cover"
                src={step.lg}
                srcSet={`
                  ${step.lg} 1024w,
                  ${step.md} 768w,
                  ${step.sm} 480w
                `}
                visibleByDefault={index === 0}
                delayTime={index === 0 ? 0 : 300}
                style={{ borderRadius: '0.5rem' }}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Casousel;
