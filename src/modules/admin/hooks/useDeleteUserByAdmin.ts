import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { DeleteUserService } from '../adminService';
import { User } from 'src/modules/users/model';

const useDeleteUserById = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onDeleteUser, isLoading } = useMutation<
    ResponseData<User[]>,
    AxiosError<ResponseData<User[]>>,
    [id: number]
  >(
    ([id]) => {
      return DeleteUserService.remove(id);
    },
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          queryClient.invalidateQueries(['get-Alluser']);
          toast.success({ massage: res.message });
        } else {
          toast.error({ massage: res.message });
        }
      },
      onError: (error) => {
        toast.error({ massage: error.response.data.message });
      }
    }
  );

  return {
    onDeleteUser,
    isLoading
  };
};

export default useDeleteUserById;
