import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Application } from '../model';
import { CandidateProfilesService } from '../applicationService';
import { useApp } from 'src/modules/app/hooks';

const useQueryCandidateApplications = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch, isFetching } = useQuery<
    ResponseData<PaginationType<Application[]>>,
    AxiosError<ResponseData<Application[]>>
  >(
    ['application-getList', params],
    () => CandidateProfilesService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer
    }
  );

  console.log('...api...', data?.data?.meta?.itemCount);

  return {
    data:
      data?.data?.items?.map((item) => ({
        ...item,
        id: item.application_id
      })) || [],
    totalItems: data?.data?.meta?.totalItems,
    itemCount: data?.data?.meta?.itemCount,
    itemPerPage: data?.data?.meta?.itemPerPage,
    totalPages: data?.data?.meta?.totalPages,
    currentPage: data?.data?.meta?.currentPage,
    isLoading,
    refetch,
    isFetching
  };
};

export default useQueryCandidateApplications;
