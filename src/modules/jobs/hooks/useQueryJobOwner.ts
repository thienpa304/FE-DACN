import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { JobOwnerService } from '../jobService';
import { Job } from '../model';

const useQueryJobOwner = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >('jobOwner-getList', JobOwnerService.get);

  return {
    jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    isLoading
  };
};

export default useQueryJobOwner;
