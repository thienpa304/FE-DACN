import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobService } from '../jobService';

const useQueryJob = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >('job-getList', JobService.get);

  return {
    jobs: data?.data.map((item) => ({ ...item, id: item.postId })),
    isLoading
  };
};

export default useQueryJob;
