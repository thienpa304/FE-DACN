import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { FollowEmployeesService } from '../getEmployeeService';

const useMutateFollowEmployeeById = () => {
  const queryClient = useQueryClient();
  const { toast } = useApp();
  const { mutate: onFollowEmployeeById, isLoading } = useMutation<
    ResponseData<any[]>,
    AxiosError<ResponseData<any[]>>,
    [id: number]
  >(([id]) => FollowEmployeesService.create({ employeeId: id }), {
    onSuccess: (res) => {
      if (res.status === 200) {
        queryClient.invalidateQueries(['get-FollowEmployees']);
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
    onFollowEmployeeById,
    isLoading
  };
};

export default useMutateFollowEmployeeById;
