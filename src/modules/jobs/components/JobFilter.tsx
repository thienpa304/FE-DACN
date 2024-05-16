import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography
} from '@mui/material';
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

const filterParams = [
  'experience',
  'positionLevel',
  'degree',
  'employmentType',
  'sex'
];

const findLabel = (option) => {
  return option === 'employmentType'
    ? 'Hình thức'
    : option === 'sex'
    ? 'Giới tính'
    : option === 'positionLevel'
    ? 'Cấp bậc'
    : option === 'degree'
    ? 'Trình độ'
    : 'Kinh nghiệm';
};

export default function JobFilter(props) {
  const { handleFilter, sx } = props;
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ defaultValues: defaultValues });
  const [currentValue, setCurrentValue] = useState<any>({});
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const filter = (data) => {
    handleFilter(data);
    setOpenFilterModal(false);
  };

  const clear = () => {
    setCurrentValue({});
    reset(defaultValues);
    handleFilter(defaultValues);
    setOpenFilterModal(false);
  };

  const renderFormControl = (option, label) => (
    <Grid
      item
      xs={1.9}
      key={option}
      sx={{
        display: {
          xs: 'none',
          sm: 'flex'
        }
      }}
    >
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

  const FilterModal = ({ openFilterModal, setOpenFilterModal }) => {
    return (
      <Dialog open={openFilterModal} fullWidth maxWidth="lg">
        <DialogTitle
          sx={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}
        >
          Lọc nâng cao
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container gap={2}>
            {filterParams.map((option) => (
              <Grid item xs={12} key={option}>
                <FormControl
                  element={<SelectInput />}
                  options={options[option]}
                  control={control}
                  errors={errors}
                  fullWidth
                  id={option}
                  label={findLabel(option)}
                  name={option}
                  sx={{ bgcolor: '#ffff', borderRadius: '5px' }}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenFilterModal(false)}
            size="small"
            variant="contained"
            color="secondary"
          >
            Huỷ
          </Button>
          <Button
            onClick={handleSubmit(filter)}
            size="small"
            variant="contained"
            color="primary"
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        boxShadow: '2px 2px 6px #d2d7db',
        height: 80,
        bgcolor: '#fee9f7',
        alignItems: 'center',
        pl: 2,
        ...sx
      }}
    >
      <Grid container spacing={0.3} alignItems="center">
        <Grid item xs={1} sm={0.5}>
          <FilterAltIcon />
        </Grid>
        {filterParams.map((option) =>
          renderFormControl(option, findLabel(option))
        )}
        <Grid
          item
          xs={0.9}
          sx={{
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}
        >
          <Button
            onClick={handleSubmit(filter)}
            variant="text"
            sx={{
              height: 30,
              color: '#042a8f'
            }}
          >
            Lọc
          </Button>
        </Grid>
        <Grid
          item
          xs={0.9}
          sx={{
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}
        >
          <Button
            onClick={clear}
            variant="text"
            sx={{
              height: 30,
              color: '#646464',
              display: {
                xs: 'none',
                sm: 'flex'
              }
            }}
          >
            Huỷ
          </Button>
        </Grid>

        <Button
          onClick={() => setOpenFilterModal(true)}
          variant="contained"
          color="info"
          size="small"
          sx={{
            mr: 2,
            ml: 'auto',
            display: {
              xs: 'flex',
              sm: 'none'
            }
          }}
        >
          Lọc nâng cao
        </Button>
      </Grid>
      <FilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
      />
    </Box>
  );
}
