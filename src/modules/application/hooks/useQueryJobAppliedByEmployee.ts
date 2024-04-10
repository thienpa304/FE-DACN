import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { ApplicationService } from '../applicationService';
import { Application } from '../model';
import { useApp } from 'src/modules/app/hooks';

const useQueryJobAppliedByEmployee = () => {
  const { isEmployee } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<Application[]>,
    AxiosError<ResponseData<Application[]>>
  >('job-applied-getList', ApplicationService.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isEmployee,
    keepPreviousData: true
  });

  return {
    data:
      data?.data?.map((item) => ({ ...item, id: item.application_id })) || [],
    isLoading
  };
};

export default useQueryJobAppliedByEmployee;
