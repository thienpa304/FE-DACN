import {
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  styled,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import professions from 'src/constants/professions';
import Link from 'src/components/Link';
import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';
import { rewriteUrl } from 'src/utils/rewriteUrl';

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
        {professionToShow?.map((profession, index) => (
          <Link
            key={profession?.code}
            to={`/profession/${rewriteUrl(profession?.name)}`}
            state={{ profession: profession?.name, pageTitle: profession.name }}
            sx={{
              flexBasis: '33%',
              padding: '10px',
              fontSize: 14,
              justifyContent: 'left',
              color: 'black'
            }}
          >
            {profession.name} ({profession.count})
          </Link>
        ))}
      </DialogContent>
    </BootstrapDialog>
  );
}

export default ProfessionListDialog;
