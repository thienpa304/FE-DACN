import { Degree } from 'src/interfaces/enum';

export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  EMPLOYER = 'EMPLOYER'
}

export type User = {
  userId: string;
  email: string;
  role: Role;
  dob: string | Date ;
  sex: number | string;
  address: string;
  name: string;
  phone: string;
  avatar: string;
  degree: Degree | string;
  isMarried: boolean | string;
};

export type Company = {
  companyName: string;
  taxCode: string;
  companyLocation: string;
  careerField: string;
};
