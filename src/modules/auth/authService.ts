import BaseService from 'src/common/base-service';

export const LoginService = new BaseService('auth/login');
export const LogoutService = new BaseService('/auth/logout');
export const RegisterService = new BaseService('auth/register');
export const ChangePasswordService = new BaseService('auth/change-password');
export const RequestResetService = new BaseService(
  'auth/request-password-reset'
);
export const ResetPasswordService = new BaseService('auth/reset-password');
