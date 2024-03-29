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

const addAllOption = (optionsArray, allLabel) => {
  return [...optionsArray, { value: '', label: allLabel }];
};

const options = {
  experience: addAllOption(EXPERIENCE, 'Tất cả'),
  positionLevel: addAllOption(POSITION_LEVEL, 'Tất cả'),
  degree: addAllOption(DEGREE, 'Tất cả'),
  employmentType: addAllOption(WORKING_FORM, 'Tất cả'),
  sex: addAllOption(GENDER_OPTION, 'Tất cả')
};

const defaultValues = {
  experience: '',
  positionLevel: '',
  degree: '',
  employmentType: '',
  sex: ''
};

export default function JobFilter({ handleFilter }) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ defaultValues: defaultValues });

  const filter = (data) => {
    handleFilter(data);
  };

  const clear = () => {
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
        sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
      />
    </Grid>
  );

  return (
    <Box
      sx={{
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '2px 2px 6px #d2d7db',
        height: 80,
        bgcolor: '#ffdd9f',
        display: 'flex',
        alignItems: 'center',
        pl: 2
      }}
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
