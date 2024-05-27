import { useContext, useState } from 'react';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  alpha,
  lighten,
  styled,
  useTheme
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import Logo from 'src/components/LogoSign';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import { useApp } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';
import { useNavigate } from 'react-router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { checkIsMobile } from 'src/utils/responsive';

const HeaderWrapper = styled(Box)<{ showSideBar: boolean }>(
  ({ theme, showSideBar }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${showSideBar ? theme.sidebar.width : 0};
            width: auto;
        }
`
);

const NavButton = styled(Button)({
  color: '#b27300',
  minWidth: '100px'
});
const ButtonText = styled(Typography)({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  fontWeight: 700
});

const employeeMenu = {
  basic: [
    {
      label: 'Hồ sơ',
      linkTo: '/employee/recruitment-profile'
    },
    {
      label: 'Đã ứng tuyển',
      linkTo: '/employee/job-applied'
    },
    {
      label: 'Gợi ý việc làm',
      linkTo: '/employee/job-recommend'
    }
  ],
  others: [
    {
      label: 'Việc làm',
      linkTo: '/employee/job-follow'
    },
    {
      label: 'Công ty',
      linkTo: '/employee/company-follow'
    }
  ]
};

const employerMenu = {
  basic: [
    {
      label: 'Tuyển dụng',
      linkTo: '/employer/recruitment/create'
    },
    {
      label: 'Danh sách tin đăng',
      linkTo: '/employer/recruitment/list'
    }
  ],
  others: [
    {
      label: 'Hồ sơ ứng tuyển',
      linkTo: '/employer/candidate/profile'
    },
    {
      label: 'Hồ sơ tiềm năng',
      linkTo: '/employer/recommend-profiles'
    },
    {
      label: 'Tìm kiếm hồ sơ',
      linkTo: '/employer/find-profiles'
    },
    {
      label: 'Hồ sơ đã lưu',
      linkTo: '/employer/follow-profile'
    }
  ]
};

const adminMenu = {
  basic: [
    {
      label: 'Quản lý tài khoản',
      linkTo: '/admin/user-manage'
    },
    {
      label: 'Quản lý hồ sơ và CV',
      linkTo: '/admin/manage-profile'
    },
    {
      label: 'Quản lý tuyển dụng',
      linkTo: '/admin/jobs-posting'
    },
    {
      label: 'Thống kê',
      linkTo: '/admin/statistic-report'
    }
  ]
};

function Header({ showSideBar }) {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const {
    user: { userId },
    isEmployee,
    isAdmin,
    isEmployer
  } = useApp();
  const theme = useTheme();
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMobile = Boolean(mobileAnchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMobileClick = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  const isMobile = checkIsMobile(theme);

  return (
    <HeaderWrapper
      showSideBar={showSideBar}
      display="flex"
      alignItems="center"
      sx={{
        mx: 'auto',
        px: '27px',
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
        height="100%"
      >
        {showSideBar && isMobile && <Logo />}
        {!showSideBar && (
          <Box display="flex" height="100%">
            <Logo />
            <NavButton
              onClick={() => {
                Navigate('company');
              }}
              sx={{ borderLeft: 1, borderColor: '#E0E0E0' }}
            >
              Công ty nổi bật
            </NavButton>
            <Box display={{ md: 'flex', xs: 'none' }}>
              {isEmployee && (
                <>
                  {employeeMenu.basic.map((item) => (
                    <NavButton
                      onClick={() => {
                        Navigate(item.linkTo);
                      }}
                      sx={{ borderLeft: 1, borderColor: '#E0E0E0' }}
                    >
                      <ButtonText>{item.label}</ButtonText>
                    </NavButton>
                  ))}
                  <NavButton
                    onClick={handleClick}
                    sx={{ borderLeft: 1, borderColor: '#E0E0E0' }}
                  >
                    <ButtonText>Theo dõi</ButtonText>
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </NavButton>
                  <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                    {employeeMenu.others.map((item) => (
                      <MenuItem
                        sx={{ fontWeight: 700 }}
                        onClick={() => {
                          Navigate(item.linkTo);
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
              {isEmployer && (
                <>
                  {employerMenu.basic.map((item) => (
                    <NavButton
                      onClick={() => {
                        Navigate(item.linkTo);
                      }}
                      sx={{ borderLeft: 1, borderColor: '#E0E0E0' }}
                    >
                      <ButtonText>{item.label}</ButtonText>
                    </NavButton>
                  ))}
                  <NavButton
                    onClick={handleClick}
                    sx={{ borderLeft: 1, borderColor: '#E0E0E0' }}
                  >
                    <ButtonText>Ứng viên</ButtonText>
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </NavButton>
                  <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                    {employerMenu.others.map((item) => (
                      <MenuItem
                        sx={{ fontWeight: 700 }}
                        onClick={() => {
                          Navigate(item.linkTo);
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
              {isAdmin && (
                <>
                  {adminMenu.basic.map((item) => (
                    <NavButton
                      onClick={() => {
                        Navigate(item.linkTo);
                      }}
                      sx={{ borderLeft: 1, borderColor: '#E0E0E0' }}
                    >
                      <ButtonText>{item.label}</ButtonText>
                    </NavButton>
                  ))}
                </>
              )}
            </Box>

            <Box display={{ md: 'none', xs: userId ? 'flex' : 'none' }}>
              <>
                <NavButton onClick={handleMobileClick}>
                  <ButtonText>Công cụ</ButtonText>
                  {openMobile ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </NavButton>
                <Menu
                  open={openMobile}
                  onClose={handleMobileClose}
                  anchorEl={mobileAnchorEl}
                >
                  {isEmployee &&
                    employeeMenu.basic
                      .concat(employeeMenu.others)
                      .map((option) => (
                        <MenuItem
                          sx={{ fontWeight: 700 }}
                          onClick={() => {
                            Navigate(option.linkTo);
                          }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                  {isEmployer &&
                    employerMenu.basic
                      .concat(employerMenu.others)
                      .map((option) => (
                        <MenuItem
                          sx={{ fontWeight: 700 }}
                          onClick={() => {
                            Navigate(option.linkTo);
                          }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                  {isAdmin &&
                    adminMenu.basic.map((option) => (
                      <MenuItem
                        sx={{ fontWeight: 700 }}
                        onClick={() => {
                          Navigate(option.linkTo);
                        }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                </Menu>
              </>
            </Box>
          </Box>
        )}
      </Stack>

      <Box display="flex" alignItems="center">
        {userId ? (
          <>
            <HeaderButtons />
            <HeaderUserbox />
          </>
        ) : (
          <>
            <Link href="/login" variant="body2">
              Đăng nhập/
            </Link>
            <Link href="/register" variant="body2">
              Đăng kí
            </Link>
            <Link
              href={`/register?role=${Role.EMPLOYER}`}
              variant="body2"
              marginLeft={2}
            >
              Dành cho NTD
            </Link>
          </>
        )}
        {showSideBar && userId && (
          <Box
            component="span"
            sx={{
              ml: 2,
              display: { lg: 'none', xs: 'inline-block' }
            }}
          >
            <Tooltip arrow title="Toggle Menu">
              <IconButton color="primary" onClick={toggleSidebar}>
                {!sidebarToggle ? (
                  <MenuTwoToneIcon fontSize="small" />
                ) : (
                  <CloseTwoToneIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
