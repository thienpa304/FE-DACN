import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { FollowCompanyService } from '../CompanyService';

const useMutateFollowCompanyById = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onFollowCompanyById, isLoading } = useMutation<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>,
    [id: number]
  >(([id]) => FollowCompanyService.create({ employerId: id }), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['get-FollowCompany']);
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
    onFollowCompanyById,
    isLoading
  };
};

export default useMutateFollowCompanyById;
