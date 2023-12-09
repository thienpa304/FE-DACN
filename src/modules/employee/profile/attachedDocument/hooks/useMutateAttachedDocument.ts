import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocument } from 'src/modules/employee/model';
import { AttachedDocumentService } from 'src/modules/employee/profile/employeeService';
import { useNavigate } from 'react-router';

const useMutateAttachedDocument = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { toast } = useApp();

  const mutationFunction = AttachedDocumentService.create;

  const { mutate: onSaveData, isLoading } = useMutation<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>,
    AttachedDocument
  >(mutationFunction, {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries('get-AttachedDocument');
        toast.success({ massage: res.message });
        navigate('/employee/recruitment-profile');
      } else {
        toast.error({ massage: res.message });
      }
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });
  return {
    onSaveData,
    isLoading
  };
};

export default useMutateAttachedDocument;
