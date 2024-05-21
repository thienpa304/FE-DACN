import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { LogoutService } from '../authService';
import { LoginRequest, LoginResponse } from '../model';
import useDocumentHook from 'src/modules/jobProfile/attachedDocument/hooks/useDocumentHook';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';

const useQueryLogout = (isLogout) => {
  const { toast } = useApp();

  const { setAccessTokenApp, resetUserApp } = useApp();
  const { resetDocumentProfile } = useDocumentHook();
  const { resetOnlineProfile } = useOnlineProfile();

  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery<
    ResponseData<LoginResponse>,
    AxiosError<ResponseData<LoginResponse>>,
    any
  >('_', LogoutService.get, {
    enabled: isLogout
  });

  if (isSuccess) {
    resetUserApp();
    resetDocumentProfile();
    resetOnlineProfile();
    setAccessTokenApp(null);
    localStorage.clear();
    navigate('/', {
      replace: true
    });
    toast.success({ massage: data.message });
  }

  return {
    data,
    isLoading
  };
};

export default useQueryLogout;
