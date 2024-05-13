import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SelectInput from 'src/components/SelectInput';
import FormControl from 'src/components/FormControl';
import { useForm } from 'react-hook-form';
import {
  DEGREE,
  EXPERIENCE,
  GENDER_OPTION,
  POSITION_LEVEL,
  WORKING_FORM
} from 'src/constants';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTheme } from '@emotion/react';
import { checkIsMobile } from 'src/utils/responsive';

interface Option {
  value: any;
  label: any;
}

interface FormProps {
  profession: Option | string;
  workAddress: Option | string;
  positionLevel: Option | string;
  degree: Option | string;
  experience: Option | string;
  employmentType: Option | string;
  gender: Option | string;
}

const addAllOption = (optionsArray) => {
  return [{ value: 'Tất cả', label: 'Tất cả' }, ...optionsArray];
};

const options = {
  experience: addAllOption(EXPERIENCE),
  positionLevel: addAllOption(POSITION_LEVEL),
  degree: addAllOption(DEGREE),
  employmentType: addAllOption(WORKING_FORM),
  sex: GENDER_OPTION
};

const defaultValues = {
  experience: '',
  positionLevel: '',
  degree: '',
  employmentType: '',
  sex: ''
};

export default function JobFilter(props) {
  const { handleFilter, sx } = props;
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ defaultValues: defaultValues });
  const [currentValue, setCurrentValue] = React.useState<any>({});

  const filter = (data) => {
    handleFilter(data);
  };

  const clear = () => {
    setCurrentValue({});
    reset(defaultValues);
    handleFilter(defaultValues);
  };

  const renderFormControl = (option, label) => (
    <Grid item xs={1.9} key={option}>
      <FormControl
        element={<SelectInput />}
        options={options[option]}
        control={control}
        errors={errors}
        fullWidth
        id={option}
        label={label}
        name={option}
        onChange={(e) => {
          filter({ [option]: e.target.value });
          const curr = { ...currentValue, [option]: e.target.value };
          setCurrentValue(() => curr);
          reset(curr);
        }}
        sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
      />
    </Grid>
  );

  return (
    <Box
      sx={[
        {
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          boxShadow: '2px 2px 6px #d2d7db',
          height: 80,
          // bgcolor: '#ffdd9f',
          bgcolor: '#fee9f7',
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          ...sx
        }
      ]}
    >
      <Grid container spacing={0.3} display="flex" alignItems="center">
        <Grid item xs={0.5}>
          <FilterAltIcon />
        </Grid>
        {['experience', 'positionLevel', 'degree', 'employmentType', 'sex'].map(
          (option) =>
            renderFormControl(
              option,
              option === 'employmentType'
                ? 'Hình thức'
                : option === 'sex'
                ? 'Giới tính'
                : option === 'positionLevel'
                ? 'Cấp bậc'
                : option === 'degree'
                ? 'Trình độ'
                : 'Kinh nghiệm'
            )
        )}
        <Grid item xs={0.9}>
          <Button
            onClick={handleSubmit(filter)}
            variant="text"
            sx={{ height: 30, color: '#042a8f' }}
          >
            Lọc
          </Button>
        </Grid>
        <Grid item xs={0.9}>
          <Button
            onClick={clear}
            variant="text"
            sx={{ height: 30, color: '#646464' }}
          >
            Huỷ
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
