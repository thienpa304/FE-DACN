import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { useNavigate } from 'react-router';
import { ApplicationService } from '../applicationService';
import { Application } from '../model';

const useMutateApplyJob = () => {
  const { toast } = useApp();
  const navigate = useNavigate();
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<Application>,
    AxiosError<ResponseData<Application>>,
    Application
  >(ApplicationService.create, {
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success({ massage: 'Ứng tuyển thành công' });
        navigate('/');
      } else {
        toast.error({ massage: res.message });
      }
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onSaveData,
    isLoading
  };
};

export default useMutateApplyJob;
