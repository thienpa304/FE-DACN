import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectApplicationList,
  setApplicationList as setApplicationListAction,
  resetApplicationList as reset
} from '../applicationSlice';
import { Application } from '../model';

const useApplicationList = () => {
  const { data: applicationList } = useAppSelector(selectApplicationList);
  const dispatch = useAppDispatch();

  const setApplicationList = (data: Partial<Application[]>) => {
    dispatch(setApplicationListAction(data));
  };

  const resetApplicationList = () => {
    dispatch(reset());
  };

  return {
    applicationList,
    setApplicationList,
    resetApplicationList
  };
};

export default useApplicationList;
