import { useParams } from 'react-router';
import FormCreate from 'src/modules/jobs/components/FormCreate';

const JobEdit = () => {
  const { id } = useParams();
  return (
    <>
      <FormCreate title="Cập Nhât tin tuyển dụng" selectedId={id} />
    </>
  );
};

export default JobEdit;
