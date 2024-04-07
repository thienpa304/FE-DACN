import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobUpdateStatusService } from '../jobService';

const useQueryJob = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >(
    ['get-AllJobs', params?.page, params?.profession, params?.status],
    () => JobUpdateStatusService.get({ params }),
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

export default useQueryJob;
