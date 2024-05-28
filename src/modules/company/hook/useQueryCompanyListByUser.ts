import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompanyList } from '../../users/userService';
import useCompanyList from './useCompanyList';

const useQueryCompanyListByUser = (params?) => {
  const { setCompanyList } = useCompanyList();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<Company[]>>,
    AxiosError<ResponseData<Company[]>>
  >(
    ['get-CompanyList', params],
    () =>
      GetCompanyList.get({ params }).then((res) => {
        if (res.data?.meta?.itemCount) {
          const idList = res?.data?.items?.map((item) => item.userId);
          setCompanyList(idList);
        }
        return res;
      }),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    companyList: data?.data?.items,
    totalPages: data?.data?.meta?.totalPages,
    totalItems: data?.data?.meta?.totalItems,
    isLoading,
    refetch
  };
};

export default useQueryCompanyListByUser;
