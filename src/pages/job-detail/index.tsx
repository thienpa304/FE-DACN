import { Box, Container } from '@mui/material';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from './TabContent';
import { useLocation, useParams } from 'react-router';
import useQueryJobById from 'src/modules/jobs/hooks/useQueryJobById';
import { useEffect } from 'react';
import useJob from 'src/modules/jobs/hooks/useJob';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';

const JobDetail = () => {
  const { setItemDetail, itemDetail } = useJob();
  const { state } = useLocation();
  const locationState = state as any;
  const { data } = useQueryJobById(locationState.postId);

  useEffect(() => {
    setItemDetail(data);
  }, [data]);

  return (
    <Container sx={{ paddingY: 2 }}>
      <CardApply data={itemDetail} />
      <TabContent />
      <CompanyInfoTab sx={{ mt: 2 }} company={data?.employer} />
    </Container>
  );
};

export default JobDetail;
