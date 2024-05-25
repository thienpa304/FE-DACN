import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { FollowJobService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';
import { Company } from 'src/modules/users/model';

type ResponseType = Partial<Job> & Partial<Company>;

const useQueryFollowJobs = (params?) => {
  const { isEmployee } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<ResponseType[]>>,
    AxiosError<ResponseData<ResponseType[]>>
  >(['get-FollowJobs', params], () => FollowJobService.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isEmployee
  });

  return {
    jobFollow: data?.data?.items,
    totalPages: data?.data?.meta?.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryFollowJobs;
