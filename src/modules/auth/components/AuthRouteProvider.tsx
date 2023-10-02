import React from 'react';
import { Navigate } from 'react-router';
import { useApp } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';

interface Props {
  children: React.ReactElement;
  role: Role[];
}
const AuthRouteProvider: React.FC<Props> = ({ children, role }) => {
  const { user, accessToken } = useApp();
  if (!role.includes(user.role) && (user.userId || !accessToken))
    return <Navigate to="/" replace />;
  return children;
};

export default AuthRouteProvider;
