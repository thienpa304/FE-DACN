import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { AnotherDegree } from 'src/modules/employee/model/index';
import { DegreeService } from 'src/modules/employee/profile/employeeService';

const useMutateDegree = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();

  const mutationFunction = DegreeService.create;

  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<AnotherDegree>,
    AxiosError<ResponseData<AnotherDegree>>,
    AnotherDegree
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success({ massage: res.message });
        queryClient.invalidateQueries('get-OnlineProfile');
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

export default useMutateDegree;
