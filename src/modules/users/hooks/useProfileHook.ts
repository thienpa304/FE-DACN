import React from 'react';
import { useQuery } from 'react-query';
import { ProfileService } from '../../auth/authService';
import { ResponseData } from 'src/common';
import { User } from 'src/modules/users/model';
import { AxiosError } from 'axios';

const useProfileHook = () => {
  const { isLoading, error, data } = useQuery<
    ResponseData<User>,
    AxiosError<ResponseData<User>>
  >(['useProfile'], ProfileService.get);

  return {
    profile: data?.data,
    isLoading
  };
};

export default useProfileHook;
