import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { Company } from '../model';
import { SetCompany } from '../userService';

const useMutateCompany = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const mutationFunction = SetCompany.create;
  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<Company>,
    AxiosError<ResponseData<Company>>,
    Company
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries('get-Company');
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

export default useMutateCompany;
