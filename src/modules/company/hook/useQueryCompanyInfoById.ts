import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompanyInfoByUser } from '../CompanyService';

const useQueryCompanyInfoById = (params: { employerId: string }) => {
  const { data, isLoading } = useQuery<
    ResponseData<Company>,
    AxiosError<ResponseData<Company>>
  >(
    ['get-CompanyInfo', params.employerId],
    () => GetCompanyInfoByUser.get({ params }),
    {
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    company: data?.data,
    isLoading
  };
};

export default useQueryCompanyInfoById;
