import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { UploadAvatar } from '../userService';

const useMutateAvatar = () => {
  const { toast } = useApp();
  const mutationFunction = UploadAvatar.create;
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<string>,
    AxiosError<ResponseData<string>>,
    string
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

export default useMutateAvatar;
