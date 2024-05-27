import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobService, JobViewService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';
import { useEffect, useState } from 'react';

export default function useQueryJobByIdByOwner(id) {
  const { isEmployer } = useApp();
  if (!id) return {};
  const { data, isLoading, isFetching } = useQuery<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>
  >(['job-getByIdByEmmployer', id], async () => JobService.getById(id), {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isEmployer
  });

  const [job, setJob] = useState<Job>();

  useEffect(() => {
    if (data?.data) {
      const saveJob = {
        ...data?.data,
        sex: data?.data?.sex === null ? 'Tất cả' : data?.data?.sex
      };
      setJob(saveJob);
    }
  }, [JSON.stringify(data)]);

  return {
    data: job,
    isLoading,
    isFetching
  };
}

export function useQueryJobByIdListByOwner(idList: number[]) {
  const { isEmployer } = useApp();
  const [dataList, setDataList] = useState<ResponseData<Job>[]>([]);
  const { data, isLoading } = useQuery<
    ResponseData<Job>[],
    AxiosError<ResponseData<Job>[]>
  >(
    ['jobs-getByIdListByOwner', JSON.stringify(idList)],
    async () => {
      if (!idList.length) return [];
      Promise.allSettled(idList.map((id) => JobService.getById(id)))
        .then((results) => {
          // Lọc ra các kết quả thành công và chỉ lưu dữ liệu của các promise đã được giải quyết vào dataList
          const fulfilledResults = results.filter(
            (result): result is PromiseFulfilledResult<any> =>
              result.status === 'fulfilled'
          );
          const dataList = fulfilledResults.map((result) => result.value);

          // Cập nhật dataList
          setDataList(dataList);
        })
        .catch((e) => console.error(e));
    },
    {
      retry: 1,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: isEmployer
    }
  );
  return {
    jobs:
      dataList?.map((item) => ({
        ...item?.data,
        id: item?.data?.postId,
        sex: item?.data?.sex === null ? 'Tất cả' : item?.data?.sex
      })) || [],
    isLoading
  };
}
