import Axios, { AxiosResponse } from 'axios';
export interface ResponseData<K = unknown> {
  data: K;
  status: number;
  message: string;
}

export interface PaginationType<K = unknown> {
  items: K;
  meta: {
    totalItems: number;
    itemCount: number;
    itemPerPage: number;
    totalPages: number;
    currentPage: number;
  };
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

const httpRequest = Axios.create({
  baseURL: process.env.REACT_APP_URL_API
});
httpRequest.interceptors.request.use(
  function (config) {
    config.headers = headerRequest();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
httpRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpRequest;
