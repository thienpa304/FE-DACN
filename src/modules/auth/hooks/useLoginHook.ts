import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { Navigate } from 'react-router-dom';
import { ResponseData } from 'src/common/http-request';
import useToast from 'src/modules/app/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../authService';
import { LoginResponse, LoginRequest } from '../model';
import { useAppDispatch } from 'src/redux/hooks';
import { setAccessToken, setUser } from 'src/modules/app/appSlice';
import { useAppUser } from 'src/modules/app/hooks';
import { localStorage } from 'src/utils';

const useLogin = () => {
  const toast = useToast();
  const { setUserApp, setAccessTokenApp, userId } = useAppUser();
  const navigate = useNavigate();

  if (userId) navigate('/');
  const { mutate: onLogin, isLoading } = useMutation<
    ResponseData<LoginResponse>,
    AxiosError<ResponseData<LoginResponse>>,
    LoginRequest
  >(LoginService.create, {
    onSuccess: (res) => {
      const { userData, access_token } = res.data;
      if (res.status === 200 && userData?.userId) {
        toast.success({ massage: res.message });
        setUserApp(userData);
        setAccessTokenApp(access_token);
        localStorage.setAccessToken(access_token);
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
