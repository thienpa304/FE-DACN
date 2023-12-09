import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobViewService } from '../jobService';

const useQueryJobById = (id) => {
  if (!id) return {};
  const { data, isLoading } = useQuery<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>
  >('job-getById', async () => JobViewService.getById(id));

  return {
    data: data?.data,
    isLoading
  };
};

export default useQueryJobById;
