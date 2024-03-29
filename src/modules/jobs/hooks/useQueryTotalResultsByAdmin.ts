import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResultsByAdmin } from '../jobService';

interface responseType {
  totalResults: number;
}

const useQueryTotalResultsByAdmin = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >('get-TotalResults', () => TotalResultsByAdmin.get({ params }));

  return {
    totalResults: data?.data?.totalResults,
    isLoading,
    refetch
  };
};

export default useQueryTotalResultsByAdmin;
