import Axios from 'axios';

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

export default Axios.create({
  baseURL: process.env.URL_API,
  headers: {
    ...headerRequest()
  }
});
