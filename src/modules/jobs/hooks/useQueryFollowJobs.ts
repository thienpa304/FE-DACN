import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { FollowJobService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';

interface responseType {
  userId: number;
  jobs: any[];
}

const useQueryFollowJobs = (params?) => {
  const { isEmployee } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >(['get-FollowJobs', params?.page], () => FollowJobService.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isEmployee
  });

  return {
    jobFollow: data?.data?.jobs,
    isLoading,
    refetch
  };
};

export default useQueryFollowJobs;
