import React from 'react';
import { setAccessToken, setUser } from 'src/modules/app/appSlice';
import { useAppDispatch } from 'src/redux/hooks';

const useSignOutHook = () => {
  const dispatch = useAppDispatch();
  const signOut = () => {
    dispatch(setUser({}));
    dispatch(setAccessToken(null));
  };
  return signOut;
};

export default useSignOutHook;
