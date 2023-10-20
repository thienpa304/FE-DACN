import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { OnlineProfileService } from '../userService';
import { OnlineProfile } from '../model';

const useUpdateOnlineProfile = () => {
  const { toast } = useApp();
  const { mutate: onUpdateData, isLoading } = useMutation<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>,
    [id: string, data: OnlineProfile]
  >((data) => OnlineProfileService.updateAtEndPoint(data), {
    onSuccess: (res) => {
      if (res.status === 200) {
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
