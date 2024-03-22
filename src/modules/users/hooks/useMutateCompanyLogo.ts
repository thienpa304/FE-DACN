import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { UploadLogo } from '../userService';

interface logoType {
  logo: string;
}

const useMutateCompanyLogo = () => {
  const { toast } = useApp();
  const mutationFunction = UploadLogo.create;
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<logoType>,
    AxiosError<ResponseData<logoType>>,
    logoType
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

export default useMutateCompanyLogo;
