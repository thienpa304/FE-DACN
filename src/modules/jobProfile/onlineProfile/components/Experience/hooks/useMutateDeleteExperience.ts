import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { ExperienceService } from 'src/modules/jobProfile/employeeService';
import { WorkExperience } from 'src/modules/jobProfile/model';

const useMutateDeleteExperience = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onDeleteDataById, isLoading } = useMutation<
    ResponseData<WorkExperience>,
    AxiosError<ResponseData<WorkExperience>>,
    string
  >((id) => ExperienceService.remove(id), {
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

export default useMutateDeleteExperience;
