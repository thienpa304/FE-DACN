import { Degree } from 'src/interfaces/enum';

export const GENDER = [
  {
    value: 0,
    label: 'Khác'
  },
  {
    value: 1,
    label: 'Nam'
  },
  {
    value: 2,
    label: 'Nữ'
  }
];

export const DEGREE = Object.values(Degree).map((item) => ({
  value: item,
  label: item
}));
