import { useContext } from 'react';

import {
  Box,
  Button,
  List,
  ListItem,
  ListSubheader,
  styled
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import { useApp } from 'src/modules/app/hooks';
import { Role } from 'src/modules/users/model';
import {
  AccountCircleTwoTone as UserManageIcon,
  AssessmentTwoTone as StatisticReportIcon,
  SecurityTwoTone as ManageAccessIcon,
  EmailTwoTone as MailerIcon,
  WorkTwoTone as JobsPostingIcon,
  WorkOutlineTwoTone as ManageProfileIcon,
  AnalyticsTwoTone as AnalyzeProfileIcon,
  NotificationsActiveTwoTone as JobSuggestIcon
} from '@mui/icons-material';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: 0 5px 0 9px;

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
    .MuiListItem-root .MuiButton-root {
      padding: 9px 12px;
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.black[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.black[100]}; 
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.black[100]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active{
            background-color: ${theme.colors.primary.lighter};
          }
          &:hover {
            background-color: ${theme.colors.alpha.black[10]};
            color: ${theme.colors.alpha.black[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.black[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const {
    user: { role = Role.EMPLOYEE },
    isEmployer,
    isEmployee,
    isAdmin
  } = useApp();
  const rolePath = role?.toLowerCase();

  return (
    <>
      <MenuWrapper>
        {isEmployer && (
          <>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Quản lý đăng tuyển
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/recruitment/create`}
                      startIcon={<BorderColorIcon />}
                    >
                      Tạo tin tuyển dụng
                    </Button>
                  </ListItem>
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/recruitment/list`}
                      startIcon={<BallotTwoToneIcon />}
                    >
                      Danh sách tin đăng
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Quản lý ứng viên
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/candidate/profile`}
                      startIcon={<CheckBoxTwoToneIcon />}
                    >
                      Hồ sơ ứng tuyển
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          </>
        )}

        {isEmployee && (
          <>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Quản lý hồ sơ
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/recruitment-profile`}
                      startIcon={<ReceiptLongIcon />}
                    >
                      Hồ sơ của bạn
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Quản lý việc làm
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/job-applied`}
                      startIcon={<PlaylistAddCheckCircleIcon />}
                    >
                      Việc làm đã ứng tuyển
                    </Button>
                  </ListItem>
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/job-follow`}
                      startIcon={<FavoriteIcon />}
                    >
                      Việc làm đã theo dõi
                    </Button>
                  </ListItem>
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/job-recommend`}
                      startIcon={<JobSuggestIcon />}
                    >
                      Gợi ý việc làm
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          </>
        )}
        {isAdmin && (
          <>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Quản lý hệ thống
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/user-manage`}
                      startIcon={<UserManageIcon />}
                    >
                      Quản lý người dùng
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/statistic-report`}
                      startIcon={<StatisticReportIcon />}
                    >
                      Thống kê và báo cáo
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/manage-access`}
                      startIcon={<ManageAccessIcon />}
                    >
                      Bảo mật và quản lý quyền truy cập
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/mailer`}
                      startIcon={<MailerIcon />}
                    >
                      Thông báo qua email
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Quản lý công việc
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/jobs-posting`}
                      startIcon={<JobsPostingIcon />}
                    >
                      Việc đăng tuyển
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${rolePath}/manage-profile`}
                      startIcon={<ManageProfileIcon />}
                    >
                      Quản lý hồ sơ và CV
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          </>
        )}

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Quản lý tài khoản
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to={`/${rolePath}/profile`}
                  startIcon={<AccountCircleTwoToneIcon />}
                >
                  Hồ sơ cá nhân
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
