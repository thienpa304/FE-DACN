import CustomContainer from 'src/components/CustomContainer';
import JobContent from 'src/modules/jobs/components/JobContent';
import useJob from 'src/modules/jobs/hooks/useJob';

function TabContent() {
  const { itemDetail } = useJob(); 
  return (
    <CustomContainer sx={{ py: 3, mb: 2 }}>
      <JobContent data={itemDetail} />
    </CustomContainer>
  );
}

export default TabContent;
