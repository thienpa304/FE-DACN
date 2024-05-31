import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { User } from '../../users/model';
import { useApp } from 'src/modules/app/hooks';
import { GetAllEmailService } from '../adminService';

const useQueryAllEmailByAdmin = (params?, isEnabled = true) => {
  const { isAdmin } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<User[]>>,
    AxiosError<ResponseData<User[]>>
  >(['get-AllEmail', params], () => GetAllEmailService.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isAdmin && isEnabled
  });

  return {
    allEmailList: data?.data?.items || [],
    totalPages: data?.data?.meta?.totalPages,
    isLoading,
    refetch
  };
};

export const useQuerySuggestEmailByAdmin = (params?, isEnabled = true) => {
  const { isAdmin } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<User[]>>,
    AxiosError<ResponseData<User[]>>
  >(
    ['get-SuggestEmail', params],
    () => {
      console.log(params);

      const role = params?.role === 'ALL' ? '' : params?.role;
      return GetAllEmailService.get({ params: { ...params, role } });
    },
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isAdmin && isEnabled
    }
  );

  return {
    suggestEmailList: data?.data?.items || [],
    isLoading
  };
};

export default useQueryAllEmailByAdmin;
