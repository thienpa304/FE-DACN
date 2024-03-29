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
  >(['job-getById', id], async () => JobViewService.getById(id), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    data: data?.data,
    isLoading
  };
};

export default useQueryJobById;

export function useQueryJobByIdList(idList: number[]) {
  if (!idList.length) return {};
  const { data, isLoading } = useQuery<
    ResponseData<Job>[],
    AxiosError<ResponseData<Job>[]>
  >(
    ['job-getByIdList', idList],
    async () => Promise.all(idList.map((id) => JobViewService.getById(id))),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    data: data?.map((item) => item?.data),
    isLoading
  };
}
