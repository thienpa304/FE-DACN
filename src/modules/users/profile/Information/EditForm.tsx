import { Box, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import DatePicker from 'src/components/DatePicker';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import { Company, User } from '../../model';
import { GENDER, ISMARRIED, ISMARRIED_OPTION } from 'src/constants/option';
import dayjs from 'dayjs';
import useMutateUserData from '../../hooks/useMutateUserHook';
import useMutateCompany from '../../hooks/useMutateCompany';
import TextField from 'src/components/TextField';
import {
  toInputDateString,
  toOutputDateString
} from 'src/utils/inputOutputFormat';
import ButtonGroup from 'src/components/ButtonGroup';

export function UserForm(props) {
  const { close, user } = props;
  const { onSaveData: onSavaUser } = useMutateUserData();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      ...user,
      dob: toInputDateString(user.dob as string, 'DD-MM-YYYY', 'DD-MM-YYYY'),
      sex: GENDER.find((item) => item.label === user.sex)?.value,
      isMarried: user.isMarried ? 'Đã kết hôn' : 'Độc thân'
    }
  });

  const handleSaveProfile = async (data) => {
    const formattedDob = toOutputDateString(data.dob);
    const isMarried = data.isMarried === 'Đã kết hôn' ? '1' : '0';
    const newData = { ...data, dob: formattedDob, isMarried: isMarried };
    onSavaUser(newData);
    close();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container mb={4}>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="name"
              label="Họ và tên"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              disabled
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="phone"
              label="Số điện thoại"
              name="phone"
              pattern="phone"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="address"
              label="Địa chỉ"
              name="address"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<DatePicker maxDate={dayjs()} />}
              control={control}
              errors={errors}
              fullWidth
              id="dob"
              label="Ngày sinh"
              name="dob"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<SelectInput />}
              options={GENDER}
              control={control}
              errors={errors}
              fullWidth
              id="sex"
              label="Giới tính"
              name="sex"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<SelectInput />}
              options={ISMARRIED_OPTION}
              control={control}
              errors={errors}
              fullWidth
              id="isMarried"
              label="Tình trạng hôn nhân"
              name="isMarried"
            />
          </Grid>
        </Grid>
      </Grid>
      <ButtonGroup
        handleSubmit={handleSubmit(handleSaveProfile)}
        handleCancel={() => close()}
      />
    </Box>
  );
}

export function CompanyForm(props) {
  const { close, user } = props;
  const { onSaveData: onSaveCompany } = useMutateCompany();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Company>({
    defaultValues: {
      ...user
    }
  });

  const handleSaveCompany = (data) => {
    onSaveCompany(data);
    close();
  };
  return (
    <Box sx={{ p: 3 }}>
      <Grid container mb={4}>
        <Grid container item spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="companyName"
              label="Tên công ty"
              name="companyName"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="companyLocation"
              label="Địa chỉ"
              name="companyLocation"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="careerField"
              label="Lĩnh vực"
              name="careerField"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              element={<TextField />}
              control={control}
              errors={errors}
              fullWidth
              id="taxCode"
              label="Mã số thuế"
              name="taxCode"
            />
          </Grid>
        </Grid>
      </Grid>
      <ButtonGroup
        handleSubmit={handleSubmit(handleSaveCompany)}
        handleCancel={() => close()}
      />
    </Box>
  );
}
