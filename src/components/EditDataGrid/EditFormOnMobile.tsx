import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid
} from '@mui/material';
import { useEffect, useMemo } from 'react';
import FormControl from '../FormControl';
import TextField from '../TextField';
import ButtonGroup from '../ButtonGroup';
import { useForm } from 'react-hook-form';
import { useResponsive } from 'src/utils/responsive';
import DatePicker from '../DatePicker';
import { toInputDateString, toOutputDateString } from 'src/utils/formatData';

const dateType = ['startDate', 'endDate'];

export default function EditGridInfo(props) {
  const {
    row,
    columns,
    open,
    close,
    handleClose,
    title,
    handleSave,
    handleUpdate
  } = props;
  const { isMobile } = useResponsive();
  console.log('row', row);
  console.log('columns', columns);

  const defaultValues = columns.reduce((acc, column) => {
    acc[column.field] = '';
    return acc;
  }, {});

  const defaultData = useMemo(() => {
    const data = { ...row };
    if (row?.startDate) {
      data.startDate = toInputDateString(row?.startDate, 'DD/MM/YYYY');
    }
    if (row?.endDate)
      data.endDate = toInputDateString(row?.endDate, 'DD/MM/YYYY');
    return data;
  }, [row]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues
  });

  const handleSaveInfo = (data) => {
    for (let key in data) {
      if (!data.hasOwnProperty(key)) continue;

      if (dateType.includes(key)) {
        const dateString = toOutputDateString(data[key]);
        data[key] = dateString;
      }
    }

    if (row?.id) handleUpdate(row?.id, data);
    else handleSave(data);
    reset(defaultValues);
    close();
  };

  useEffect(() => {
    if (!row) reset(defaultValues);

    reset(defaultData);
  }, [row]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={'md'}
      fullScreen={isMobile}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { md: '1.3rem', xs: '1rem' }
        }}
      >
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3} mb={4}>
            {columns?.map(
              (col, index) =>
                col?.field !== 'id' && (
                  <Grid key={index} item xs={12}>
                    <FormControl
                      element={
                        dateType.includes(col?.field) ? (
                          <DatePicker />
                        ) : (
                          <TextField />
                        )
                      }
                      control={control}
                      errors={errors}
                      fullWidth
                      label={col?.headerName}
                      name={col?.field}
                      multiline
                      required
                    />
                  </Grid>
                )
            )}
          </Grid>
          <ButtonGroup
            handleSubmit={handleSubmit(handleSaveInfo)}
            handleCancel={() => close()}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
