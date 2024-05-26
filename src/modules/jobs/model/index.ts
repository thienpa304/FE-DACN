import { Option } from 'src/components/SelectInput';
import { PROFESSION } from 'src/constants';
import {
  ApprovalStatus,
  Degree,
  EmploymentType,
  Experience,
  PositionLevel,
  Sex
} from 'src/constants/enum';
import { Company } from 'src/modules/users/model';

type ProfessionsType = {
  value: string;
  label: string;
};

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
  sex: string;
  status: ApprovalStatus;
  numberOfVacancies: number;
  trialPeriod: number;
  applicationDeadline: string;
  minSalary: number;
  maxSalary: number;
  skills: string;
  jobDescription: string;
  jobRequirements: string;
  benefits: string;
  createAt: Date;
  submissionCount: number;
  view: number;
  isHidden: boolean;
  employer: Company;
  requiredSkills: string;
  keywords: string;
  check: boolean;
};

export type FollowJobType = Partial<Job> & Partial<Company>;
