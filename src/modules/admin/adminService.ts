import BaseService from 'src/common/base-service';

export const AdminJobPostingsReportService = new BaseService(
  'admin/get-job-postings-report'
);
export const AdminEmployeesService = new BaseService('admin/employees');
export const AdminEmployeesTotalResultService = new BaseService(
  'admin/employees/totalResults'
);
