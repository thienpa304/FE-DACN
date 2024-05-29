import { Box } from '@mui/material';

const PreloadImages = ({ sources }) => {
  return (
    <Box sx={{ display: 'none' }}>
      {sources.map((src, index) => (
        <link key={index} rel="preload" href={src} as="image" />
      ))}
    </Box>
  );
};

export default PreloadImages;
