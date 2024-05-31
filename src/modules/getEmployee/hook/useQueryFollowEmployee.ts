import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { ProfileShowType } from '../model';
import { FollowEmployeesService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { useEffect, useState } from 'react';
import useQueryCheckEmployeeApplied from './useQueryCheckEmployeeApplied';

const useQueryFollowEmployee = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<any[]>>,
    AxiosError<ResponseData<any[]>>
  >(
    ['get-FollowEmployees', params],
    () => FollowEmployeesService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer
    }
  );
  const [employeeIds, setEmployeeIds] = useState('');

  const { isApplied } = useQueryCheckEmployeeApplied({ employeeIds });
  useEffect(() => {
    if (data?.data?.meta?.itemCount) {
      setEmployeeIds(
        data?.data?.items
          .map((item: any) => {
            return item.userId;
          })
          .join(',')
      );
    }
  }, [data?.data?.items]);

  return {
    employeeFollow: data?.data?.items.map((item) => {
      return { ...item, isApplied: isApplied?.includes(item.userId) };
    }),
    totalPages: data?.data?.meta?.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryFollowEmployee;
