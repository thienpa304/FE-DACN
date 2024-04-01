import { Box, Container } from '@mui/material';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from './TabContent';
import { useParams } from 'react-router';
import useQueryJobById from 'src/modules/jobs/hooks/useQueryJobById';
import { useEffect } from 'react';
import useJob from 'src/modules/jobs/hooks/useJob';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';

const JobDetail = () => {
  const { setItemDetail, itemDetail } = useJob();
  const { id } = useParams();
  const { data } = useQueryJobById(id);

  useEffect(() => {
    setItemDetail(data);
  }, [data]);

  return (
    <Container sx={{ paddingY: 2 }}>
      <CardApply data={itemDetail} />
      <Box marginTop={2}>
        <TabContent />
      </Box>
      <CompanyInfoTab
        sx={{ mt: 2, borderRadius: 1 }}
        company={data?.employer}
      />
    </Container>
  );
};

export default JobDetail;
