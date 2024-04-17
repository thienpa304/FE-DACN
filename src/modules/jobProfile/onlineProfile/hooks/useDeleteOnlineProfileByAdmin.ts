import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { OnlineProfile } from 'src/modules/jobProfile/model/index';
import { RemoveOnlineProfileService } from 'src/modules/jobProfile/employeeProfileService';

const useDeleteOnlineProfileByAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const useMutateFunction = (id) => RemoveOnlineProfileService.remove(id);

  const { mutate: onDeleteOnlineProfile } = useMutation<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>,
    OnlineProfile
  >(useMutateFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['get-AllEmployees']);
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
    onDeleteOnlineProfile
  };
};

export default useDeleteOnlineProfileByAdmin;
