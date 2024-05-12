import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompany } from '../userService';
import { useApp } from 'src/modules/app/hooks';

const useQueryCompany = () => {
  const { isEmployer } = useApp();
  const { data, isLoading } = useQuery<
    ResponseData<Company>,
    AxiosError<ResponseData<Company>>
  >('get-Company', GetCompany.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isEmployer
  });

  return {
    company: data?.data,
    isLoading
  };
};

export default useQueryCompany;
