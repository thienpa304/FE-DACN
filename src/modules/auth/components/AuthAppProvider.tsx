import React, { useEffect } from 'react';
import { useApp } from 'src/modules/app/hooks';
import useProfileHook from '../../users/hooks/useUserHook';

interface Props {
  children: React.ReactElement;
}
const AuthAppProvider: React.FC<Props> = ({ children }) => {
  const { setUserApp } = useApp();

  const { profile } = useProfileHook();

  useEffect(() => {
    if (profile) setUserApp(profile);
  }, [profile]);
  return children;
};

export default AuthAppProvider;
