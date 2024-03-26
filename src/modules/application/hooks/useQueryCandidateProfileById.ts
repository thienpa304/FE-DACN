import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Application, EmployeeApplication } from '../model';
import { CandidateProfilesService } from '../applicationService';
import { useState } from 'react';

const useQueryCandidateProfileById = (id) => {
  if (!id) return {};
  const { data, isLoading } = useQuery<
    ResponseData<EmployeeApplication>,
    AxiosError<ResponseData<EmployeeApplication>>
  >(
    ['application-getById', id],
    async () => CandidateProfilesService.getById(id),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    data: data?.data,
    isLoading
  };
};

export default useQueryCandidateProfileById;

export function useQueryCandidateProfileByIdList(idList: number[]) {
  const [dataList, setDataList] = useState<ResponseData<EmployeeApplication>[]>(
    []
  );
  const { data, isLoading } = useQuery<
    ResponseData<EmployeeApplication>[],
    AxiosError<ResponseData<EmployeeApplication>[]>
  >(
    ['application-getByIdList', idList],
    async () => {
      if (!idList.length) return [];
      Promise.all(idList.map((id) => CandidateProfilesService.getById(id)))
        .then((data) => setDataList(data))
        .catch((e) => console.log(e));
    },
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    data: dataList?.map((item) => item?.data),
    isLoading
  };
}
