import { useApp } from 'src/modules/app/hooks';
import useAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useDocument';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';

const useSignOutHook = () => {
  const { setAccessTokenApp, resetUserApp } = useApp();
  const { resetDocumentProfile } = useAttachedDocument();
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
