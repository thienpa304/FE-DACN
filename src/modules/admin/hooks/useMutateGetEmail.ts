import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { GetEmailService } from '../adminService';
import { EmailResponseType } from '../model';
import { useApp } from 'src/modules/app/hooks';
import { useState } from 'react';

type recipientKeywords = {
  keyword: string;
};

const useMutateGetEmail = () => {
  const [emailList, setEmailList] = useState([]);
  const { toast } = useApp();
  const { isLoading, mutate } = useMutation<
    ResponseData<EmailResponseType[]>,
    AxiosError<ResponseData<EmailResponseType[]>>,
    recipientKeywords
  >(['get-Email'], (data) => GetEmailService.create(data), {
    onSuccess: (res) => {
      if (res.status === 200) {
        setEmailList(res.data);
      } else {
        toast.error({ massage: res.message });
      }
    },
    onError: (error) => {
      toast.error({ massage: error.response.data.message });
    }
  });

  return {
    inputRecipientKeywords: mutate,
    emailList: emailList,
    isLoading
  };
};

export default useMutateGetEmail;
