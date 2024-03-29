import { Degree, Experience } from 'src/constants/enum';
import { findObjectKey } from './inputOutputFormat';

export function compareExperience(exp1: string, exp2: string): number {
  // Chuyển đổi chuỗi sang giá trị enum tương ứng
  const exp1Index = Object.values(Experience).indexOf(exp1 as Experience);
  const exp2Index = Object.values(Experience).indexOf(exp1 as Experience);
  // So sánh giá trị enum
  if (exp1Index > exp2Index) {
    return -1; // idx cang lon trinh do cang thap
  } else if (exp1Index < exp2Index) {
    return 1; // exp1 lớn hơn exp2
  } else {
    return 0; // exp1 bằng exp2
  }
}

export function compareDegrees(deg1: string, deg2: string): number {
  const exp1Index = Object.values(Degree).indexOf(deg1 as Degree);
  const exp2Index = Object.values(Degree).indexOf(deg2 as Degree);
  // So sánh giá trị enum
  if (exp1Index > exp2Index) {
    return -1; // idx cang lon trinh do cang thap
  } else if (exp1Index < exp2Index) {
    return 1; // deg1 lớn hơn deg2
  } else {
    return 0; // deg1 bằng deg2
  }
}
