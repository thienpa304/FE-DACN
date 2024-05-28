import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectJob,
  setItemDetail as setItemDetailAction,
  resetItemDetail as resetItemDetailAction
} from '../jobSlice';
import { Job } from '../model';

const useJob = () => {
  const { itemDetail } = useAppSelector(selectJob);
  const dispatch = useAppDispatch();

  const setItemDetail = (data: Partial<Job>) => {
    dispatch(setItemDetailAction(data));
  };

  const resetItemDetail = () => {
    dispatch(resetItemDetailAction());
  };

  return {
    itemDetail,
    setItemDetail,
    resetItemDetail
  };
};

export default useJob;
