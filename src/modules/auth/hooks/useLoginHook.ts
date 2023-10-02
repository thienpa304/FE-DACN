import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { localStorage } from 'src/utils';
import { LoginService } from '../authService';
import { LoginRequest, LoginResponse } from '../model';

const useLogin = () => {
  const { toast } = useApp();
  const {
    setUserApp,
    setAccessTokenApp,
    user: { userId }
  } = useApp();

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
