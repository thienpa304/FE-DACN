import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { OnlineProfileService } from 'src/modules/employee/profile/employeeService';
import { OnlineProfile } from 'src/modules/employee/model/index';

const useUpdateOnlineProfile = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onUpdateData, isLoading } = useMutation<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>,
    OnlineProfile
  >((data) => OnlineProfileService.updateAtEndPoint(data), {
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
    onUpdateData,
    isLoading
  };
};

export default useUpdateOnlineProfile;
