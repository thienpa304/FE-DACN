import BaseService from 'src/common/base-service';

export const JobViewService = new BaseService('job-postings');
export const TotalResults = new BaseService('job-postings/totalResults');
export const JobService = new BaseService('employer/job-postings');
export const JobUpdateStatusService = new BaseService('admin/job-postings');
export const TotalResultsByAdmin = new BaseService(
  'admin/job-postings/totalResults'
);
export const FollowJobService = new BaseService('employee/follow-job');
