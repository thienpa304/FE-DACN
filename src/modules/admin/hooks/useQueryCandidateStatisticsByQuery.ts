import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AdminCandidateStatisticsByQueryService } from '../adminService';

const useQueryCandidateStatisticsByQuery = (params) => {
  const { data, isLoading } = useQuery<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>
  >(
    ['get-candidate-statistics-by-query', params],
    () => AdminCandidateStatisticsByQueryService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    candidateStatistics: data?.data?.map((item) => ({ ...item })) || [],
    isLoading
  };
};

export default useQueryCandidateStatisticsByQuery;
