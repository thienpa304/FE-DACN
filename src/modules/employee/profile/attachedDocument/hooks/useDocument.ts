import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectDocument,
  setProfile as setProfileAction
} from '../documentSlice';
import { AttachedDocument } from '../../../model';

const useAttachedDocument = () => {
  const { profile } = useAppSelector(selectDocument);
  const dispatch = useAppDispatch();

  const setProfile = (data: Partial<AttachedDocument>) => {
    dispatch(setProfileAction(data));
  };

  return {
    profile,
    setProfile
  };
};

export default useAttachedDocument;
