import { useAppUser } from 'src/modules/app/hooks';

const useSignOutHook = () => {
  const { setAccessTokenApp, resetUserApp } = useAppUser();
  const signOut = () => {
    resetUserApp();
    setAccessTokenApp(null);
    localStorage.clear();
  };
  return signOut;
};

export default useSignOutHook;
