import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { JobService } from '../jobService';
import { Job } from '../model';
import { useApp } from 'src/modules/app/hooks';

type PropsType = {
  totalResults: number;
  result: Job[];
};
const useQueryJobByOwner = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<PaginationType<Job[]>>,
    AxiosError<ResponseData<Job[]>>
  >(
    ['jobOwner-getList', params?.status, params?.page],
    () => JobService.get({ params }),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: isEmployer
    }
  );

  return {
    jobs:
      data?.data?.items?.map((item) => ({ ...item, id: item.postId })) || [],
    totalResults: data?.data?.meta?.totalItems,
    totalPages: data?.data?.meta?.totalPages,
    isLoading
  };
};

export default useQueryJobByOwner;
