import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import useToast from 'src/modules/app/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { RegisterService } from '../authService';
import { RegisterResponse, RegisterRequest } from '../model';
import { useAppUser } from 'src/modules/app/hooks';

const useRegister = () => {
  const toast = useToast();
  const { userId } = useAppUser();
  const navigate = useNavigate();
  if (userId) navigate('/');
  const { mutate: onRegister, isLoading } = useMutation<
    ResponseData<RegisterResponse>,
    AxiosError<ResponseData<RegisterResponse>>,
    RegisterRequest
  >(RegisterService.create, {
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
    onRegister,
    isLoading
  };
};

export default useRegister;
