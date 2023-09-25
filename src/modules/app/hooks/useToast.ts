import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { SnackBarState, selectSnackbar, setSnackbar } from '../appSlice';

const useToast = () => {
  const snackbar = useAppSelector(selectSnackbar);
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(setSnackbar({ open: false }));
  };
  const error = (data: Partial<SnackBarState>) => {
    dispatch(setSnackbar({ ...data, type: 'error', open: true }));
  };
  const success = (data: Partial<SnackBarState>) => {
    dispatch(setSnackbar({ ...data, type: 'success', open: true }));
  };
  return {
    success,
    error,
    close,
    ...snackbar
  };
};

export default useToast;
