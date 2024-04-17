import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { OnlineProfile } from 'src/modules/jobProfile/model/index';
import { OnlineProfileService } from 'src/modules/jobProfile/employeeProfileService';
import { useEffect, useState } from 'react';
import { getAccessToken } from 'src/utils/localStorage';
import { useApp } from 'src/modules/app/hooks';
import useOnlineProfile from './useOnlineProfile';

const useQueryOnlineProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isEmployee } = useApp();
  const { setProfile } = useOnlineProfile();

  const { data, isLoading, isSuccess } = useQuery<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>
  >(['get-OnlineProfile'], OnlineProfileService.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn && isEmployee
  });

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // Handle the data or error here
    if (data) {
      setProfile(data.data);
    }
  }, [isSuccess]);

  return {
    onlineProfile: data?.data,
    isLoading
  };
};

export default useQueryOnlineProfile;
