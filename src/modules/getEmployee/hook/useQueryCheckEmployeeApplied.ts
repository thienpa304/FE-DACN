import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { CheckEmployeeAppliedService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';

const useQueryCheckEmployeeApplied = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<Number[]>,
    AxiosError<ResponseData<Number[]>>
  >(
    ['get-AllEmployees', params],
    () => {
      return CheckEmployeeAppliedService.get({ params });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer && Boolean(params?.employeeIds)
    }
  );

  return {
    isApplied: data?.data,
    isLoading
  };
};

export default useQueryCheckEmployeeApplied;
