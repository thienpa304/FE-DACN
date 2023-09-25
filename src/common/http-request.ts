import Axios, { AxiosResponse } from 'axios';
export interface ResponseData<K = unknown> {
  data: K;
  status: number;
  message: string;
}

const headerRequest = () => {
  const header: any = {
    'Content-Type': 'application/json'
  };
  const token = JSON.parse(localStorage.getItem('accessToken'));

  if (token && token !== 'undefined') {
    header.Authorization = `Bearer ${token}`;
  }
  return header;
};
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    ...headerRequest()
  }
});
