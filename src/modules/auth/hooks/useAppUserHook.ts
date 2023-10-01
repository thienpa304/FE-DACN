import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  resetUser,
  selectUser,
  setAccessToken,
  setUser
} from '../../app/appSlice';
import { User } from 'src/modules/users/model';

const useAppUser = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const setUserApp = (userData: Partial<User>) => {
    dispatch(setUser(userData));
  };
  const setAccessTokenApp = (access_token: string) => {
    dispatch(setAccessToken(access_token));
  };

  const resetUserApp = () => {
    dispatch(resetUser());
  };
  return {
    ...user,
    setUserApp,
    setAccessTokenApp,
    resetUserApp
  };
};

export default useAppUser;
