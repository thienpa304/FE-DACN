import {
  ApprovalStatus,
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';
import professions from './professions';
import provinces from './provinces';
import { Color } from 'src/types/mui-type';
import skills from './skills';
import careerFields from './careerFields';

type ApprovalStatusOption = {
  label: ApprovalStatus;
  value: keyof typeof ApprovalStatus;
  color: Color;
  optionColor: string;
  disabled?: boolean;
};

export const GENDER = [
  {
    value: 1,
    label: 'Nam'
  },
  {
    value: 2,
    label: 'Nữ'
  }
];

export const ISMARRIED = [
  {
    value: true,
    label: 'Đã kết hôn'
  },
  {
    value: false,
    label: 'Độc thân'
  }
];

export const APPROVAL_STATUS: ApprovalStatusOption[] = [
  {
    value: 'approved',
    label: ApprovalStatus.approved,
    color: 'success',
    optionColor: '#57CA22'
  },
  {
    value: 'pending',
    label: ApprovalStatus.pending,
    color: 'warning',
    optionColor: '#FFA319',
    disabled: true
  },
  {
    value: 'rejected',
    label: ApprovalStatus.rejected,
    color: 'error',
    optionColor: '#FF1943'
  },
  {
    value: 'expired',
    label: ApprovalStatus.expired,
    color: 'secondary',
    optionColor: '#6E759F',
    disabled: true
  }
];

export const GENDER_OPTION = [
  {
    value: 'Tất cả',
    label: 'Tất cả'
  },
  ...GENDER.map((item) => ({
    value: item.label,
    label: item.label
  }))
];

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
export const ISMARRIED_OPTION = ISMARRIED.map((item) => ({
  value: item.label,
  label: item.label
}));

export const PROFESSION = professions.map((item) => ({
  value: item.name,
  label: item.name
}));

export const WORK_AT = provinces.map((item) => ({
  value: item.name,
  label: item.name
}));

export const SKILLS = skills.map((item) => ({
  value: item.id,
  label: item.text
}));

export const CAREER_FIELDS = careerFields.map((item) => item.value);

export const USER_ROLE = [
  {
    value: '',
    label: 'Tất cả'
  },
  {
    value: 'ADMIN',
    label: 'ADMIN'
  },
  {
    value: 'EMPLOYEE',
    label: 'EMPLOYEE'
  },
  {
    value: 'EMPLOYER',
    label: 'EMPLOYER'
  }
];
