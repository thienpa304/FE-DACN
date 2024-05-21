import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { ChangePasswordService } from 'src/modules/auth/authService';

const useChangePassword = () => {
  const { toast } = useApp();
  const {
    mutate: onChangePassword,
    isLoading,
    isSuccess
  } = useMutation<ResponseData<any>, AxiosError<any>, any>(
    async (data) => {
      return ChangePasswordService.create(data);
    },
    {
      onSuccess: (data) => {
        if (data.status === 200) toast.success({ massage: data.message });
        else toast.error({ massage: data.message });
      },
      onError: (error) => {
        toast.error({ massage: error.response.data.message });
      }
    }
  );
  return { onChangePassword, isLoading, isSuccess };
};

export default useChangePassword;
