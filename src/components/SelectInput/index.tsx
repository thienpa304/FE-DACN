import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';

export type Option = {
  value: number | string;
  label: string | React.ReactElement;
};
export type PropsSelectInput = SelectProps & {
  options?: Option[];
};
export default function SelectInput(props: PropsSelectInput) {
  const { options = [], label } = props;
  return (
    <FormControl fullWidth>
      <InputLabel size="small" id="demo-simple-select-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        {...props}
      >
        {options.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
