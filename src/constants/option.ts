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

export const DEGREE = Object.values(Degree).map((item) => ({
  value: item,
  label: item
}));
