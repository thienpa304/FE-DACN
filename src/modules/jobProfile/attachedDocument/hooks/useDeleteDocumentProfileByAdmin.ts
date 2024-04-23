import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocument } from 'src/modules/jobProfile/model/index';
import { RemoveDocumentProfileService } from 'src/modules/jobProfile/employeeProfileService';

const useDeleteDocumentProfileByAdmin = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const useMutateFunction = (id) => RemoveDocumentProfileService.remove(id);

  const { mutate: onDeleteDocumentProfile } = useMutation<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>,
    AttachedDocument
  >(useMutateFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['get-AllEmployees']);
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
    onDeleteDocumentProfile
  };
};

export default useDeleteDocumentProfileByAdmin;
