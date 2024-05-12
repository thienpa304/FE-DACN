import { useEffect, useState } from 'react';
import { getAccessToken } from 'src/utils/localStorage';
import { GetProfile } from '../userService';
import { useQuery } from 'react-query';

const useProfileHook = () => {
  const isLoggedIn = Boolean(getAccessToken());
  const { data, isLoading, refetch } = useQuery('get-Profile', GetProfile.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn
  });

  return {
    profile: data?.data,
    userProfile: data?.data,
    isLoading,
    refetch
  };
};

export default useProfileHook;
