export enum Degree {
  doctor = 'Tiến sĩ',
  master = 'Thạc sĩ',
  bachelor = 'Cử nhân',
  associate = 'Cao đẳng',
  intermediate = 'Trung cấp',
  highSchool = 'Trung học',
  other = 'Khác'
}
export enum UserRole {
  Employee = 'EMPLOYEE',
  Employer = 'EMPLOYER',
  Admin = 'ADMIN'
}

export enum Sex {
  Male = 'Nam',
  Female = 'Nữ',
  Other = 'Khác'
}

export enum EmploymentType {
  FulltimePermanent = 'Toàn thời gian cố định',
  FulltimeTemporary = 'Toàn thời gian tạm thời',
  ParttimePermanent = 'Bán thời gian cố định',
  ParttimeTemporary = 'Bán thời gian tạm thời',
  ConsultingContract = 'Theo hợp đồng tư vấn',
  Internship = 'Thực tập',
  Other = 'Khác'
}

export enum Experience {
  OverFive = 'Trên 5 năm',
  Five = '5 năm',
  Four = '4 năm',
  Three = '3 năm',
  Two = '2 năm',
  One = '1 năm',
  UnderOne = 'Dưới 1 năm',
  Zero = 'Chưa có kinh nghiệm'
}

export enum PositionLevel {
  ExecutiveManagement = 'Quản lí cấp cao',
  MiddleManagement = 'Quản lí cấp trung',
  TeamLeader = 'Quản lí nhóm-giám sát',
  Specialist = 'Chuyên gia',
  Employee = 'Chuyên viên - nhân viên',
  Contributor = 'Cộng tác viên'
}
export enum ApprovalStatus {
  approved = 'Đã duyệt',
  pending = 'Chờ duyệt',
  rejected = 'Từ chối',
  expired = 'Hết hạn'
}

export enum ApplicationType {
  online_profile = 'online_profile',
  attached_document = 'attached_document',
  cv_enclosed = 'cv_enclosed'
}
