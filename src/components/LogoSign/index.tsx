import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);
const ImgWrapper = styled('img')({ width: '60px' });
function Logo() {
  return (
    <Box
      display="flex"
      sx={{
        alignItems: 'center'
      }}
    >
      <LogoWrapper to="/">
        <ImgWrapper src="/static/images/logo/web-logo.png" />
        <Typography
          sx={{
            display: { sm: 'flex', xs: 'none' },
            fontSize: { sm: '20px', xs: '15px' },
            fontWeight: 'bold',
            color: '#b27300',
            textAlign: 'center',
            alignItems: 'center',
            ml: 1,
            mr: 1
          }}
        >
          VN CareerHub
        </Typography>
      </LogoWrapper>
    </Box>
  );
}

export default Logo;
