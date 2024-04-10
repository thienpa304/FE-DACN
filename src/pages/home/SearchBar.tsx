import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import SuspenseLoader from 'src/components/SuspenseLoader';
import Link from 'src/components/Link';
import SelectInput from 'src/components/SelectInput';
import { PROFESSION } from 'src/constants';

export default function SearchBar() {
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
    <Box display="flex">
      <TextField
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
              <SelectInput
                options={PROFESSION}
                onChange={handleSelectProfession}
                label="Nghề nghiệp"
                placeholder="Nghề nghiệp"
                sx={{
                  width: 200,
                  ml: 1,
                  borderRadius: '0px',
                  height: '51px'
                }}
                labelmargintop="5px"
              />
            </InputAdornment>
          )
        }}
        placeholder="Nhập vị trí muốn ứng tuyển"
        fullWidth
        sx={{
          backgroundColor: 'white',
          boxShadow: '2px 2px 6px #98E4FF',
          borderRadius: '5px'
        }}
      />
      <Link
        to={searchValue ? `profession/${searchValue}` : ''}
        sx={{ color: '#000' }}
        state={{
          jobTitle: searchValue,
          profession: selectedProfession,
          pageTitle: searchValue
        }}
      >
        <Button
          variant="contained"
          sx={{ width: 200, opacity: 0.8, height: '100%' }}
        >
          <SearchIcon />
          Tìm kiếm
        </Button>
      </Link>
    </Box>
  );
}
