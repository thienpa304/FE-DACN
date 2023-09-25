import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import useToast from 'src/modules/app/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { RegisterService } from '../authService';
import { User, UserRegister } from '../model';
const useRegisterUser = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { mutate: onRegister } = useMutation<
    ResponseData<User>,
    AxiosError<ResponseData<User>>,
    UserRegister
  >(RegisterService.create, {
    onSuccess: (res) => {
      if (res.status === 200 && res.data.userId) {
        toast.success({ massage: res.message });
        navigate('/login');
      } else toast.error({ massage: res.message });
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onRegister
  };
};

export default useRegisterUser;
