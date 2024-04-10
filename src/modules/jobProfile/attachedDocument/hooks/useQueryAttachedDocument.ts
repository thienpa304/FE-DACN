import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AttachedDocument } from 'src/modules/jobProfile/model/index';
import { AttachedDocumentService } from 'src/modules/jobProfile/employeeService';
import { useEffect, useState } from 'react';
import { getAccessToken } from 'src/utils/localStorage';
import { useApp } from 'src/modules/app/hooks';
import useAttachedDocument from './useDocument';

const useQueryAttachedDocument = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isEmployee } = useApp();
  const { setProfile } = useAttachedDocument();

  const { data, isLoading, isSuccess } = useQuery<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>
  >(['get-AttachedDocument'], AttachedDocumentService.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn && isEmployee
  });

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // Handle the data or error here
    if (data) {
      setProfile(data.data);
    }
  }, [isSuccess]);

  return {
    attachedDocument: data?.data,
    isLoading
  };
};

export default useQueryAttachedDocument;
