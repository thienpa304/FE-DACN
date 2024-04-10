import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'src/components/Link';
import SelectInput from 'src/components/SelectInput';
import { PROFESSION } from 'src/constants';

const ProfessionOptions = [
  {
    label: 'Tất cả',
    value: ''
  },
  ...PROFESSION
];

export default function SearchBar({ to, sx }: { to: string; sx?: any }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => event.target.value);
  };

  const handleSelectProfession = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedProfession(() => event.target.value);
  };

  return (
    <Grid
      container
      display="flex"
      sx={{
        border: '1px solid #98E4FF',
        borderRadius: '5px',
        ...sx
      }}
    >
      <Grid item xs={8}>
        <TextField
          value={searchValue}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          placeholder="Nhập vị trí muốn ứng tuyển"
          fullWidth
          sx={{
            backgroundColor: 'white',
            boxShadow: '2px 2px 6px #98E4FF'
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <SelectInput
          options={ProfessionOptions}
          onChange={handleSelectProfession}
          label="Nghề nghiệp"
          placeholder="Nghề nghiệp"
          fullWidth
          sx={{
            backgroundColor: 'white',
            boxShadow: '2px 2px 6px #98E4FF',
            borderRadius: '0px'
          }}
          labelmargintop="5px"
          size="medium"
        />
      </Grid>
      <Grid item xs={2}>
        <Link
          to={searchValue ? `${to}/${searchValue}` : ''}
          sx={{ color: '#000' }}
          state={{
            jobTitle: searchValue?.trim(),
            profession: selectedProfession,
            pageTitle: searchValue
          }}
        >
          <Button
            variant="contained"
            sx={{ opacity: 0.8, height: '100%', borderRadius: '0px' }}
            fullWidth
          >
            <SearchIcon />
            Tìm kiếm
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
