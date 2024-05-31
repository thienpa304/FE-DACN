import { useSearchParams } from 'react-router-dom';
import FormCreate from 'src/modules/jobs/components/FormCreate';

const JobEdit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = atob(searchParams.get('id'));
  return <FormCreate title="Cập Nhât tin tuyển dụng" selectedId={selectedId} />;
};

export default JobEdit;
