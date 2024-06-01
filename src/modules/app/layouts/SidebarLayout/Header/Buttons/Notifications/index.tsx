import {
  alpha,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography
} from '@mui/material';
import { useMemo, useRef, useState } from 'react';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { styled } from '@mui/material/styles';
import { useQueryNotification } from 'src/modules/notifications/hook/useQueryNotification';
import Pagination from 'src/components/Pagination';
import dayjs from 'dayjs';

const NotificationsBadge = styled(Badge)(
  ({ theme }) => `
    
    .MuiBadge-badge {
        background-color: ${alpha(theme.palette.error.main, 0.1)};
        color: ${theme.palette.error.main};
        min-width: 16px; 
        height: 16px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${alpha(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`
);

function HeaderNotifications() {
  const ref = useRef<any>(null);
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const { notificationList, totalPages } = useQueryNotification({
    page: currentPage,
    num: pageSize
  });
  const [isOpen, setOpen] = useState<boolean>(false);

  const showList = useMemo(
    () =>
      notificationList?.map((item) => {
        const yearInDiff = dayjs().diff(dayjs(item?.dateAndTime), 'year');
        const monthInDiff = dayjs().diff(dayjs(item?.dateAndTime), 'month');
        const dayInDiff = dayjs().diff(dayjs(item?.dateAndTime), 'day');
        const hourInDiff = dayjs().diff(dayjs(item?.dateAndTime), 'hour');
        const minuteInDiff = dayjs().diff(dayjs(item?.dateAndTime), 'minute');
        const inDiff = yearInDiff
          ? yearInDiff.toString() + ' năm trước'
          : monthInDiff
          ? monthInDiff.toString() + ' tháng trước'
          : dayInDiff
          ? dayInDiff.toString() + ' ngày trước'
          : hourInDiff
          ? hourInDiff.toString() + ' giờ trước'
          : minuteInDiff.toString() + ' phút trước';
        return {
          ...item,
          inDiff
        };
      }),
    [notificationList]
  );

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box>
      <Tooltip arrow title="Notifications">
        <IconButton color="primary" ref={ref} onClick={handleOpen}>
          <NotificationsBadge
            // badgeContent={1}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </NotificationsBadge>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{ width: 600 }}
      >
        <Box
          sx={{ p: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4">Thông báo</Typography>
        </Box>
        <Divider />
        <List sx={{ p: 0, minHeight: 220, maxWidth: 500 }}>
          {showList?.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                p: 2,
                minWidth: 350,
                display: { xs: 'block', sm: 'flex' },
                borderBottom: '1px solid #e0e0e0'
              }}
            >
              <Box flex="1">
                <Box display="flex" justifyContent="space-between">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {item?.title}
                  </Typography>
                  <Typography variant="caption" sx={{ textTransform: 'none' }}>
                    {item?.inDiff}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {item?.content}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={setCurrentPage}
          sx={{ my: 1 }}
          size={'small'}
          scrollToTop={false}
        />
      </Popover>
    </Box>
  );
}

export default HeaderNotifications;
