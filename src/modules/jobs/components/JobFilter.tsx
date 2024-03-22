import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import SelectInput from 'src/components/SelectInput';
import FormControl from 'src/components/FormControl';
import {
  DEGREE,
  EXPERIENCE,
  GENDER_OPTION,
  POSITION_LEVEL,
  WORKING_FORM,
  WORK_AT
} from 'src/constants';
import { useForm } from 'react-hook-form';

interface Option {
  value: any;
  label: any;
}

interface FormProps {
  profession: Option;
  workAddress: Option;
  positionLevel: Option;
  degree: Option;
  experience: Option;
  employmentType: Option;
  gender: Option;
}

const options = {
  experience: [...EXPERIENCE, { value: 'Tất cả', label: 'Tất cả' }],
  positionLevel: [...POSITION_LEVEL, { value: 'Tất cả', label: 'Tất cả' }],
  degree: [...DEGREE, { value: 'Tất cả', label: 'Tất cả' }],
  employmentType: [...WORKING_FORM, { value: 'Tất cả', label: 'Tất cả' }],
  sex: [...GENDER_OPTION, { value: 'Tất cả', label: 'Tất cả' }]
};

const defaultValues = {
  experience: null,
  positionLevel: null,
  degree: null,
  employmentType: null,
  sex: null
};

export default function JobFilter(props) {
  const { handleFilter } = props;
  const filter = (data) => {
    handleFilter(data);
  };
  const clear = () => {
    reset(defaultValues);
    handleFilter(defaultValues);
  };
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ defaultValues: defaultValues });
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
      <Grid container spacing={0.5} display="flex" alignItems="center">
        <Grid item xs={0.8}>
          <Typography lineHeight={3} fontWeight={700}>
            Bộ lọc:
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <FormControl
            element={<SelectInput />}
            options={options.experience}
            control={control}
            errors={errors}
            fullWidth
            id="experience"
            label="Kinh nghiệm"
            name="experience"
            sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl
            element={<SelectInput />}
            options={options.positionLevel}
            control={control}
            errors={errors}
            fullWidth
            id="positionLevel"
            label="Cấp bậc"
            name="positionLevel"
            sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl
            element={<SelectInput />}
            options={options.degree}
            control={control}
            errors={errors}
            fullWidth
            id="degree"
            label="Trình độ"
            name="degree"
            sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl
            element={<SelectInput />}
            options={options.employmentType}
            control={control}
            errors={errors}
            fullWidth
            id="employmentType"
            label="Hình thức"
            name="employmentType"
            sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={1.5}>
          <FormControl
            element={<SelectInput />}
            options={options.sex}
            control={control}
            errors={errors}
            fullWidth
            id="sex"
            label="Giới tính"
            name="sex"
            sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
          />
        </Grid>
        <Grid item xs={0.8}>
          <Button
            onClick={handleSubmit(filter)}
            variant="text"
            sx={{ height: 30, color: '#042a8f' }}
          >
            Lọc
          </Button>
        </Grid>
        <Grid item xs={0.8}>
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
