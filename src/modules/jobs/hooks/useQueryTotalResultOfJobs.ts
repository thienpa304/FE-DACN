import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResults } from '../jobService';

interface responseType {
  totalResults: number;
}

const useQueryTotalResultOfJobs = (params?, querykey = null) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >(
    [querykey || 'get-TotalResultOfJobs', params],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả') {
          params[key] = '';
        }
      }
      return TotalResults.get({ params });
    },
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    totalResults: data?.data?.totalResults,
    isLoading,
    refetch
  };
};

export default useQueryTotalResultOfJobs;
