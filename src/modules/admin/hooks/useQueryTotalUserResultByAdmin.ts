import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { GetTotalResultByAdmin } from '../../users/userService';

interface responseType {
  totalResults: number;
}

const useQueryTotalUserResultByAdmin = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<number>,
    AxiosError<ResponseData<number>>
  >('get-TotalResults', () => GetTotalResultByAdmin.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    totalResults: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryTotalUserResultByAdmin;
