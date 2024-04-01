import BaseService from 'src/common/base-service';

export const UploadAvatar = new BaseService('user/upload-avatar');
export const GetCompanyInfoByUser = new BaseService(
  'get-information-company-by-user'
);
export const GetCompanyList = new BaseService('get-all-company-by-user');

export const GetProfile = new BaseService('get-profile');
export const SetProfile = new BaseService('edit-profile');

export const GetCompany = new BaseService('get-information-company');
export const SetCompany = new BaseService('edit-information-company');
export const UploadLogo = new BaseService('user/upload-logo');
export const UploadBanner = new BaseService('user/upload-banner');

export const GetAllUser = new BaseService('admin/get-all-user');
export const GetTotalResultByAdmin = new BaseService('admin/get-total-user');
