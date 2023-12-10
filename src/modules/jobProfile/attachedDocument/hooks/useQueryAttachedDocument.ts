import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AttachedDocument } from 'src/modules/jobProfile/model/index';
import { AttachedDocumentService } from 'src/modules/jobProfile/employeeService';

const useQueryAttachedDocument = () => {
  const { data, isLoading } = useQuery<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>
  >('get-AttachedDocument', AttachedDocumentService.get, {
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    attachedDocument: data?.data,
    isLoading
  };
};

export default useQueryAttachedDocument;
