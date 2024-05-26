import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { PaginationType, ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { FollowCompanyService } from '../CompanyService';
import { useApp } from 'src/modules/app/hooks';
import useFollowCompanyList from './useFollowCompanyList';

interface ResponseType {
  employeeId: number;
  employerId: number;
  createAt: string;
  employer: Company;
}

const useQueryFollowCompany = (params?) => {
  const { isEmployee } = useApp();
  const { setFollowCompanyList } = useFollowCompanyList();
  const { data, isLoading, refetch } = useQuery<
    ResponseData<PaginationType<ResponseType[]>>,
    AxiosError<ResponseData<ResponseType[]>>
  >(
    ['get-FollowCompany', params],
    () =>
      FollowCompanyService.get({ params }).then((res) => {
        if (res.data?.meta?.itemCount) {
          console.log('res?.data?.items', res?.data?.items);

          const idList = res?.data?.items?.map((item) => item.employerId);
          setFollowCompanyList(idList);
        }
        return res;
      }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isEmployee
    }
  );

  return {
    companyFollow: data?.data?.items,
    totalPages: data?.data?.meta?.totalPages,
    isLoading,
    refetch
  };
};

export default useQueryFollowCompany;
