import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { OnlineProfile } from 'src/modules/employee/model/index';
import { OnlineProfileService } from 'src/modules/employee/profile/employeeService';

const useQueryOnlineProfile = () => {
  const { data, isLoading } = useQuery<
    ResponseData<OnlineProfile>,
    AxiosError<ResponseData<OnlineProfile>>
  >('get-OnlineProfile', OnlineProfileService.get, {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    onlineProfile: data?.data,
    isLoading
  };
};

export default useQueryOnlineProfile;
