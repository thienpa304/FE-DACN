import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobUpdateStatusService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';

const useQueryJobByAdmin = (params?) => {
  const { isAdmin } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >(
    ['get-AllJobsByAdmin', params?.page, params?.profession, params?.status],
    () => {
      for (const key in params) {
        if (params[key] === 'Tất cả') {
          params[key] = '';
        }
      }
      return JobUpdateStatusService.get({ params });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isAdmin
    }
  );

  return {
    jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    isLoading,
    refetch
  };
};

export default useQueryJobByAdmin;
