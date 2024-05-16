import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { User } from '../../users/model';
import { GetAllUser } from '../../users/userService';
import { useApp } from 'src/modules/app/hooks';

const useQueryAllUserByAdmin = (params?, isEnabled = true) => {
  const { isAdmin } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<User[]>,
    AxiosError<ResponseData<User[]>>
  >(['get-Alluser', params], () => GetAllUser.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isAdmin && isEnabled
  });

  return {
    userList: data?.data?.map((user) => ({ ...user, id: user.userId })) || [],
    isLoading,
    refetch
  };
};

export default useQueryAllUserByAdmin;
