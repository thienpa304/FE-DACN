import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { selectJob, setItemDetail as setItemDetailAction } from '../jobSlice';
import { Job } from '../model';

const useJob = () => {
  const { itemDetail } = useAppSelector(selectJob);
  const dispatch = useAppDispatch();

  const setItemDetail = (data: Partial<Job>) => {
    dispatch(setItemDetailAction(data));
  };

  return {
    itemDetail,
    setItemDetail
  };
};

export default useJob;
