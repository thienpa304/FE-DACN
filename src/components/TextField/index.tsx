import { TextFieldProps, TextField as TextInput } from '@mui/material';

const TextField = (props: TextFieldProps) => {
  return <TextInput size="small" fullWidth {...props} />;
};

export default TextField;
