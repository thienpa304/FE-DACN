import { Container } from '@mui/material';
import useQueryOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useQueryOnlineProfile';
import useQueryAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useQueryAttachedDocument';
import AnalyzeProfile from './AnalyzeProfile';
import SuspenseLoader from 'src/components/SuspenseLoader';

const JobRecommend = () => {
  const { isLoading: isLoadingOnline } = useQueryOnlineProfile();
  const { isLoading: isLoadingDocument } = useQueryAttachedDocument();

  if (isLoadingOnline || isLoadingDocument) return <SuspenseLoader />;
  return (
    <Container maxWidth="md" style={{ marginTop: 30 }}>
      <AnalyzeProfile id="online" />
      <AnalyzeProfile id="document" />
      <AnalyzeProfile id="upload-cv" />
    </Container>
  );
};

export default JobRecommend;
