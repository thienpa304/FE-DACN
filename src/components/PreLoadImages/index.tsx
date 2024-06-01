import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { casouselImages } from 'src/pages/home/Casousel';

// const professionImg = professions.map((item) => item.icon);
const casouselImg = casouselImages.map((item) => item.lg);
const logo = '/static/images/logo/web-logo.png';

const imagesToPreload = [
  // Add more image paths as needed
  ...casouselImg,
  logo
];

const PreloadImages = () => {
  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [imagesToPreload]);
  return (
    <Helmet>
      <link rel="preconnect" href="https://www.flaticon.com" />
      <link rel="preconnect" href="https://console.firebase.google.com" />
    </Helmet>
  );
};

export default PreloadImages;
