import { ApplicationType, ApprovalStatus } from 'src/constants/enum';
import { Job } from 'src/modules/jobs/model';
import { Employee } from 'src/modules/users/model';

export type Application = {
  application_id: number;
  postId: number;
  applicationType: ApplicationType;
  CV: string;
  name: string;
  email: string;
  phone: string;
  status: ApprovalStatus;
  employee: Employee;
  jobPosting: Job;
};
