import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { JobService } from '../jobService';
import { Job } from '../model';
import { useNavigate } from 'react-router';

const useMutateJob = () => {
  const { toast, user } = useApp();
  const navigate = useNavigate();
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>,
    Job
  >(JobService.create, {
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success({ massage: res.message });
        navigate('/employer/recruitment/list');
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

export default useMutateJob;
