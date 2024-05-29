import { Container } from '@mui/material';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from './TabContent';
import useQueryJobById from 'src/modules/jobs/hooks/useQueryJobById';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';
import { useSearchParams } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';

const JobDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = atob(searchParams.get('id'));
  const { data, isLoading } = useQueryJobById(postId);
  if (isLoading) return <SuspenseLoader />;
  return (
    <Container sx={{ paddingY: 2 }}>
      <CardApply data={data} />
      <TabContent />
      <CompanyInfoTab sx={{ mt: 2 }} company={data?.employer} />
    </Container>
  );
};

export default JobDetail;
