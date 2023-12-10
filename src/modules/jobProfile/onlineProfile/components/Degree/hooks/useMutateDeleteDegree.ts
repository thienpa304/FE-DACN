import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { DegreeService } from 'src/modules/jobProfile/employeeService';
import { AnotherDegree } from 'src/modules/jobProfile/model';

const useMutateDeleteDegree = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onDeleteDataById, isLoading } = useMutation<
    ResponseData<AnotherDegree>,
    AxiosError<ResponseData<AnotherDegree>>,
    string
  >((id) => DegreeService.remove(id), {
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
    onDeleteDataById,
    isLoading
  };
};

export default useMutateDeleteDegree;
