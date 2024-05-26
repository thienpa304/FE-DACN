import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { EmployeeApplication } from '../model';
import { CandidateProfilesService } from '../applicationService';
import { useEffect, useState } from 'react';
import { useApp } from 'src/modules/app/hooks';

export default function useQueryCandidateApplicationById(id) {
  const { isEmployer } = useApp();
  if (!id) return {};
  const { data, isLoading } = useQuery<
    ResponseData<EmployeeApplication>,
    AxiosError<ResponseData<EmployeeApplication>>
  >(
    ['application-getById', id],
    async () => CandidateProfilesService.getById(id),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: isEmployer
    }
  );

  return {
    data: data?.data,
    isLoading
  };
}

export function useQueryCandidateApplicationByIdList(idList: number[]) {
  const [dataList, setDataList] = useState<ResponseData<EmployeeApplication>[]>(
    []
  );
  const { data, isLoading, refetch } = useQuery<
    ResponseData<EmployeeApplication>[],
    AxiosError<ResponseData<EmployeeApplication>[]>
  >(
    ['application-getByIdList', JSON.stringify(idList)],
    async () => {
      if (!idList.length) return [];
      Promise.allSettled(
        idList.map((id) => CandidateProfilesService.getById(id))
      )
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
      keepPreviousData: true
    }
  );

  return {
    data: dataList?.map((item) => item?.data),
    isLoading,
    refetch
  };
}
