import { Box } from '@mui/material';
import { useEffect } from 'react';

const PreloadImages = ({ sources }) => {
  useEffect(() => {
    sources.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [sources]);
  return null;
};

export default PreloadImages;
