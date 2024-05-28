import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton
} from '@mui/material';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from '../view-job-detail/TabContent';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';
import CloseIcon from '@mui/icons-material/Close';
import { isMobile } from 'src/constants/reponsive';

export default function ViewJobDialog({ data, postId, setSelectedId }) {
  return (
    <Dialog
      open={Boolean(postId)}
      onClose={() => {
        setSelectedId(null);
      }}
      fullWidth
      maxWidth="lg"
      fullScreen={isMobile}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.3rem'
        }}
      >
        Việc làm ứng tuyển
        <IconButton
          aria-label="close"
          onClick={() => setSelectedId(null)}
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
        <Container sx={{ paddingY: 2 }}>
          <CardApply data={data} />
          <TabContent />
          <CompanyInfoTab sx={{ mt: 2 }} company={data?.employer} />
        </Container>
      </DialogContent>
    </Dialog>
  );
}
