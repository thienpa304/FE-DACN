import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { WorkExperienceService } from '../employeeService';
import { OnlineProfile } from '../../users/model';

const useUpdateOnlineProfile = () => {
  const { toast } = useApp();
  const { mutate: onUpdateData, isLoading } = useMutation<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>,
    [id: string, data: OnlineProfile]
  >((data) => WorkExperienceService.updateAtEndPoint(data), {
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
