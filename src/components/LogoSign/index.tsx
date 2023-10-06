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
        width: 100px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);
const ImgWrapper = styled('img')(
  ({ theme }) => `
        width: 100px;
        height: ${theme.header.height}
`
);
function Logo() {
  return (
    <LogoWrapper to="/">
      <ImgWrapper src="https://thuvienvector.com/upload/images/items/vector-logo-truong-dai-hoc-bach-khoa-hcm-file-cdr-coreldraw-ai-217.webp" />
    </LogoWrapper>
  );
}

export default Logo;
