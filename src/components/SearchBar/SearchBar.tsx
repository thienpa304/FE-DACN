import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'src/components/Link';
import SelectInput from 'src/components/SelectInput';
import { PROFESSION, WORK_AT } from 'src/constants';
import { rewriteUrl } from 'src/utils/rewriteUrl';

const ProfessionOptions = [
  {
    label: 'Tất cả',
    value: ''
  },
  ...PROFESSION
];
const AddressOptions = [
  {
    label: 'Tất cả',
    value: ''
  },
  ...WORK_AT
];

const buildSearchUrl = (
  baseUrl,
  searchValue,
  selectedProfession,
  selectedAddress
) => {
  const searchParams = new URLSearchParams();
  if (searchValue) searchParams.append('search', searchValue);
  if (selectedProfession) searchParams.append('profession', selectedProfession);
  if (selectedAddress) searchParams.append('address', selectedAddress);

  return `${baseUrl}?${searchParams.toString()}`;
};

export default function SearchBar({ to, sx }: { to: string; sx?: any }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => event.target.value);
  };

  const handleSelectProfession = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedProfession(() => event.target.value);
  };

  const handleSelectAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(() => event.target.value);
  };

  const searchUrl = buildSearchUrl(
    to,
    searchValue,
    selectedProfession,
    selectedAddress
  );

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
      <Grid item md={6} xs={12}>
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
      <Grid item md={2} xs={6}>
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
      <Grid item md={2} xs={6}>
        <SelectInput
          options={AddressOptions}
          onChange={handleSelectAddress}
          label="Khu vực"
          placeholder="Khu vực"
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
      <Grid item md={2} xs={12}>
        <Link
          to={
            selectedProfession || searchValue || selectedAddress
              ? searchUrl
              : ''
          }
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
