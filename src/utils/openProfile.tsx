import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {
  DialogContent,
  Divider,
  IconButton,
  Typography,
  styled
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ViewCV from 'src/pages/view-candidate-profile/ViewCV';
import ThemeProvider from '../theme/ThemeProvider';
import { isMobile } from 'src/constants/responsiveSize';

function openProfile({ profile }) {
  const domNode = document.createElement('div');
  const root = createRoot(domNode);
  document.body.appendChild(domNode);

  const handleClose = () => {
    root.unmount();
  };

  root.render(
    <ThemeProvider>
      <Dialog open={true} fullWidth maxWidth="md" fullScreen={isMobile}>
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '1.3rem'
          }}
        >
          Hồ sơ người dùng
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 14,
              top: 14,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider
          sx={{
            bgcolor: '#B6FFFA',
            height: 2
          }}
        />
        <DialogContent>
          <ViewCV user={profile} bgcolor="none" showTitle={false} />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default openProfile;
