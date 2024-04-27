import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { useApp } from 'src/modules/app/hooks';
import { SendEmailService } from '../adminService';
import { EmailSendType } from '../model';
import { useState } from 'react';

const useMutateSendEmail = () => {
  const { toast } = useApp();
  const [emailList, setEmailList] = useState([]);
  const { mutate: onSendEmail, isLoading } = useMutation<
    ResponseData<EmailSendType>,
    AxiosError<ResponseData<EmailSendType>>,
    EmailSendType
  >((data) => SendEmailService.create(data), {
    onSuccess: (res) => {
      if (res.status === 200) {
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
    onSendEmail,
    isLoading
  };
};

export default useMutateSendEmail;
