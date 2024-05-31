import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectFollowJobList,
  setFollowJobList as setFollowJobListAction,
  resetFollowJobList as reset
} from '../followJobSlice';

const useFollowJobList = () => {
  const { data: followJobsList } = useAppSelector(selectFollowJobList);
  const dispatch = useAppDispatch();

  const setFollowJobList = (data: number[]) => {
    dispatch(setFollowJobListAction(data));
  };

  const resetFollowJobList = () => {
    dispatch(reset());
  };

  return {
    followJobsList,
    setFollowJobList,
    resetFollowJobList
  };
};

export default useFollowJobList;
