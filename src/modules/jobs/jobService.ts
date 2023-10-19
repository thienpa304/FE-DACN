import BaseService from 'src/common/base-service';

export const JobService = new BaseService('job-postings');
export const JobOwnerService = new BaseService('job-postings/user');
export const JobUpdateStatusService = new BaseService('admin/job-postings');
