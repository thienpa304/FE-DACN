import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function DatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMui
        inputFormat="DD/MM/YYYY HH:mm"
        {...props}
        value={props.value ? dayjs(props.value) : null}
        slotProps={{ textField: { size: 'small', fullWidth: true } }}
      />
    </LocalizationProvider>
  );
}
