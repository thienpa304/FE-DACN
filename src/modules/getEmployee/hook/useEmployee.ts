import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectEmployee,
  setEmployee as setEmployeeAction,
  resetEmployee as resetEmployeeAction
} from '../employeeSlice';
import { ProfileShowType } from '../model';

const useEmployee = () => {
  const { employeeDetail } = useAppSelector(selectEmployee);
  const dispatch = useAppDispatch();

  const setEmployeeDetail = (data: Partial<ProfileShowType>) => {
    dispatch(setEmployeeAction(data));
  };
  const resetEmployeeDetail = () => {
    dispatch(resetEmployeeAction());
  };

  return {
    employeeDetail,
    setEmployeeDetail,
    resetEmployeeDetail
  };
};

export default useEmployee;
