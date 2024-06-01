import { LazyLoadImage as ReactLazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImage = (props) => (
  <ReactLazyLoadImage
    alt={props.alt}
    effect="blur"
    src={props.src}
    height={props.height}
    width={props.width}
    srcSet={props.srcSet}
    placeholderSrc={props.placeholderSrc}
    visibleByDefault={props.visibleByDefault}
    style={{ backgroundColor: '#fff', ...props, ...props.sx, ...props.style }}
  />
);
export default LazyLoadImage;
