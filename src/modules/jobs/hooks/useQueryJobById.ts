import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobViewService } from '../jobService';
import { useApp } from 'src/modules/app/hooks';
import { useEffect, useState } from 'react';
import alertDialog from 'src/utils/alertDialog';
import { useNavigate } from 'react-router';

export default function useQueryJobById(id) {
  if (!id) return {};
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useQuery<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>
  >(['job-getById', id], async () => JobViewService.getById(id), {
    retry: 1,
    refetchOnWindowFocus: false,
    onError(err) {
      alertDialog({
        message: 'Việc làm đã đóng hoặc không tồn tại',
        confirmButtonText: 'Trở về',
        handleConfirm: () => {
          navigate(-1);
        },
        hideCancelButton: true
      });
    }
  });

  const [job, setJob] = useState<Job>();

  useEffect(() => {
    if (data?.data) {
      const saveJob = {
        ...data?.data,
        sex: data?.data?.sex === null ? 'Tất cả' : data?.data?.sex
      };
      setJob(saveJob);
    }
  }, [JSON.stringify(data)]);

  return {
    data: job,
    isLoading,
    isFetching
  };
}
