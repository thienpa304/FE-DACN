import { AttachedDocument, OnlineProfile } from 'src/modules/jobProfile/model';
import { Employee } from 'src/modules/users/model';

export type ProfileShowType = OnlineProfile &
  AttachedDocument & {
    employee: Omit<Employee, 'online_profile' | 'attached_document'>;
  };
