import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocumentService } from 'src/modules/employee/profile/employeeService';
import { AttachedDocument } from 'src/modules/employee/model/index';

const useUpdateAttachedDocument = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onUpdateData, isLoading } = useMutation<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>,
    AttachedDocument
  >((data) => AttachedDocumentService.updateAtEndPoint(data), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries('get-AttachedDocument');
        toast.success({ massage: res.message });
      } else {
        toast.error({ massage: res.message });
      }
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    onUpdateData,
    isLoading
  };
};

export default useUpdateAttachedDocument;
