import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { OnlineProfile } from 'src/modules/jobProfile/model/index';
import { OnlineProfileService } from 'src/modules/jobProfile/employeeService';
import { useEffect, useState } from 'react';
import { getAccessToken } from 'src/utils/localStorage';
import { useApp } from 'src/modules/app/hooks';

const useQueryOnlineProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isEmployee } = useApp();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const { data, isLoading } = useQuery<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>
  >('get-OnlineProfile', OnlineProfileService.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn && isEmployee
  });

  return {
    onlineProfile: data?.data,
    isLoading
  };
};

export default useQueryOnlineProfile;
