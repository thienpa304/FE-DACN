import { regexEmail, regexPhoneNumber } from 'src/constants';
import { RegisterOptions } from 'react-hook-form';

export const getRulesByPattern = (
  pattern: string,
  label,
  required?: boolean
) => {
  let rule: RegisterOptions = {};
  if (required) rule.required = `Vui lòng nhập ${label}`;
  if (pattern === 'phone')
    rule.pattern = {
      value: regexPhoneNumber,
      message: `Số điện thoại không hợp lệ`
    };
  if (pattern === 'email')
    rule.pattern = { value: regexEmail, message: `Email không hợp lệ` };
  return rule;
};
