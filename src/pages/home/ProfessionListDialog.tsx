import {
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  styled,
  IconButton,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'src/components/Link';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

function ProfessionListDialog(props) {
  const { open, handleClose, professionList } = props;
  const professionToShow = [...professionList];
  professionToShow.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <BootstrapDialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: () => ({
            xs: '1rem',
            sm: '1.3rem'
          })
        }}
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
        <Grid container spacing={2}>
          {professionToShow?.map((profession, index) => (
            <Grid key={profession?.code} item xs={12} sm={6} md={4}>
              <Link
                to={`/profession?profession=${profession?.name}`}
                state={{
                  profession: profession?.name,
                  pageTitle: profession.name
                }}
                sx={{
                  color: 'black'
                }}
              >
                {profession.name} ({profession.count})
              </Link>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </BootstrapDialog>
  );
}

export default ProfessionListDialog;
