import { Grid, IconButton, Typography } from '@mui/material';
import { random } from '@mui/x-data-grid-generator';
import React from 'react';
import professions from 'src/constants/professions';

export default function ProfessionList(props) {
  const { handleSelectProfession } = props;

  return (
    <>
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={20}
        mb={1}
        lineHeight={3}
      >
        Chọn ngành nghề
      </Typography>
      <Grid
        container
        gap={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {professions.map((item) => (
          <Grid
            key={item.code}
            item
            xs={12}
            sm={2}
            display="flex"
            justifyContent="center"
          >
            <IconButton
              color="secondary"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
              onClick={() => handleSelectProfession(item.name)}
            >
              <img src={item.icon} alt={item.name} width="100" height="100" />
              <Typography sx={{ mt: 1 }}>{item.name}</Typography>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
