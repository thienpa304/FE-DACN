import React from 'react';
import { useAppUser } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';

const useAuth = () => {
  const { role } = useAppUser();
  const isAdmin = () => role === Role.ADMIN;
  const isEmployee = () => role === Role.EMPLOYEE;
  const isEmployer = () => role === Role.EMPLOYER;
  return {
    isAdmin,
    isEmployee,
    isEmployer
  };
};

export default useAuth;
