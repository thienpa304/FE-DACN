import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { Employee } from 'src/modules/users/model';

export enum applicationType {
  online_profile = 'Nộp trực tuyến',
  attached_document = 'CV đính kèm'
}

export type ProfileShowType = Partial<OnlineProfile> &
  Partial<AttachedDocument> & {
    employee?: Omit<Employee, 'online_profile' | 'attached_document'>;
    applicationType?: applicationType;
  };
