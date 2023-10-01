import React from 'react';
import { Navigate } from 'react-router';
import { useAppUser } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';

interface Props {
  children: React.ReactElement;
  role: Role[];
}
const AuthProvider: React.FC<Props> = ({ children, role }) => {
  const { role: roleApp } = useAppUser();
  if (roleApp && !role.includes(roleApp)) return <Navigate to="/" replace />;
  return children;
};

export default AuthProvider;
