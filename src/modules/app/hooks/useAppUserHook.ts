import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { selectUser, setAccessToken, setUser } from '../appSlice';
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
  return {
    ...user,
    setUserApp,
    setAccessTokenApp
  };
};

export default useAppUser;
