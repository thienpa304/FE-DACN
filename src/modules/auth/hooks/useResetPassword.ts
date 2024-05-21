import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { ResetPasswordService } from '../authService';
import { useApp } from 'src/modules/app/hooks';
import { useNavigate } from 'react-router';

const useResetPassword = () => {
  const { toast } = useApp();
  const navigate = useNavigate();

  const { mutate: onResetPassword, isLoading } = useMutation<
    ResponseData<any>,
    AxiosError<ResponseData<any>>,
    any
  >(ResetPasswordService.create, {
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success({ massage: res.message });
        navigate('/login');
      } else toast.error({ massage: res.message });
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onResetPassword,
    isLoading
  };
};

export default useResetPassword;
