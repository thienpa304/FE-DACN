import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { RequestResetService } from '../authService';
import { useApp } from 'src/modules/app/hooks';

const useRequestCode = () => {
  const { toast } = useApp();

  const {
    mutate: onRequestCode,
    isLoading,
    isSuccess
  } = useMutation<ResponseData<any>, AxiosError<ResponseData<any>>, any>(
    RequestResetService.create,
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          toast.success({ massage: res.message });
        } else toast.error({ massage: res.message });
      },
      onError: (error) => {
        toast.error({ massage: error.response.data.message });
      }
    }
  );

  return {
    onRequestCode,
    isLoading,
    isSuccess
  };
};

export default useRequestCode;
