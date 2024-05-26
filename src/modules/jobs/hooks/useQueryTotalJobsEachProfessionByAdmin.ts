import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResultEachProfessionByAdmin } from '../jobService';

interface ResponseType {
  profession_value: string;
  count: number;
}

const useQueryTotalJobsEachProfessionByAdmin = (params?) => {
  const { data, isLoading } = useQuery<
    ResponseData<ResponseType[]>,
    AxiosError<ResponseData<ResponseType[]>>
  >(
    ['get-TotalResultsEachProfessionByAdmin', params],
    () => TotalResultEachProfessionByAdmin.get({ params }),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    dataList: data?.data,
    isLoading
  };
};

export default useQueryTotalJobsEachProfessionByAdmin;
