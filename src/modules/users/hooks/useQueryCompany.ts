import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Company } from 'src/modules/users/model';
import { GetCompany } from '../userService';

const useQueryCompany = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Company>,
    AxiosError<ResponseData<Company>>
  >('get-Company', GetCompany.get, {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    company: data?.data,
    isLoading
  };
};

export default useQueryCompany;
