import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { FollowCompanyService } from '../CompanyService';
import { useApp } from 'src/modules/app/hooks';

interface responseType {
  employeeId: number;
  email: string;
  followCompany: any[];
}

const useQueryFollowCompany = (params?) => {
  const { isEmployee } = useApp();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<responseType>,
    AxiosError<ResponseData<responseType>>
  >(
    ['get-FollowCompany', params?.page],
    () => FollowCompanyService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployee
    }
  );

  return {
    companyFollow: data?.data?.followCompany,
    isLoading,
    refetch
  };
};

export default useQueryFollowCompany;
