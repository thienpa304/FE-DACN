import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AdminEmployeesTotalResultService } from '../adminService';

type ResponseType = { totalResults: number };

const useQueryTotalEmployeeResultByAdmin = (params?) => {
  const { data, isLoading } = useQuery<
    ResponseData<ResponseType>,
    AxiosError<ResponseData<ResponseType>>
  >(
    ['get-TotalEmployeeResult', params?.profession],
    () => AdminEmployeesTotalResultService.get({ params }),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    totalResults: data?.data?.totalResults,
    isLoading
  };
};

export default useQueryTotalEmployeeResultByAdmin;
