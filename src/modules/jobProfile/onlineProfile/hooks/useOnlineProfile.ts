import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { OnlineProfile } from '../../model';
import {
  selectOnlineProfile,
  setProfile as setProfileAction,
  resetProfile
} from '../profileSlice';

const useOnlineProfile = () => {
  const { profile } = useAppSelector(selectOnlineProfile);
  const dispatch = useAppDispatch();

  const setProfile = (data: Partial<OnlineProfile>) => {
    dispatch(setProfileAction(data));
  };

  const resetOnlineProfile = () => {
    dispatch(resetProfile());
  };

  return {
    profile,
    setProfile,
    resetOnlineProfile
  };
};

export default useOnlineProfile;
