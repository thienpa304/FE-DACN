import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { User } from '../model';
import { ProfileService } from '../userService';

const useMutateProfile = () => {
  const { toast } = useApp();

  const { mutate: onSaveProfile, isLoading } = useMutation<
    ResponseData<User>,
    AxiosError<ResponseData<User>>,
    User
  >(ProfileService.create, {
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success({ massage: res.message });
      } else toast.error({ massage: res.message });
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onSaveProfile,
    isLoading
  };
};

export default useMutateProfile;
