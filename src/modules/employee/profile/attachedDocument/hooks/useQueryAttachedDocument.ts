import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { AttachedDocument } from 'src/modules/employee/model/index';
import { AttachedDocumentService } from 'src/modules/employee/profile/employeeService';

const useQueryAttachedDocument = () => {
  const { data, isLoading } = useQuery<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>
  >('get-AttachedDocument', AttachedDocumentService.get, { retry: 1, refetchOnWindowFocus: false });

  return {
    attachedDocument: data?.data,
    isLoading
  };
};

export default useQueryAttachedDocument;
