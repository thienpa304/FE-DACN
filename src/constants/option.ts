import {
  ApprovalStatus,
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';
import { Color } from 'src/types/mui-type';

type ApprovalStatusOption = {
  label: ApprovalStatus;
  value: keyof typeof ApprovalStatus;
  color: Color;
};

export const GENDER = [
  {
    value: 1,
    label: 'Nam'
  },
  {
    value: 2,
    label: 'Nữ'
  },
  {
    value: 0,
    label: 'Khác'
  }
];

export const ISMARRIED = [
  {
    value: 1,
    label: 'Đã kết hôn'
  },
  {
    value: 0,
    label: 'Độc thân'
  }
];

export const APPROVAL_STATUS: ApprovalStatusOption[] = [
  {
    value: 'approved',
    label: ApprovalStatus.approved,
    color: 'success'
  },
  {
    value: 'pending',
    label: ApprovalStatus.pending,
    color: 'warning'
  },
  {
    value: 'rejected',
    label: ApprovalStatus.rejected,
    color: 'error'
  },
  {
    value: 'expired',
    label: ApprovalStatus.expired,
    color: 'secondary'
  }
];

export const GENDER_OPTION = GENDER.map((item) => ({
  value: item.label,
  label: item.label
}));
export const DEGREE = Object.keys(Degree).map((key) => ({
  value: Degree[key],
  label: Degree[key]
}));
export const WORKING_FORM = Object.keys(EmploymentType).map((key) => ({
  value: EmploymentType[key],
  label: EmploymentType[key]
}));
export const EXPERIENCE = Object.keys(Experience).map((key) => ({
  value: Experience[key],
  label: Experience[key]
}));

export const POSITION_LEVEL = Object.keys(PositionLevel).map((key) => ({
  value: PositionLevel[key],
  label: PositionLevel[key]
}));
