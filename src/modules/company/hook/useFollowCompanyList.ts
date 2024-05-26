import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectFollowCompanyList,
  setFollowCompanyList as setFollowCompanyListAction,
  resetFollowCompanyList as reset
} from '../followCompanySlice';

const useFollowCompanyList = () => {
  const { data: followCompanysList } = useAppSelector(selectFollowCompanyList);
  const dispatch = useAppDispatch();

  const setFollowCompanyList = (data: number[]) => {
    dispatch(setFollowCompanyListAction(data));
  };

  const resetFollowCompanyList = () => {
    dispatch(reset());
  };

  return {
    followCompanysList,
    setFollowCompanyList,
    resetFollowCompanyList
  };
};

export default useFollowCompanyList;
