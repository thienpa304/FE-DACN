import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { GetEmployeeDocumentProfileService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';

const useQueryFollowDocumentProfileById = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<any>,
    AxiosError<ResponseData<any>>
  >(
    ['get-FollowDocumentProfile', params?.userId, params?.isOnlineProfile],
    () => GetEmployeeDocumentProfileService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled:
        isEmployer &&
        params?.userId !== undefined &&
        params?.isOnlineProfile === false
    }
  );
  console.log(
    isEmployer &&
      params?.userId !== undefined &&
      params?.isOnlineProfile === false
  );

  return {
    documentProfile: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryFollowDocumentProfileById;
