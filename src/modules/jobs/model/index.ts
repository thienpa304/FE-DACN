import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel,
  Sex
} from 'src/interfaces/enum';

export type Job = {
  postId: number;
  name: string;
  email: string;
  phone: string;
  contactAddress: string;
  workAddress: string;
  jobTitle: string;
  profession: string;
  employmentType: EmploymentType;
  degree: Degree;
  experience: Experience;
  positionLevel: PositionLevel;
  minAge: number;
  maxAge: number;
  sex: Sex;
  numberofVacancies: number;
  trialPeriod: number;
  applicationDeadline: Date;
  minSalary: number;
  maxSalary: number;
  skills: string;
  jobDescription: string;
  jobRequirements: string;
  benefits: string;
};
