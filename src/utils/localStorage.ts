export const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
};
