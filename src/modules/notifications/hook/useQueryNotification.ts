import { NotificationService } from '../notificationService';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { PaginationType, ResponseData } from 'src/common';
import { Notification } from '../model';

export const useQueryNotification = (params?) => {
  const { data, isLoading } = useQuery<
    ResponseData<PaginationType<Notification[]>>,
    AxiosError<ResponseData<Notification[]>>
  >(['get-notifications', params], () => NotificationService.get({ params }), {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    notificationList: data?.data?.items,
    totalPages: data?.data?.meta?.totalPages,
    isLoading
  };
};
