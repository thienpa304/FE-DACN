import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { GetEmployeeOnlineProfileService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';

const useQueryFollowOnlineProfileById = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<any>,
    AxiosError<ResponseData<any>>
  >(
    ['get-FollowOnlineProfile', params?.userId, params?.isOnlineProfile],
    () => GetEmployeeOnlineProfileService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled:
        isEmployer && params?.userId !== undefined && params?.isOnlineProfile
    }
  );

  return {
    onlineProfile: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryFollowOnlineProfileById;
