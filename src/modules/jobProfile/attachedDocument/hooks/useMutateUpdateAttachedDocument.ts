import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { AttachedDocumentService } from 'src/modules/jobProfile/employeeProfileService';
import { AttachedDocument } from 'src/modules/jobProfile/model/index';
import { useNavigate } from 'react-router';

const useMutateUpdateAttachedDocument = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { toast } = useApp();

  const { mutate: onUpdateData, isLoading } = useMutation<
    ResponseData<AttachedDocument>,
    AxiosError<ResponseData<AttachedDocument>>,
    AttachedDocument
  >((data) => AttachedDocumentService.updateWithoutId(data), {
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
    onUpdateData,
    isLoading
  };
};

export default useMutateUpdateAttachedDocument;
