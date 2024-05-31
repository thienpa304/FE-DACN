import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { FollowJobType } from '../model';
import { FollowJobService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';
import useFollowJobList from 'src/modules/jobs/hooks/useFollowJobList';

const useQueryFollowJobs = (params?) => {
  const { isEmployee } = useApp();
  const { setFollowJobList } = useFollowJobList();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<FollowJobType[]>>,
    AxiosError<ResponseData<FollowJobType[]>>
  >(
    ['get-FollowJobs', params],
    () =>
      FollowJobService.get({ params }).then((res) => {
        if (res.data?.meta?.itemCount) {
          const idList: number[] = res.data?.items?.map(
            (item: FollowJobType) => item.postId
          );
          setFollowJobList(idList);
        }
        return res;
      }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployee
    }
  );

  return {
    jobFollow: data?.data?.items,
    totalPages: data?.data?.meta?.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryFollowJobs;
