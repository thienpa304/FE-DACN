import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobViewService } from '../jobService';

const useQueryAllJob = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >(
    ['get-AllJobs', params],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả') {
          params[key] = '';
        }
      }
      return JobViewService.get({ params });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    isLoading,
    refetch
  };
};

export default useQueryAllJob;
