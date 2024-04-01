import {
  Link,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  styled,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import professions from 'src/constants/professions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

function ProfessionListDialog(props) {
  const { open, handleClose } = props;
  const professionToShow = [...professions];
  professionToShow.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <BootstrapDialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
      <DialogTitle
        sx={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem' }}
      >
        Danh sách tất cả nghề nghiệp
      </DialogTitle>
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
      <Divider
        sx={{
          bgcolor: '#B6FFFA',
          height: 2
        }}
      />
      <DialogContent sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {professions.map((profession, index) => (
          <Link
            key={profession?.code}
            href={`/profession/${profession?.code}`}
            sx={{
              flexBasis: '33%',
              padding: 1.5,
              color: '#000',
              justifyContent: 'left',
              '&:hover': {
                color: '#FF7D55'
              }
            }}
          >
            {profession.name}
          </Link>
        ))}
      </DialogContent>
    </BootstrapDialog>
  );
}

export default ProfessionListDialog;
