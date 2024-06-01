import { Helmet } from 'react-helmet-async';

const PreloadImages = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://www.flaticon.com" />
      <link rel="preconnect" href="https://console.firebase.google.com" />
    </Helmet>
  );
};

export default PreloadImages;
