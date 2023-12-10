import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';
import { Application } from 'src/modules/application/model';
import { OnlineProfile, AttachedDocument } from 'src/modules/jobProfile/model';

export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  EMPLOYER = 'EMPLOYER'
}

export type User = {
  userId: number;
  email: string;
  role: Role;
  dob: string | Date;
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
  logo: string;
};

export type Employee = {
  userId: number;
  isMarried: boolean | string;
  user: User;
  online_profile: OnlineProfile;
  attached_document: AttachedDocument;
  applications: Application[];
};
