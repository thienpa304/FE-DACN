import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Application } from '../model';
import { CandidateProfilesService } from '../applicationService';

const useQueryCandidateProfiles = (params?) => {
  const { data, isLoading, refetch } = useQuery<
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
      refetchOnWindowFocus: false
    }
  );

  return {
    data:
      data?.data?.map((item) => ({ ...item, id: item.application_id })) || [],
    isLoading,
    refetch
  };
};

export default useQueryCandidateProfiles;
