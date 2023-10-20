import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';
import { Application } from 'src/modules/application/model';

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
};

export type Employee = {
  userId: number;

  isMarried: boolean | string;

  user: User;

  online_profile: OnlineProfile;

  attached_document: AttachedDocument;

  applications: Application[];
};

export type OnlineProfile = {
  userId: number;

  jobTitle: string;

  profession: string;

  currentPosition: PositionLevel;

  desiredPosition: PositionLevel;

  desiredSalary: number;

  degree: Degree;

  workAddress: string;

  experience: Experience;

  employmentType: EmploymentType;

  careerGoal: string;

  skills: string;

  view: number;

  isHidden: boolean;

  employee: Employee;
};

export type AttachedDocument = {};
