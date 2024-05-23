import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobViewService } from '../jobService';

const useQueryAllJob = (params?) => {
  const { data, isLoading, refetch, isFetching } = useQuery<
    ResponseData<PaginationType<Job[]>>,
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
    jobs:
      data?.data?.items?.map((item) => ({ ...item, id: item.postId })) || [],
    totalItems: data?.data?.meta.totalItems,
    itemCount: data?.data?.meta.itemCount,
    itemPerPage: data?.data?.meta.itemPerPage,
    totalPages: data?.data?.meta.totalPages,
    currentPage: data?.data?.meta.currentPage,
    isLoading,
    refetch,
    isFetching
  };
};

export default useQueryAllJob;
