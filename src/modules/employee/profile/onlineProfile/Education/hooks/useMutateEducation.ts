import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { EducationInformation } from 'src/modules/employee/model/index';
import { EducationService } from 'src/modules/employee/profile/employeeService';

const useMutateEducation = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();

  const mutationFunction = EducationService.create;

  const { mutate: onSaveEducationData, isLoading } = useMutation<
    ResponseData<EducationInformation>,
    AxiosError<ResponseData<EducationInformation>>,
    EducationInformation
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
    onSaveEducationData,
    isLoading
  };
};

export default useMutateEducation;
