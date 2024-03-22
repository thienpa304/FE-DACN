import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AttachedDocument } from 'src/modules/jobProfile/model/index';
import { AttachedDocumentService } from 'src/modules/jobProfile/employeeService';
import { useEffect, useState } from 'react';
import { getAccessToken } from 'src/utils/localStorage';

const useQueryAttachedDocument = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const { data, isLoading } = useQuery<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>
  >('get-AttachedDocument', AttachedDocumentService.get, {
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: isLoggedIn
  });

  return {
    attachedDocument: data?.data,
    isLoading
  };
};

export default useQueryAttachedDocument;
