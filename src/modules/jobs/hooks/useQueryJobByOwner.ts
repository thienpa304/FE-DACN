import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
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
    ResponseData<PropsType>,
    AxiosError<ResponseData<PropsType>>
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
      data?.data?.result?.map((item) => ({ ...item, id: item.postId })) || [],
    totalResults: data?.data?.totalResults || 0,
    isLoading
  };
};

export default useQueryJobByOwner;
