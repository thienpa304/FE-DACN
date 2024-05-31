import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { GetEmployeeService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { ProfileShowType } from '../model';
import { useEffect, useState } from 'react';
import useQueryCheckEmployeeApplied from './useQueryCheckEmployeeApplied';

const useQueryEmployee = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<ProfileShowType[]>>,
    AxiosError<ResponseData<ProfileShowType[]>>
  >(
    ['get-AllEmployees', params],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả' || params[key] === undefined) {
          params[key] = '';
        }
      }
      const item = { ...params, currentPosition: params?.positionLevel };
      delete item.positionLevel;
      return GetEmployeeService.get({ params: item });
    },
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
    profile:
      data?.data?.items.map((item) => {
        return { ...item, isApplied: isApplied?.includes(item.userId) };
      }) || [],
    totalPages: data?.data?.meta?.totalPages,
    totalItems: data?.data?.meta?.totalItems,
    isLoading,
    refetch
  };
};

export default useQueryEmployee;
