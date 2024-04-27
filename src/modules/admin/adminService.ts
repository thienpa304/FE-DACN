import BaseService from 'src/common/base-service';

export const AdminJobPostingsReportService = new BaseService(
  'admin/get-job-postings-report'
);
export const AdminEmployeesService = new BaseService('admin/employees');
export const AdminEmployeesTotalResultService = new BaseService(
  'admin/employees/totalResults'
);
export const AdminCandidateStatisticsService = new BaseService(
  'admin/candidate-statistics'
);
export const DeleteUserService = new BaseService('users');

export const SendEmailService = new BaseService('admin/send-email');

export const GetEmailService = new BaseService('admin/search-email-or-name');
