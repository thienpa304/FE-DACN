import BaseService from 'src/common/base-service';

export const GetEmployeeService = new BaseService('employer/employees');
export const GetEmployeeTotalResultService = new BaseService(
  'employer/employees/totalResults'
);
export const RecommendEmployeeService = new BaseService(
  'employer/employees/sortbykeywords'
);
export const FollowEmployeesService = new BaseService('employer/save-employee');

export const GetEmployeeOnlineProfileService = new BaseService(
  'user/online-profile'
);

export const GetEmployeeDocumentProfileService = new BaseService(
  'user/attached-document'
);
