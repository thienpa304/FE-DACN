import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { OnlineProfile } from '../../../model';
import {
  selectOnlineProfile,
  setProfile as setProfileAction
} from '../profileSlice';

const useOnlineProfile = () => {
  const { profile } = useAppSelector(selectOnlineProfile);
  const dispatch = useAppDispatch();

  const setProfile = (data: Partial<OnlineProfile>) => {
    dispatch(setProfileAction(data));
  };

  return {
    profile,
    setProfile
  };
};

export default useOnlineProfile;
