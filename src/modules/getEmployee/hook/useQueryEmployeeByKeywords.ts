import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { RecommendEmployeeService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { Job } from 'src/modules/jobs/model';
import { ProfileShowType } from '../model';
import { TotalResults } from 'src/modules/jobs/jobService';
import { useEffect, useState } from 'react';
import useQueryCheckEmployeeApplied from './useQueryCheckEmployeeApplied';

type PropsType = {
  totalCount: number;
  result: ProfileShowType[];
};

const useQueryEmployeeByKeywords = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<ProfileShowType[]>>,
    AxiosError<ResponseData<ProfileShowType[]>>
  >(
    ['get-ProfileByKeywords', params],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả' || params[key] === undefined) {
          params[key] = '';
        }
      }
      const item = { ...params, currentPosition: params?.positionLevel };
      delete item.positionLevel;

      return RecommendEmployeeService.get({ params: item });
    },
    {
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer && Boolean(params?.keywords)
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
    totalResults: data?.data?.meta?.totalItems,
    totalPages: data?.data?.meta?.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryEmployeeByKeywords;
