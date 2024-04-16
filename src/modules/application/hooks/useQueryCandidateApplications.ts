import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Application } from '../model';
import { CandidateProfilesService } from '../applicationService';
import { useApp } from 'src/modules/app/hooks';

const useQueryCandidateApplications = (params?) => {
  const { isEmployer } = useApp();
  const { data, isLoading, refetch, isFetching } = useQuery<
    ResponseData<Application[]>,
    AxiosError<ResponseData<Application[]>>
  >(
    [
      'application-getList',
      params?.page,
      params?.status,
      params?.matchingScore
    ],
    () => CandidateProfilesService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployer
    }
  );

  return {
    data:
      data?.data?.map((item) => ({ ...item, id: item.application_id })) || [],
    isLoading,
    refetch,
    isFetching
  };
};

export default useQueryCandidateApplications;
