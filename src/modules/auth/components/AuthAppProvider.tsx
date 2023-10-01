import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useAppUser } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';
import useProfileHook from '../../users/hooks/useProfileHook';

interface Props {
  children: React.ReactElement;
}
const AuthAppProvider: React.FC<Props> = ({ children }) => {
  const { setUserApp } = useAppUser();

  const { profile } = useProfileHook();

  useEffect(() => {
    if (profile) setUserApp(profile);
  }, [profile]);
  return children;
};

export default AuthAppProvider;
