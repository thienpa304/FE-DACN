import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { TotalResults } from '../jobService';

const useQueryTotalResults = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >('get-TotalResults', TotalResults.get);

  return {
    totalResults: data?.data,
    isLoading
  };
};

export default useQueryTotalResults;
