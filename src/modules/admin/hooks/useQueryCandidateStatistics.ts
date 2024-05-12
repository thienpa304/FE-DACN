import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AdminCandidateStatisticsService } from '../adminService';

const useQueryCandidateStatistics = () => {
  const { data, isLoading } = useQuery<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>
  >(
    ['get-candidate-statistics'],
    () => AdminCandidateStatisticsService.get({}),
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

export default useQueryCandidateStatistics;
