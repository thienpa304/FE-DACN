import { useEffect, useState } from 'react';
import { Role, User } from 'src/modules/users/model';
import { getAccessToken } from 'src/utils/localStorage';
import { ProfileService } from '../../auth/authService';

const useProfileHook = () => {
  const [data, setData] = useState<Partial<User>>();

  useEffect(() => {
    if (getAccessToken()) getProfile();
    else setData({role: Role.EMPLOYEE})
  }, []);

  const getProfile = () => {
    ProfileService.get().then((res) => setData(res.data));
  };
  return {
    profile: data
  };
};

export default useProfileHook;
