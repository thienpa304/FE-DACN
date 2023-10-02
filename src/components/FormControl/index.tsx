import { DatePickerProps } from '@mui/lab';
import { TextFieldProps } from '@mui/material';
import React, { ReactElement } from 'react';
import { Controller } from 'react-hook-form';
import { getRulesByPattern } from 'src/utils';
import { Option, PropsSelectInput } from '../SelectInput';

type Props = TextFieldProps &
  DatePickerProps<any> & {
    control: any;
    element: ReactElement;
    children: ReactElement;
    pattern: string;
    name: string;
    errors: any;
    options?: Option[];
  };
const FormControl: React.FC<Partial<Props>> = ({
  control,
  name,
  element,
  children,
  pattern,
  errors,
  label,
  required,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={getRulesByPattern(pattern, label, required)}
      render={({ field }) =>
        React.cloneElement(element || children, {
          ...field,
          ...props,
          label,
          error: errors && !!errors[name],
          helperText: errors && errors[name] ? errors[name].message : ''
        })
      }
    />
  );
};

export default FormControl;
