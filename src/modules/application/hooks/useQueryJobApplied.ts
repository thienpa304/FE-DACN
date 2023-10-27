import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { ApplicationService } from '../applicationService';
import { Application } from '../model';

const useQueryJobApplied = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Application[]>,
    AxiosError<ResponseData<Application[]>>
  >('job-applied-getList', ApplicationService.get);

  return {
    data:
      data?.data?.map((item) => ({ ...item, id: item.application_id })) || [],
    isLoading
  };
};

export default useQueryJobApplied;
