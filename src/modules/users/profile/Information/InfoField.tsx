import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  styled
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { CompanyForm, UserForm } from './EditForm';
import EditButton from 'src/components/EditButton';

const InputLabel = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1.5, 1, 1.5, 0),
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700
}));

const InputData = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1.5, 1, 1.5, 1),
  fontFamily: theme.typography.fontFamily
}));

export default function InfoField(props) {
  const { user, data, title, editIcon, openForm } = props;
  const [open, setOpen] = useState(false);

  const handleEdit = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleData = (value) => (value === null ? null : value);

  const myForm =
    openForm === 'User' ? (
      <UserForm close={handleClose} user={user} />
    ) : (
      <CompanyForm close={handleClose} user={user} />
    );

  console.log(data);

  return (
    <Container sx={{ paddingX: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          {editIcon}
          <Box>
            <Typography fontWeight={700} fontSize={22} lineHeight={3}>
              {title}
            </Typography>
          </Box>
        </Box>
        <EditButton onClick={handleEdit} />
        <Dialog open={open} fullWidth maxWidth="md">
          <DialogTitle
            sx={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem' }}
          >
            {title}
          </DialogTitle>
          <DialogContent>{myForm}</DialogContent>
        </Dialog>
      </Box>
      <Box sx={{ mt: 1 }}>
        {data.map((item, index) => (
          <Grid
            container
            key={index}
            sx={{ borderTop: 1, borderColor: 'grey.300' }}
          >
            <InputLabel item xs={6} md={4}>
              {item.label}
            </InputLabel>
            <InputData item xs={6} md={8}>
              {handleData(item.value)}
            </InputData>
          </Grid>
        ))}
      </Box>
    </Container>
  );
}
