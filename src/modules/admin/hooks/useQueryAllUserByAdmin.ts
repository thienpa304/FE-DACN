import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { User } from '../../users/model';
import { GetAllUser } from '../../users/userService';

const useQueryAllUserByAdmin = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<User[]>,
    AxiosError<ResponseData<User[]>>
  >(['get-AllJobs', params?.page], () => GetAllUser.get({ params }), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    userList: data?.data?.map((user) => ({ ...user, id: user.userId })) || [],
    isLoading,
    refetch
  };
};

export default useQueryAllUserByAdmin;
