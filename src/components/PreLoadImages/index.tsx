import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import professions from 'src/constants/professions';
import { defaultImage } from 'src/constants/uploadFileRule';
import { casouselImages } from 'src/pages/home/Casousel';

const professionImg = professions.map((item) => item.icon);
const casouselImg = casouselImages.map((item) => item.imgPath);
const logo =
  'https://thuvienvector.com/upload/images/items/vector-logo-truong-dai-hoc-bach-khoa-hcm-file-cdr-coreldraw-ai-217.webp';

const imagesToPreload = [
  // Add more image paths as needed
  ...casouselImg,
  defaultImage.companyAvatar,
  defaultImage.companyCover,
  logo,
  ...professionImg
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
      <link rel="dns-prefetch" href="//https://thuvienvector.com" />
      <link rel="dns-prefetch" href="//https://cdn-icons-png.flaticon.com" />
      <link rel="preconnect" href="https://console.firebase.google.com" />
    </Helmet>
  );
};

export default PreloadImages;
