import {
  Box,
  Tooltip,
  Badge,
  TooltipProps,
  tooltipClasses,
  styled,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 180px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

function Logo() {
  return (
    <LogoWrapper to="/">
      <img
        width={180}
        src="	https://static.topcv.vn/v4/image/logo/topcv-logo-6.png"
      />
    </LogoWrapper>
  );
}

export default Logo;
