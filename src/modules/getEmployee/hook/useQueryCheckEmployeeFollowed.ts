import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { CheckEmployeeFollowedService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';

type ResponseType = {
  employeeId: number;
  exist: boolean;
  applicationType: string;
};

const useQueryCheckEmployeeFollowed = (params?) => {
  const { isEmployer } = useApp();

  const { data, isLoading, refetch } = useQuery<
    ResponseData<ResponseType[]>,
    AxiosError<ResponseType[]>
  >(
    ['get-CheckEmployeeFollowed', params],
    () => CheckEmployeeFollowedService.create(params),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled:
        isEmployer && Boolean(params.resumes) && params?.resumes?.length > 0
    }
  );

  return {
    employeeFollow: data?.data || [],
    isLoading,
    refetch
  };
};

export default useQueryCheckEmployeeFollowed;
