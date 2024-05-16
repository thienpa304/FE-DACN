import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AdminJobPostingsReportByQueryService } from '../adminService';
import dayjs from 'dayjs';

const useQueryJobPostingsReportByQuery = (params) => {
  const { data, isLoading } = useQuery<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>
  >(
    ['get-job-postings-report-by-query', params],
    () => AdminJobPostingsReportByQueryService.get({ params }),
    {
      keepPreviousData: true,
      retry: 1,
      refetchOnWindowFocus: false
    }
  );

  return {
    jobPostingData:
      data?.data?.map((item) => ({
        time: item?.time,
        'Tin đăng': item?.value
      })) || [],
    isLoading
  };
};

export default useQueryJobPostingsReportByQuery;
