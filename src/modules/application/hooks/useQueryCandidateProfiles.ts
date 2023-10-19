import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Application } from '../model';
import { CandidateProfilesService } from '../applicationService';

const useQueryCandidateProfiles = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Application[]>,
    AxiosError<ResponseData<Application[]>>
  >('application-getList', CandidateProfilesService.get);

  return {
    data: data?.data?.map((item) => ({ ...item, id: item.application_id })) || [],
    isLoading
  };
};

export default useQueryCandidateProfiles;
