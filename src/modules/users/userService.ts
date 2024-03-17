import BaseService from 'src/common/base-service';

export const GetProfile = new BaseService('get-profile');
export const SetProfile = new BaseService('edit-profile');
export const GetCompany = new BaseService('get-information-company');
export const SetCompany = new BaseService('edit-information-company');
export const UploadAvatar = new BaseService('user/upload-avatar');
export const UploadLogo = new BaseService('user/upload-logo');
