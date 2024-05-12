import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { UploadAvatar } from '../userService';
import { User } from '../model';

const useMutateAvatar = () => {
  const { toast, setUserApp } = useApp();
  const mutationFunction = UploadAvatar.create;
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<Partial<User>>,
    AxiosError<ResponseData<Partial<User>>>,
    string
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success({ massage: res.message });
        setUserApp({ avatar: res.data.avatar });
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

export default useMutateAvatar;
