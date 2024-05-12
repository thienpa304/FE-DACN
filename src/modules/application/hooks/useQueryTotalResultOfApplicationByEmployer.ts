import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { ApplicationTotalResults } from '../applicationService';
import { useApp } from 'src/modules/app/hooks';

interface responseType {
  totalResults: number;
}

const useQueryTotalResultOfApplicationByEmployer = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >(
    ['application-getList', params?.page, params?.status],
    () => ApplicationTotalResults.get({ params }),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: isEmployer
    }
  );

  return {
    totalResults: data?.data?.totalResults,
    isLoading
  };
};

export default useQueryTotalResultOfApplicationByEmployer;
