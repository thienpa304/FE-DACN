import {
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/interfaces/enum';

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
