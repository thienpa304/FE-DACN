import { useContext } from 'react';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Tooltip,
  alpha,
  lighten,
  styled,
  useTheme
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import Logo from 'src/components/LogoSign';
import HeaderButtons from './Buttons';
import HeaderMenu from './Menu';
import HeaderUserbox from './Userbox';
import { useApp } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';
import { useNavigate } from 'react-router';

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
      >
        {!showSideBar && (
          <Box display="flex">
            <Logo />
            <Button
              sx={{
                color: '#b27300',
                minWidth: '100px',
                borderLeft: 1,
                borderColor: '#dce2de'
              }}
              onClick={() => {
                Navigate('company');
              }}
            >
              Công ty
            </Button>
            {isEmployee && (
              <>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('employee/recruitment-profile');
                  }}
                >
                  Hồ sơ
                </Button>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('employee/job-recommend');
                  }}
                >
                  Phân tích hồ sơ
                </Button>
              </>
            )}
            {isEmployer && (
              <>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('employer/recruitment/create');
                  }}
                >
                  Tuyển dụng
                </Button>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('employer/recruitment/list');
                  }}
                >
                  Danh sách tin đăng
                </Button>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('employer/candidate/profile');
                  }}
                >
                  Hồ sơ ứng tuyển
                </Button>
              </>
            )}
            {isAdmin && (
              <>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('admin/user-manage');
                  }}
                >
                  Quản lý người dùng
                </Button>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('admin/manage-profile');
                  }}
                >
                  Quản lý hồ sơ CV
                </Button>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('admin/jobs-posting');
                  }}
                >
                  Quản lý tin đăng
                </Button>
                <Button
                  sx={{
                    color: '#b27300',
                    minWidth: '100px',
                    borderLeft: 1,
                    borderColor: '#dce2de'
                  }}
                  onClick={() => {
                    Navigate('admin/statistic-report');
                  }}
                >
                  Thống kê
                </Button>
              </>
            )}
          </Box>
        )}
        {/* <HeaderMenu /> */}
      </Stack>

      <Box display="flex" alignItems="center">
        <HeaderButtons />
        {userId ? (
          <HeaderUserbox />
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
        {showSideBar && (
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
