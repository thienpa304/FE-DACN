export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = LoginRequest & {
  confirmPassword: string;
};

export type RegisterResponse = LoginRequest & {
  userId: string;
};

export type LoginResponse = {
  userId: string;
  email: string;
  access_token: string;
};
