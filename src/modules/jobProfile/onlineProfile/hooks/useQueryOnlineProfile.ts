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
  const { isEmployee } = useApp();
  const { setProfile } = useOnlineProfile();
  const isLoggedIn = Boolean(getAccessToken());

  const { data, isLoading, isSuccess, refetch } = useQuery<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>
  >(['get-OnlineProfile'], OnlineProfileService.get, {
    retry: (failureCount, error) =>
      error.response.status === 400 ? false : failureCount < 2,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn && isEmployee
  });

  // console.log(data?.data);
  useEffect(() => {
    // Handle the data or error here
    if (data && isSuccess) {
      setProfile(data?.data);
    }
  }, [isSuccess]);

  return {
    onlineProfile: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryOnlineProfile;
