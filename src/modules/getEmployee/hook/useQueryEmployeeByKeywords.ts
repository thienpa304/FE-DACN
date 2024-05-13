import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Employee, User } from 'src/modules/users/model';
import { RecommendEmployeeService } from '../getEmployeeService';
import { useApp } from 'src/modules/app/hooks';
import { Job } from 'src/modules/jobs/model';
import { ProfileShowType } from '../model';
import { TotalResults } from 'src/modules/jobs/jobService';

type PropsType = {
  totalCount: number;
  result: ProfileShowType[];
};

const useQueryEmployeeByKeywords = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PropsType>,
    AxiosError<ResponseData<PropsType>>
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

  return {
    profile: data?.data?.result || [],
    totalResults: data?.data?.totalCount,
    isLoading,
    refetch
  };
};

export default useQueryEmployeeByKeywords;