import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { GetEmployeeService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { ProfileShowType } from '../model';
import useEmployee from './useEmployee';
import { useEffect } from 'react';

const useQueryEmployeeById = (id, params?) => {
  const { setEmployeeDetail, employeeDetail } = useEmployee();
  const { isEmployer } = useApp();

  const { data, isLoading, refetch } = useQuery<
    ResponseData<ProfileShowType>,
    AxiosError<ResponseData<ProfileShowType>>
  >(
    ['get-EmployeeById', id, params?.type],
    () => {
      return GetEmployeeService.getById(id, { params });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled:
        isEmployer &&
        Boolean(id) &&
        params?.type !== null &&
        params?.type !== undefined
    }
  );

  useEffect(() => {
    if (data?.data) setEmployeeDetail(data?.data);
  }, [JSON.stringify(data?.data)]);

  return {
    profile: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryEmployeeById;
