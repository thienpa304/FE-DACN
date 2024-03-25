import { useEffect, useState } from 'react';
import { User } from 'src/modules/users/model';
import { getAccessToken } from 'src/utils/localStorage';
import { GetProfile } from '../userService';
import { useQuery } from 'react-query';

const useProfileHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data, isLoading } = useQuery('get-Profile', GetProfile.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn
  });

  useEffect(() => {
    if (getAccessToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return {
    profile: data?.data,
    userProfile: data?.data,
    isLoading
  };
};

export default useProfileHook;
