import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { User } from '../../users/model';
import { GetAllUser } from '../../users/userService';
import { useApp } from 'src/modules/app/hooks';

const useQueryAllUserByAdmin = (params?, isEnabled = true) => {
  const { isAdmin } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<User[]>>,
    AxiosError<ResponseData<User[]>>
  >(['get-Alluser', params], () => GetAllUser.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isAdmin && isEnabled
  });

  return {
    userList:
      data?.data?.items.map((user) => ({ ...user, id: user.userId })) || [],
    totalPages: data?.data?.meta.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryAllUserByAdmin;
