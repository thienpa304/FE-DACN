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
    show: boolean;
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
  show = true,
  required,
  ...props
}) => {
  const labelRequired = <>{label} *</>;

  if (!show) return <></>;
  return (
    <Controller
      name={name}
      control={control}
      rules={getRulesByPattern(pattern, label, required)}
      render={({ field }) =>
        React.cloneElement(element || children, {
          ...field,
          ...props,
          label: required ? labelRequired : label,
          error: errors && !!errors[name],
          helperText: errors && errors[name] ? errors[name].message : ''
        })
      }
    />
  );
};

export default FormControl;
