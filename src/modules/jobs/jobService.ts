import BaseService from 'src/common/base-service';

export const JobViewService = new BaseService('job-postings');
export const JobService = new BaseService('employer/job-postings');
export const JobUpdateStatusService = new BaseService('admin/job-postings');
