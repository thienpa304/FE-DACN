import { Degree, Experience } from 'src/constants/enum';
import { findObjectKey } from './formatData';

export function compareExperience(
  employee: string,
  requirement: string
): number {
  // Chuyển đổi chuỗi sang giá trị enum tương ứng
  const employeeIndex = Object.values(Experience).indexOf(
    employee as Experience
  );
  const requirementIndex = Object.values(Experience).indexOf(
    employee as Experience
  );
  // So sánh giá trị enum
  if (employeeIndex > requirementIndex) {
    return -1; // idx cang lon trinh do cang thap
  } else return 1;
}

export function compareDegrees(employee: string, requirement: string): number {
  const employeeIndex = Object.values(Degree).indexOf(employee as Degree);
  const requirementIndex = Object.values(Degree).indexOf(requirement as Degree);
  // So sánh giá trị enum
  if (employeeIndex > requirementIndex) {
    return -1; // idx cang lon trinh do cang thap
  } else return 1; // employee lớn hơn requirement
}
