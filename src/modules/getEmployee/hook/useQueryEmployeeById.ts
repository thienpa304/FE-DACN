import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { GetEmployeeService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { ProfileShowType } from '../model';

const useQueryEmployeeById = (id, params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<PaginationType<ProfileShowType[]>>,
    AxiosError<ResponseData<ProfileShowType[]>>
  >(
    ['get-EmployeeById', params],
    () => {
      return GetEmployeeService.getById(id, { params });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer && params.id
    }
  );

  return {
    profile: data?.data?.items || [],
    totalPages: data?.data?.meta?.totalPages,
    totalItems: data?.data?.meta?.totalItems,
    isLoading
  };
};

export default useQueryEmployeeById;
