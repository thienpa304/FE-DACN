import { useParams, useLocation } from 'react-router';
import FormCreate from 'src/modules/jobs/components/FormCreate';

const JobEdit = () => {
  const { state } = useLocation();
  const locationState = state as any;

  return (
    <>
      <FormCreate
        title="Cập Nhât tin tuyển dụng"
        selectedId={locationState?.postId}
      />
    </>
  );
};

export default JobEdit;
