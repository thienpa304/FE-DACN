import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AdminJobPostingsReportService } from '../adminService';

const useQueryJobPostingsReport = () => {
  const { data, isLoading } = useQuery<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>
  >(['get-job-postings-report'], () => AdminJobPostingsReportService.get({}), {
    keepPreviousData: true,
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    jobPostingData: data?.data?.map((item) => ({ ...item })) || [],
    isLoading
  };
};

export default useQueryJobPostingsReport;
