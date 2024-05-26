import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectCompanyList,
  setCompanyList as setCompanyListAction,
  resetCompanyList as reset
} from '../companyListSlice';

const useCompanyList = () => {
  const { data: companyList } = useAppSelector(selectCompanyList);
  const dispatch = useAppDispatch();

  const setCompanyList = (data: number[]) => {
    dispatch(setCompanyListAction(data));
  };

  const resetCompanyList = () => {
    dispatch(reset());
  };

  return {
    companyList,
    setCompanyList,
    resetCompanyList
  };
};

export default useCompanyList;
