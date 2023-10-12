import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { User } from '../model';
import { SetProfile, SetCompany } from '../userService';

const useMutateUserData = (obj) => {
  const { toast } = useApp();

  const mutationFunction =
    obj === 'Company' ? SetCompany.create : SetProfile.create;

  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<User>,
    AxiosError<ResponseData<User>>,
    User
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
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
