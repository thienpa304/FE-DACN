import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { FollowJobService } from '../jobService';

const useMutateFollowJobById = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onFollowJobById, isLoading } = useMutation<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>,
    [id: number]
  >(([id]) => FollowJobService.create({ jobPosting: id }), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['get-FollowJobs']);
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
    onFollowJobById,
    isLoading
  };
};

export default useMutateFollowJobById;
