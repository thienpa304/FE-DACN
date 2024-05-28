import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import {
  JobService,
  JobUpdateStatusService,
  JobViewService
} from '../jobService';
import { useApp } from 'src/modules/app/hooks';
import { useEffect, useState } from 'react';
import useJob from './useJob';

export default function useQueryJobByIdByAdmin(id) {
  if (!id) return {};
  const { isAdmin } = useApp();
  const { setItemDetail, itemDetail } = useJob();
  const { data, isLoading, isFetching } = useQuery<
    ResponseData<Job>,
    AxiosError<ResponseData<Job>>
  >(
    ['job-getByIdByAdmin', id],
    async () => JobUpdateStatusService.getById(id),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: isAdmin
    }
  );

  useEffect(() => {
    if (data?.data) {
      const jobData = {
        ...data?.data,
        sex: data?.data?.sex === null ? 'Tất cả' : data?.data?.sex
      };
      setItemDetail(jobData);
    }
  }, [JSON.stringify(data)]);

  return {
    data: itemDetail,
    isLoading,
    isFetching
  };
}
