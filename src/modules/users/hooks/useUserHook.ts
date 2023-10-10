import { useEffect, useState } from 'react';
import { Role, User } from 'src/modules/users/model';
import { getAccessToken } from 'src/utils/localStorage';
import { GetCompany, GetProfile } from '../userService';

const useProfileHook = () => {
  const [data, setData] = useState<Partial<User>>();

  useEffect(() => {
    if (getAccessToken()) getProfile();
  }, []);

  const getProfile = () => {
    GetProfile.get().then((res) => setData(res.data));
    GetCompany.get().then((res) => setData(res.data));
  };
  return {
    profile: data,
  };
};

export default useProfileHook;