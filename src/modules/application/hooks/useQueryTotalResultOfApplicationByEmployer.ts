import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { ApplicationTotalResults } from '../applicationService';

interface responseType {
  totalResults: number;
}

const useQueryTotalResultOfApplicationByEmployer = (params?) => {
  const { data, isLoading } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >(
    ['application-getList', params?.page, params?.status],
    () => ApplicationTotalResults.get({ params }),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    totalResults: data?.data?.totalResults,
    isLoading
  };
};

export default useQueryTotalResultOfApplicationByEmployer;
