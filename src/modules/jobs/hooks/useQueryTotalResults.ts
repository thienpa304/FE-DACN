import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResults } from '../jobService';

interface responseType {
  totalResults: number;
}

const useQueryTotalResults = () => {
  const { data, isLoading } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >('get-TotalResults', TotalResults.get);

  return {
    totalResults: data?.data?.totalResults,
    isLoading
  };
};

export default useQueryTotalResults;
