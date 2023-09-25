import { regexEmail, regexPhoneNumber } from 'src/constants';
import { RegisterOptions } from 'react-hook-form';

export const getRulesByPattern = (
  pattern: string,
  label,
  required?: boolean
) => {
  let rule: RegisterOptions = {};
  if (required) rule.required = `Please enter ${label}`;
  if (pattern === 'phone')
    rule.pattern = {
      value: regexPhoneNumber,
      message: `Phone number is not valid`
    };
  if (pattern === 'email')
    rule.pattern = { value: regexEmail, message: `Email is not valid` };
  return rule;
};
