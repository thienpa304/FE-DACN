import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { User } from '../model';
import { SetProfile } from '../userService';

const useMutateUserData = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const mutationFunction = SetProfile.create;
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<User>,
    AxiosError<ResponseData<User>>,
    User
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries('get-Profile');
        toast.success({ massage: res.message });
      } else {
        toast.error({ massage: res.message });
      }
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });
  return {
    onSaveData,
    isLoading
  };
};

export default useMutateUserData;
