import React, { useState, useEffect } from 'react';
import { FormControl, Autocomplete as MultiSelect } from '@mui/material';
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Autocomplete(props) {
  const {
    options,
    label,
    onChange,
    defaultValue,
    name,
    disabled,
    freeSolo = false,
    onChangeInput,
    limitTags,
    multiple = true
  } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (_, newValue) => {
    setSelectedOptions(newValue);
    onChange({ target: { name, value: newValue } });
  };

  useEffect(() => {
    setSelectedOptions(defaultValue?.length > 0 ? defaultValue : []);
  }, [defaultValue]);

  return (
    <FormControl fullWidth>
      <MultiSelect
        size="small"
        multiple={multiple}
        options={options}
        limitTags={limitTags || 4}
        disableCloseOnSelect
        disabled={disabled}
        value={selectedOptions}
        isOptionEqualToValue={(option, value) => {
          if (option.value) return option.value === value.value;
          return option === value;
        }}
        // autoComplete
        // autoSelect
        // autoHighlight
        onChange={handleSelectChange}
        freeSolo={freeSolo}
        getOptionLabel={(option) => option?.label || option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            {multiple && (
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
            )}
            {option?.label || option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            name={name}
            onChange={onChangeInput}
          />
        )}
      />
    </FormControl>
  );
}
