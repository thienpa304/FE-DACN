import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';

import { User, Employee } from 'src/modules/users/model';

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
  work_experiences: WorkExperience[];
  education_informations: EducationInformation[];
  another_degrees: AnotherDegree[];
};

export type WorkExperience = {
  id: number;
  jobTitle: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
  isDoing: boolean;
  jobDescription: string;
  onlineProfileUserId: number;
};

export type EducationInformation = {
  id: number;
  schoolName: string;
  specialization: string;
  degreeName: string;
  startDate: Date;
  endDate: Date;
  onlineProfileUserId: number;
};

export type AnotherDegree = {
  id: number;
  degreeName: string;
  level: string;
  onlineProfileUserId: number;
};

export type AttachedDocument = {
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
  CV: string;
  view: number;
  isHidden: boolean;
  employee: Employee;
};
