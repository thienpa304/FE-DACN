import React, { useState, useEffect } from 'react';
import { Autocomplete as MultiSelect } from '@mui/material';
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function Autocomplete(props) {
    const { options, label, onChange, defaultValue, name, disabled } = props;
    const [selectedOptions, setSelectedOptions] = useState(defaultValue || []);

    const handleSelectChange = (event, newValue) => {
        setSelectedOptions(newValue);
        onChange({ target: { name, value: newValue } });
    };

    useEffect(() => {
        setSelectedOptions(defaultValue);
    }, [defaultValue])


    return (
        <MultiSelect
            size="small"
            multiple
            options={options}
            disableCloseOnSelect
            value={selectedOptions}
            disabled={disabled}
            onChange={handleSelectChange}
            getOptionLabel={(option) => option?.label}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.label}
                </li>

            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={label}
                    name={name}
                />
            )}
        />
    );
}

export default Autocomplete;
