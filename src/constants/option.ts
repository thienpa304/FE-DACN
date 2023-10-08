import { Degree } from 'src/interfaces/enum';

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
  value: key,
  label: Degree[key]
}));
