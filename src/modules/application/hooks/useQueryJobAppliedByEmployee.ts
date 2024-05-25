import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { ApplicationService } from '../applicationService';
import { Application } from '../model';
import { useApp } from 'src/modules/app/hooks';

const useQueryJobAppliedByEmployee = (params?) => {
  const { isEmployee } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<PaginationType<Application[]>>,
    AxiosError<ResponseData<Application[]>>
  >(['job-applied-getList', params], () => ApplicationService.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isEmployee,
    keepPreviousData: true
  });

  return {
    data:
      data?.data?.items?.map((item) => ({
        ...item,
        id: item.application_id
      })) || [],
    totalPages: data?.data?.meta?.totalPages,
    isLoading
  };
};

export default useQueryJobAppliedByEmployee;
