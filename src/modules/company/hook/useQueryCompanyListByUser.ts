import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompanyList } from '../../users/userService';

const useQueryCompanyListByUser = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<Company[]>>,
    AxiosError<ResponseData<Company[]>>
  >(['get-CompanyList', params], () => GetCompanyList.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    companyList: data?.data?.items,
    totalPages: data?.data?.meta.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryCompanyListByUser;
