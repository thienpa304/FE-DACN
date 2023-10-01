import { useAppUser } from 'src/modules/app/hooks';

const useSignOutHook = () => {
  const { setAccessTokenApp, setUserApp } = useAppUser();
  const signOut = () => {
    setUserApp({});
    setAccessTokenApp(null);
    localStorage.clear();
  };
  return signOut;
};

export default useSignOutHook;
