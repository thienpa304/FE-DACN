import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { ProfileShowType } from '../model';
import { FollowEmployeesService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';

interface responseType {
  userId: number;
  jobs: any[];
}

const useQueryFollowEmmployee = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>
  >(
    ['get-FollowEmployees', params?.page],
    () => FollowEmployeesService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer
    }
  );

  return {
    jobFollow: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryFollowEmmployee;
