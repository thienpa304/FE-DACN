import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { JobService } from '../jobService';
import { Job } from '../model';
import { useNavigate } from 'react-router';

const useMutateJobById = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const navigate = useNavigate();
  const { mutate: onSaveDataById, isLoading } = useMutation<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>,
    [id: string, data: Job]
  >(([id, data]) => JobService.update(id, data), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['job-getById']);
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
    onSaveDataById,
    isLoading
  };
};

export default useMutateJobById;
