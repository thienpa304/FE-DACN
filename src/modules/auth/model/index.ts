import { Role, User } from 'src/modules/users/model';

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = LoginRequest & {
  confirmPassword: string;
  role: Role;
};

export type RegisterResponse = LoginRequest & {
  userId: string;
};

export type LoginResponse = {
  userData: User;
  access_token: string;
};
