import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { WorkExperience } from 'src/modules/employee/model/index';
import { WorkExperienceService } from 'src/modules/employee/profile/employeeService';

const useMutateExperience = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();

  const mutationFunction = WorkExperienceService.create;

  const { mutate: onSaveExperienceData, isLoading } = useMutation<
    ResponseData<WorkExperience>,
    AxiosError<ResponseData<WorkExperience>>,
    WorkExperience
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
    onSaveExperienceData,
    isLoading
  };
};

export default useMutateExperience;
