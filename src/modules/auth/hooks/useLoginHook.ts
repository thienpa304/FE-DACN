import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import useToast from 'src/modules/app/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../authService';
import { LoginResponse, LoginRequest } from '../model';
import { useAppDispatch } from 'src/redux/hooks';
import { setAccessToken, setUser } from 'src/modules/app/appSlice';

const useLogin = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutate: onLogin, isLoading } = useMutation<
    ResponseData<LoginResponse>,
    AxiosError<ResponseData<LoginResponse>>,
    LoginRequest
  >(LoginService.create, {
    onSuccess: (res) => {
      const { email, userId, access_token } = res.data;
      if (res.status === 200 && userId) {
        toast.success({ massage: res.message });
        dispatch(setUser({ userId, email }));
        dispatch(setAccessToken(access_token));
        navigate('/');
      } else toast.error({ massage: res.message });
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onLogin,
    isLoading
  };
};

export default useLogin;
