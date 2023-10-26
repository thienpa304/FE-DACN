import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { OnlineProfile } from 'src/modules/employee/model/index';
import { OnlineProfileService } from 'src/modules/employee/profile/employeeService';

const useMutateOnlineProfile = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();

  const mutationFunction = OnlineProfileService.create;

  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>,
    OnlineProfile
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries('get-OnlineProfile');
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

export default useMutateOnlineProfile;
