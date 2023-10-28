import { useEffect, useState } from 'react';
import { User } from 'src/modules/users/model';
import { getAccessToken } from 'src/utils/localStorage';
import { GetProfile } from '../userService';
import { useQuery } from 'react-query';

const useProfileHook = () => {
  const { data: userData, isLoading } = useQuery('get-Profile', GetProfile.get);
  const [data, setData] = useState<Partial<User>>();

  useEffect(() => {
    if (getAccessToken()) getProfile();
  }, []);

  const getProfile = () => {
    GetProfile.get().then((res) => setData(res.data));
  };
  return {
    profile: data,
    userProfile: userData?.data
  };
};

export default useProfileHook;
