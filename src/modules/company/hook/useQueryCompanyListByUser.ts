import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompanyList } from '../../users/userService';

const useQueryCompanyListByUser = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<Company>,
    AxiosError<ResponseData<Company>>
  >(['get-CompanyList', params?.page], () => GetCompanyList.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    companyList: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryCompanyListByUser;
