import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { CheckApplied } from '../applicationService';
import { useApp } from 'src/modules/app/hooks';

const useQueryCheckApplied = (params?) => {
  const { isEmployee } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<Boolean>,
    AxiosError<ResponseData<Boolean>>
  >(
    ['job-getById', params],
    () => CheckApplied.getById(params?.postId + '/applied', { params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployee && Boolean(params?.postId)
    }
  );

  return {
    isApplied: data?.data,
    isLoading
  };
};

export default useQueryCheckApplied;
