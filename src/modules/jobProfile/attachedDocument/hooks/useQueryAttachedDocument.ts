import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AttachedDocument } from 'src/modules/jobProfile/model/index';
import { AttachedDocumentService } from 'src/modules/jobProfile/employeeProfileService';
import { useEffect, useState } from 'react';
import { getAccessToken } from 'src/utils/localStorage';
import { useApp } from 'src/modules/app/hooks';
import useDocumentHook from './useDocumentHook';

const useQueryAttachedDocument = () => {
  const { isEmployee } = useApp();
  const { setProfile } = useDocumentHook();
  const isLoggedIn = Boolean(getAccessToken());

  const { data, isLoading, isSuccess, refetch } = useQuery<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>
  >(['get-AttachedDocument'], AttachedDocumentService.get, {
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn && isEmployee
  });

  useEffect(() => {
    // Handle the data or error here
    if (data) {
      setProfile(data.data);
    }
  }, [isSuccess]);

  return {
    attachedDocument: data?.data,
    isLoading,
    refetch
  };
};

export default useQueryAttachedDocument;
