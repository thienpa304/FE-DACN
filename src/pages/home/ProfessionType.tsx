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

const imageStyle = {
  objectFit: 'cover',
  width: '100px',
  height: '100px',
  borderRadius: 2
};
const iconsList = professions;
const professionToShow = iconsList.slice(0, 7);

const tmp = [
  {
    code: 1,
    name: 'Hành chính - Thư ký',
    icon: 'https://cdn-icons-png.flaticon.com/128/925/925025.png'
  },
  {
    code: 2,
    name: 'Khách sạn - Nhà hàng - Du lịch',
    icon: 'https://cdn-icons-png.flaticon.com/128/1946/1946788.png'
  },
  {
    code: 3,
    name: 'Bán sỉ - Bán lẻ - Quản lý cửa hàng',
    icon: 'https://cdn-icons-png.flaticon.com/512/2611/2611215.png'
  },
  {
    code: 4,
    name: 'Marketing',
    icon: 'https://cdn-icons-png.flaticon.com/128/3141/3141181.png'
  },
  {
    code: 5,
    name: 'Bán hàng - Kinh doanh',
    icon: 'https://cdn-icons-png.flaticon.com/128/420/420199.png'
  },
  {
    code: 6,
    name: 'Kế toán',
    icon: 'https://cdn-icons-png.flaticon.com/128/1570/1570998.png'
  },
  {
    code: 7,
    name: 'Tài chính - Đầu tư - Chứng khoán',
    icon: 'https://cdn-icons-png.flaticon.com/128/3328/3328363.png'
  }
];

function ProfessionType() {
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = React.useState(false);

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

        <ProfessionListDialog open={open} handleClose={handleClose} />

        <Container
          sx={{
            overflow: 'hidden',
            p: 2,
            display: 'flex',
            justifyContent: 'center'
            // columnGap: 2
          }}
        >
          {professionToShow.map((profession, index) => (
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
                rowGap: '10px',
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
                  width: '100px',
                  height: '100px',
                  borderRadius: 2
                }}
              />
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
