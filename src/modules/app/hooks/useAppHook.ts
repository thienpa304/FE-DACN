import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  SnackBarState,
  resetUser,
  selectAccessToken,
  selectSnackbar,
  selectUser,
  setAccessToken,
  setSnackbar,
  setUser
} from '../appSlice';
import { Role, User } from 'src/modules/users/model';

const useApp = () => {
  const user = useAppSelector(selectUser);
  const accessToken = useAppSelector(selectAccessToken);
  const snackbar = useAppSelector(selectSnackbar);
  const dispatch = useAppDispatch();
  // user
  const isAdmin = user.role === Role.ADMIN;
  const isEmployee = user.role === Role.EMPLOYEE;
  const isEmployer = user.role === Role.EMPLOYER;

  const setUserApp = (userData: Partial<User>) => {
    dispatch(setUser(userData));
  };
  const setAccessTokenApp = (access_token: string) => {
    dispatch(setAccessToken(access_token));
  };
  const resetUserApp = () => {
    dispatch(resetUser());
  };

  // toast
  const close = () => {
    dispatch(setSnackbar({ open: false }));
  };
  const error = (data: Partial<SnackBarState>) => {
    dispatch(setSnackbar({ ...data, type: 'error', open: true }));
  };
  const success = (data: Partial<SnackBarState>) => {
    dispatch(setSnackbar({ ...data, type: 'success', open: true }));
  };

  return {
    user,
    accessToken,
    isAdmin,
    isEmployee,
    isEmployer,
    setUserApp,
    setAccessTokenApp,
    resetUserApp,
    snackbar,
    toast: {
      success,
      error,
      close
    }
  };
};

export default useApp;