import React, { useState } from 'react';
import {
  Box,
  Link,
  Typography,
  Card,
  Divider,
  Button,
  TextField,
  InputAdornment,
  Avatar,
  Grid,
  Container
} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import ProfessionListDialog from 'src/pages/home/ProfessionListDialog';
import professions from 'src/constants/professions';
import useQueryTotolJobsEachProfession from 'src/modules/jobs/hooks/useQueryTotolJobsEachProfession';

const imageStyle = {
  objectFit: 'cover',
  width: '100px',
  height: '100px',
  borderRadius: 2
};
const iconsList = professions;

function ProfessionType() {
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = React.useState(false);
  const { dataList } = useQueryTotolJobsEachProfession();
  console.log(dataList);

  const matchProfessionWithCount = professions
    .map((profession) => {
      const foundItem = dataList?.find(
        (data) => data.profession_value === profession.name
      );

      if (foundItem) {
        return {
          ...profession,
          count: foundItem.count
        };
      } else
        return {
          ...profession,
          count: 0
        };
    })
    .sort((a, b) => {
      return b.count - a.count;
    });
  console.log(matchProfessionWithCount);
  const professionToShow = matchProfessionWithCount.slice(0, 7);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box mb={5}>
      <Box display="flex" columnGap={1} mb={2}>
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
        <Button variant="contained" sx={{ width: 200, opacity: 0.8 }}>
          <SearchIcon />
          Tìm kiếm
        </Button>
      </Box>
      <Card sx={{ border: 1, borderColor: '#98E4FF', borderRadius: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, p: 2 }}
        >
          <Box display="flex" justifyContent="space-between">
            <BusinessCenterIcon color="secondary" sx={{ fontSize: 35 }} />
            <Typography fontWeight={700} fontSize={18} alignSelf="end">
              Nghề nghiệp nổi bật
            </Typography>
          </Box>
          <Divider />
          <Link
            href="#"
            color="secondary"
            underline="none"
            fontSize={16}
            fontWeight={700}
            sx={{
              '&:hover': {
                color: '#FF7D55'
              }
            }}
            onClick={() => setOpen(true)}
          >
            Xem thêm
          </Link>
        </Box>

        <ProfessionListDialog
          open={open}
          handleClose={handleClose}
          professionList={matchProfessionWithCount}
        />

        <Container
          sx={{
            overflow: 'hidden',
            p: 2,
            display: 'flex',
            justifyContent: 'center'
            // columnGap: 2
          }}
        >
          {professionToShow?.map((profession, index) => (
            <Link
              // fullWidth
              key={index}
              // component={Link}
              href={`/profession/${profession.code}`}
              sx={{
                width: 160,
                height: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                rowGap: '5px',
                mx: 2,
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              <img
                src={profession.icon}
                alt="shopping-bag"
                style={{
                  objectFit: 'cover',
                  width: '90px',
                  height: '90px',
                  borderRadius: 2
                }}
              />
              <Box display={'flex'} columnGap="2px" alignItems="center">
                <Typography
                  fontWeight={700}
                  fontSize={16}
                  color="#379aff"
                  textAlign="center"
                  // sx={{ display: 'flex', alighItem: 'end' }}
                >
                  {profession.count}
                </Typography>
                <Typography
                  fontWeight={700}
                  color="#939295"
                  textAlign="center"
                  fontSize={13}
                >
                  việc
                </Typography>
              </Box>
              <Typography color="secondary" fontWeight={700} textAlign="center">
                {profession.name}
              </Typography>
            </Link>
          ))}
        </Container>
      </Card>
    </Box>
  );
}

export default ProfessionType;
