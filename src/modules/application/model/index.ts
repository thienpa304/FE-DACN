import { ApplicationType, ApprovalStatus } from 'src/constants/enum';
import { AttachedDocument } from 'src/modules/jobProfile/model';
import { OnlineProfile } from 'src/modules/jobProfile/model';
import { Job } from 'src/modules/jobs/model';
import { Employee } from 'src/modules/users/model';

export type Application = {
  application_id: number;
  postId: number;
  applicationType: ApplicationType;
  CV: string | OnlineProfile | AttachedDocument;
  name: string;
  email: string;
  phone: string;
  status: ApprovalStatus;
  employee: Employee;
  jobPosting: Job;
};
