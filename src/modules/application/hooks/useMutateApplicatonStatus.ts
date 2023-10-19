import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { Application } from '../model';
import { UpdateStatusService } from '../applicationService';

const useMutateApplicationStatus = () => {
  const { toast } = useApp();
  const { isLoading, mutateAsync } = useMutation<
    ResponseData<Application>,
    AxiosError<ResponseData<Application>>,
    [id: string, data: Partial<Application>]
  >(([id, data]) => UpdateStatusService.update(id, data), {
    onSuccess: (res) => {
      if (res.status === 200) {
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

export default useMutateApplicationStatus;
