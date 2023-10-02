export const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
};
export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};
