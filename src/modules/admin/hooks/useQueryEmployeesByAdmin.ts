import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Employee } from '../../users/model';
import { AdminEmployeesService } from '../adminService';

const useQueryEmployeesByAdmin = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<Employee[]>,
    AxiosError<ResponseData<Employee[]>>
  >(
    ['get-AllEmployees', params?.page, params?.profession],
    () => AdminEmployeesService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    employeeList:
      data?.data?.map((user) => ({ ...user, id: user.userId })) || [],
    isLoading,
    refetch
  };
};

export default useQueryEmployeesByAdmin;
