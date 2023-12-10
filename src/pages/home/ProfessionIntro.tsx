import React, { useState } from 'react';
import {
  Box,
  Link,
  Typography,
  Card,
  Divider,
  Button,
  TextField,
  InputAdornment
} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import ProfessionListDialog from 'src/modules/jobs/components/ProfessionListDialog';

const iconsList = [
  {
    name: 'Hành chính - Thư ký',
    icon: 'https://cdn-icons-png.flaticon.com/128/925/925025.png'
  },
  {
    name: 'Khách sạn - Nhà hàng - Du lịch',
    icon: 'https://cdn-icons-png.flaticon.com/128/1946/1946788.png'
  },
  {
    name: 'Bán sỉ - Bán lẻ - Quản lý cửa hàng',
    icon: 'https://cdn-icons-png.flaticon.com/512/2611/2611215.png'
  },
  {
    name: 'Marketing',
    icon: 'https://cdn-icons-png.flaticon.com/128/3141/3141181.png'
  },
  {
    name: 'Bán hàng - Kinh doanh',
    icon: 'https://cdn-icons-png.flaticon.com/128/420/420199.png'
  },
  {
    name: 'Kế toán',
    icon: 'https://cdn-icons-png.flaticon.com/128/1570/1570998.png'
  },
  {
    name: 'Tài chính - Đầu tư - Chứng khoán',
    icon: 'https://cdn-icons-png.flaticon.com/128/3328/3328363.png'
  }
];

function ProfessionIntro() {
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

        <Box p={2} display="flex" justifyContent="center" columnGap={2}>
          {iconsList.map((profession, index) => (
            <Button
              key={index}
              sx={{
                width: 150,
                height: 150,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                rowGap: '10px'
              }}
            >
              <img
                src={profession.icon}
                alt="shopping-bag"
                width={80}
                height={80}
              />
              <Typography color="secondary" fontWeight={700}>
                {profession.name}
              </Typography>
            </Button>
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export default ProfessionIntro;
