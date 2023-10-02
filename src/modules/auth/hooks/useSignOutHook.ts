import { useApp } from 'src/modules/app/hooks';

const useSignOutHook = () => {
  const { setAccessTokenApp, resetUserApp } = useApp();
  const signOut = () => {
    resetUserApp();
    setAccessTokenApp(null);
    localStorage.clear();
  };
  return signOut;
};

export default useSignOutHook;
