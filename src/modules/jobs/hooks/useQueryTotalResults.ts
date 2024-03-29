import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResults } from '../jobService';

interface responseType {
  totalResults: number;
}

const useQueryTotalResults = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >('get-TotalResults', () => TotalResults.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    totalResults: data?.data?.totalResults,
    isLoading,
    refetch
  };
};

export default useQueryTotalResults;
