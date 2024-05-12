import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompanyList } from '../../users/userService';

type ReponseType = {
  companyList: Company[];
  totalCompany: number;
};

const useQueryCompanyListByUser = (params?) => {
  const { data, isLoading, refetch } = useQuery<
    ResponseData<ReponseType>,
    AxiosError<ResponseData<ReponseType>>
  >(['get-CompanyList', params?.page], () => GetCompanyList.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    companyList: data?.data?.companyList,
    totalResults: data?.data?.totalCompany,
    isLoading,
    refetch
  };
};

export default useQueryCompanyListByUser;
