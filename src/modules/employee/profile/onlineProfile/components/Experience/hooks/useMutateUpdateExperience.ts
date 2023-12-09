import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { ExperienceService } from 'src/modules/employee/profile/employeeService';
import { WorkExperience } from 'src/modules/employee/model';

const useMutateUpdateExperience = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onSaveDataById, isLoading } = useMutation<
    ResponseData<WorkExperience>,
    AxiosError<ResponseData<WorkExperience>>,
    [id: string, data: WorkExperience]
  >(([id, data]) => ExperienceService.update(id, data), {
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

export default useMutateUpdateExperience;
