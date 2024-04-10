import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Employee } from '../../users/model';
import { AdminEmployeesService } from '../adminService';

const useQueryEmployeesByAdmin = (params?, isFetch?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<Employee[]>,
    AxiosError<ResponseData<Employee[]>>
  >(
    ['get-AllEmployees', params?.page, params?.profession, params?.name],
    () => {
      if (params?.profession === 'Tất cả') params.profession = '';
      return AdminEmployeesService.get({ params });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isFetch
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
