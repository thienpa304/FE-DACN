import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { DegreeService } from 'src/modules/jobProfile/employeeProfileService';
import { AnotherDegree } from 'src/modules/jobProfile/model';

const useMutateUpdateDegree = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onSaveDataById, isLoading } = useMutation<
    ResponseData<AnotherDegree>,
    AxiosError<ResponseData<AnotherDegree>>,
    [id: string, data: AnotherDegree]
  >(([id, data]) => DegreeService.update(id, data), {
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
    onSaveDataById,
    isLoading
  };
};

export default useMutateUpdateDegree;
