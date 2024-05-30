import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Employee } from '../../users/model';
import { AdminEmployeesService } from '../adminService';

const useQueryEmployeesByAdmin = (params?, isFetch?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<Employee[]>>,
    AxiosError<ResponseData<Employee[]>>
  >(
    ['get-AllEmployees', params],
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
      data?.data?.items?.map((user) => ({ ...user, id: user.userId })) || [],
    totalPages: data?.data?.meta?.totalPages,
    totalItems: data?.data?.meta?.totalItems,
    isLoading,
    refetch
  };
};

export default useQueryEmployeesByAdmin;
