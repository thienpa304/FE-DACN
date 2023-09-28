export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  EMPLOYER = 'EMPLOYER'
}
export type User = {
  userId: string;
  email: string;
  role: Role;
};
