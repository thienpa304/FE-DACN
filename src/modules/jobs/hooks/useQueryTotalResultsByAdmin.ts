import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { TotalResultsByAdmin } from '../jobService';

interface responseType {
    totalResults: number;
}

const useQueryTotalResultsByAdmin = () => {
    const { data, isLoading } = useQuery<
        ResponseData<responseType>,
        AxiosError<ResponseData<responseType>>
    >('get-TotalResults', TotalResultsByAdmin.get);

    return {
        totalResults: data?.data?.totalResults,
        isLoading
    };
};

export default useQueryTotalResultsByAdmin;
