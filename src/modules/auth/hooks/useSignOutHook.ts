import { useApp } from 'src/modules/app/hooks';
import useDocumentHook from 'src/modules/jobProfile/attachedDocument/hooks/useDocumentHook';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';

const useSignOutHook = () => {
  const { setAccessTokenApp, resetUserApp } = useApp();
  const { resetDocumentProfile } = useDocumentHook();
  const { resetOnlineProfile } = useOnlineProfile();
  const signOut = () => {
    resetUserApp();
    resetDocumentProfile();
    resetOnlineProfile();
    setAccessTokenApp(null);
    localStorage.clear();
  };
  return signOut;
};

export default useSignOutHook;
