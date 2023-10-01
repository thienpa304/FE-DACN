import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ProfileService } from '../../auth/authService';
import { ResponseData } from 'src/common';
import { Role, User } from 'src/modules/users/model';
import { AxiosError } from 'axios';

const useProfileHook = () => {
  const [data, setData] = useState<Partial<User>>();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    ProfileService.get()
      .then((res) => setData(res.data))
      .catch((error) => {
        if (error?.response?.status === 401) setData({ role: Role.EMPLOYEE });
      });
  };
  return {
    profile: data
  };
};

export default useProfileHook;
