import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobViewService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';
import { useState } from 'react';

export default function useQueryJobById(id) {
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
}

export function useQueryJobByIdList(idList: number[]) {
  const { isEmployer } = useApp();
  const [dataList, setDataList] = useState<ResponseData<Job>[]>([]);
  const { data, isLoading } = useQuery<
    ResponseData<Job>[],
    AxiosError<ResponseData<Job>[]>
  >(
    ['jobs-getByIdList', JSON.stringify(idList)],
    async () => {
      if (!idList.length) return [];
      Promise.allSettled(idList.map((id) => JobViewService.getById(id)))
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
        .catch((e) => console.log(e));
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
      dataList?.map((item) => ({ ...item?.data, id: item?.data?.postId })) ||
      [],
    isLoading
  };
}
