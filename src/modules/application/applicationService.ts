import BaseService from 'src/common/base-service';

export const ApplicationService = new BaseService('employee/applications');
export const CandidateProfilesService = new BaseService(
  'employer/applications'
);
export const UpdateStatusService = new BaseService('employer/applications');
