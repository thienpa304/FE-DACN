import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotolJobsEachProfession } from '../jobService';

interface responseType {
  profession_value: string;
  count: number;
}

const useQueryTotolJobsEachProfession = (params?) => {
  const { data, isLoading } = useQuery<
    ResponseData<responseType[]>,
    AxiosError<ResponseData<responseType[]>>
  >('get-TotalResults', () => TotolJobsEachProfession.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    dataList: data?.data,
    isLoading
  };
};

export default useQueryTotolJobsEachProfession;
