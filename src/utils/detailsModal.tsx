import { createRoot } from 'react-dom/client';
import Dialog from '@mui/material/Dialog';
import { Box, DialogContent, Modal, Typography, styled } from '@mui/material';
import ThemeProvider from '../theme/ThemeProvider';
import { TypographyEllipsis } from 'src/components/Typography';

function detailsModal(data) {
  const domNode = document.createElement('div'); // Tạo một thẻ div mới cho Portal
  const root = createRoot(domNode);
  document.body.appendChild(domNode);

  const handleClose = () => {
    root.unmount();
  };
  console.log(data);

  root.render(
    <ThemeProvider>
      <Dialog open={true} onClose={handleClose}>
        <DialogContent>
          {Object.keys(data).map((key, index) => (
            <Box key={index}>
              <TypographyEllipsis sx={{ WebkitLineClamp: 3, mb: 2 }}>
                <b>{key}: </b>
                {data[key]}
              </TypographyEllipsis>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default detailsModal;
