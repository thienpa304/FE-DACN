import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobViewService } from '../jobService';

const useQueryAllJob = (params?) => {
  const { data, isLoading, isPreviousData } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >(['get-AllJobs', params?.page], () => JobViewService.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    isLoading
  };
};

export default useQueryAllJob;
