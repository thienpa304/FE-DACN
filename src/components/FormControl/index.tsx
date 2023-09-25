import { TextFieldProps } from '@mui/material';
import React, { ReactElement } from 'react';
import { Controller } from 'react-hook-form';
import { getRulesByPattern } from 'src/utils';

type Props = TextFieldProps & {
  control: any;
  element: ReactElement;
  children: ReactElement;
  pattern: string;
  name: string;
  errors: any;
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
