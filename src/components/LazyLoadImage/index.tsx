import { styled } from '@mui/material';
import { LazyLoadImage as ReactLazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// const LazyLoadImage = styled(ReactLazyLoadImage)({
//   effect: 'blur',
//   height: '800',
//   width: '1200'
// });
const LazyLoadImage = (props) => (
  <ReactLazyLoadImage
    alt={props.alt}
    effect="blur"
    src={props.src}
    height={props.height}
    width={props.width}
    style={{ backgroundColor: '#fff', ...props, ...props.sx }}
  />
);
export default LazyLoadImage;
