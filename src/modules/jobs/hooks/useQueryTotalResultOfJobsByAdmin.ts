import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResultsByAdmin } from '../jobService';
import { useApp } from 'src/modules/app/hooks';

interface responseType {
  totalResults: number;
}

const useQueryTotalResultOfJobsByAdmin = (params?) => {
  const { isAdmin } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >(
    ['get-TotalResults', params?.profession, params?.status],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả') {
          params[key] = '';
        }
      }
      return TotalResultsByAdmin.get({ params });
    },
    {
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isAdmin
    }
  );

  return {
    totalResults: data?.data?.totalResults,
    isLoading,
    refetch
  };
};

export default useQueryTotalResultOfJobsByAdmin;
