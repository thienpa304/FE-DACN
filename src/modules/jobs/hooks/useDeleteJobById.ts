import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { JobService } from '../jobService';
import { Job } from '../model';

const useDeleteJobById = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onDeleteById, isLoading } = useMutation<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>,
    [id: string]
  >(([id]) => JobService.remove(id), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['jobOwner-getList']);
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
    onDeleteById,
    isLoading
  };
};

export default useDeleteJobById;
