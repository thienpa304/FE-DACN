import { Box, Container, Grid, Link, Typography } from '@mui/material';

const webIcon = [
  {
    name: 'Facebook',
    icon: 'facebook',
    link: 'https://www.facebook.com/'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/'
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    link: 'https://twitter.com/'
  },
  {
    name: 'Zalo',
    icon: 'zalo',
    link: 'https://zalo.me/'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com/'
  }
];

const downloadIcon = [
  {
    name: 'App Store',
    icon: 'appstore',
    link: 'https://www.apple.com/app-store/'
  },
  {
    name: 'Google Play',
    icon: 'googleplay',
    link: 'https://play.google.com/store/apps'
  }
];

const Footer = () => {
  return (
    <Container
      component={'footer'}
      sx={{
        bgcolor: '#f5f4ff',
        borderTop: '1px solid #e0e0e0',
        mt: 5,
        p: { xs: 2, md: 5 }
      }}
    >
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <Typography fontWeight={700} fontSize={18} lineHeight={3}>
            Về chúng tôi
          </Typography>
          <Typography fontWeight={700} lineHeight={3}>
            Công Ty Cổ Phần Việc Làm TopViecLam
          </Typography>
          <Typography lineHeight={1.8} fontSize={12}>
            Phòng 102, Tòa nhà 20-20B Trần Cao Vân, Phường Đa Kao, Quận 1, Thành
            phố Hồ Chí Minh
            <br />
            Chi nhánh: Tầng 4, tòa nhà Times Tower, 35 Lê Văn Lương, Thanh Xuân,
            Hà Nội.
            <br />
            Giấy phép hoạt động dịch vụ việc làm số: 4938/SLĐTBXH-GP do Sở Lao
            Động Thương Binh & Xã Hội TP.HCM cấp
            <br />
            Điện thoại: (028) 7108 2424 | (024) 7308 2424
            <br />
            Email hỗ trợ người tìm việc: ntv@gmail.com
            <br />
            Email hỗ trợ nhà tuyển dụng: ntd@gmail.com
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography fontWeight={700} fontSize={18} lineHeight={3}>
            Kết nối với TopViệcLàm
          </Typography>
          <Box
            display="flex"
            gap={2}
            flexWrap="wrap"
            sx={{ justifyContent: { xs: 'center', sm: 'normal' } }}
          >
            {webIcon.map((item) => (
              <Link href={item.link}>
                <Box
                  component={'img'}
                  src={`/static/images/icons/${item.icon}.svg`}
                  alt={item.name}
                  width={50}
                />
              </Link>
            ))}
          </Box>

          <Typography fontWeight={700} fontSize={18} mt={3}>
            Ứng dụng di động
          </Typography>
          <Box
            display="flex"
            gap={2}
            flexWrap="wrap"
            sx={{ justifyContent: { xs: 'center', sm: 'normal' } }}
          >
            {downloadIcon.map((item) => (
              <Link href={item.link}>
                <Box
                  component={'img'}
                  src={`/static/images/icons/${item.icon}.svg`}
                  alt={item.name}
                  height="120px"
                  my={-2}
                />
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Footer;
