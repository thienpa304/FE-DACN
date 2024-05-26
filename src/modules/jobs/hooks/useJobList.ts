import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectJobList,
  setJobList as setJobListAction,
  resetJobList as reset
} from '../jobListSlice';

const useJobList = () => {
  const { data: jobList } = useAppSelector(selectJobList);
  const dispatch = useAppDispatch();

  const setJobList = (data: number[]) => {
    dispatch(setJobListAction(data));
  };

  const resetJobList = () => {
    dispatch(reset());
  };

  return {
    jobList,
    setJobList,
    resetJobList
  };
};

export default useJobList;
