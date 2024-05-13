import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { localStorage } from 'src/utils';
import { LoginService } from '../authService';
import { LoginRequest, LoginResponse } from '../model';
import useProfileHook from 'src/modules/users/hooks/useUserHook';
import useQueryOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useQueryOnlineProfile';
import useQueryAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useQueryAttachedDocument';

const useLogin = () => {
  const { toast } = useApp();
  const {
    setUserApp,
    setAccessTokenApp,
    user: { userId }
  } = useApp();

  const navigate = useNavigate();
  const { state } = useLocation();
  const locationState = state as any;

  if (userId)
    navigate(locationState?.from || '/', { state: state, replace: true });

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
        navigate(locationState?.from || '/', {
          state: state,
          replace: true
        });
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
