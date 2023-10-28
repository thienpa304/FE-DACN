import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { AllJobService } from '../jobService';

const useQueryAllJob = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >('get-AllJobs', AllJobService.get);

  return {
    jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    isLoading
  };
};

export default useQueryAllJob;
