import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { JobUpdateStatusService } from '../jobService';
import { Job } from '../model';

const useMutateJobStatus = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { isLoading, mutateAsync } = useMutation<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>,
    [id: string, data: Partial<Job>]
  >(([id, data]) => JobUpdateStatusService.update(id, data), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['get-AllJobs']);
        toast.success({ massage: res.message });
      } else {
        toast.error({ massage: res.message });
      }
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    mutate: mutateAsync,
    isLoading
  };
};

export default useMutateJobStatus;
