import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { EducationService } from 'src/modules/jobProfile/employeeService';
import { EducationInformation } from 'src/modules/jobProfile/model';

const useMutateDeleteEducation = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onDeleteDataById, isLoading } = useMutation<
    ResponseData<EducationInformation>,
    AxiosError<ResponseData<EducationInformation>>,
    string
  >((id) => EducationService.remove(id), {
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

export default useMutateDeleteEducation;
