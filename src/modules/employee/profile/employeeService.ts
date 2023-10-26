import BaseService from 'src/common/base-service';

export const AttachedDocumentService = new BaseService(
  'employee/attached-document'
);
export const OnlineProfileService = new BaseService('employee/online-profile');
export const WorkExperienceService = new BaseService(
  'employee/online-profile/work-experience'
);
export const EducationService = new BaseService(
  'employee/online-profile/education-information'
);
export const DegreeService = new BaseService(
  'employee/online-profile/another-degree'
);
