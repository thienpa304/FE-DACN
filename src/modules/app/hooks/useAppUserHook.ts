import React from 'react';
import { useAppSelector } from 'src/redux/hooks';
import { selectUser } from '../appSlice';

const useAppUser = () => {
  const user = useAppSelector(selectUser);
  return {
    ...user
  };
};

export default useAppUser;
