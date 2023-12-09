import { Box, Container } from '@mui/material';
import CardApply from 'src/modules/jobs/components/CardApply';
import TabContent from './TabContent';
import { useParams } from 'react-router';
import useQueryJobById from 'src/modules/jobs/hooks/useQueryJobById';
import { useEffect } from 'react';
import useJob from 'src/modules/jobs/hooks/useJob';

const JobDetail = () => {
  const { setItemDetail, itemDetail } = useJob();
  const { id } = useParams();
  const { data } = useQueryJobById(id);

  useEffect(() => {
    setItemDetail(data);
  }, [data]);

  return (
    <Container sx={{ paddingY: 2 }}>
      {/* <Box margin={1} paddingBottom={2}> */}
      <CardApply data={itemDetail} />
      <Box marginTop={2}>
        <TabContent />
      </Box>
      {/* </Box> */}
    </Container>
  );
};

export default JobDetail;
