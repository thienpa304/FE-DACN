import { Box, styled } from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import useProfileHook from '../hooks/useUserHook';
import InfoField from './Information/InfoField';
import UserCover from './Information/UserCover';
import dayjs from 'dayjs';
import { useApp } from 'src/modules/app/hooks';

const CustomBox = styled(Box)(({ theme }) => ({
  background: '#ffff',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  boxShadow: '2px 2px 6px #aae2f7'
}));

export default function InfoAccountTab() {
  const { isEmployee } = useApp();
  const { userProfile: user } = useProfileHook();
  const isMarried = user?.isMarried ? 'Đã kết hôn' : 'Độc thân';
  const dob = dayjs(user?.dob, 'DD-MM-YYYY').isValid() ? user?.dob : null;
  const UserData = [
    { label: 'Họ và tên', value: user?.name },
    { label: 'Giới tính', value: user?.sex },
    { label: 'Ngày sinh', value: dob },
    { label: 'Email', value: user?.email },
    { label: 'Số điện thoại', value: user?.phone },
    { label: 'Tình trạng hôn nhân', value: isMarried },
    { label: 'Địa chỉ', value: user?.address }
  ];
  if (!isEmployee) {
    // if isEmployee is true, remove { label: 'Tình trạng hôn nhân', value: isMarried } from UserData
    UserData.splice(
      UserData.findIndex((item) => item.label === 'Tình trạng hôn nhân'),
      1
    );
  }
  return (
    <>
      <CustomBox>
        <UserCover />
      </CustomBox>
      <CustomBox>
        <InfoField
          user={user}
          data={UserData}
          title="Thông tin cá nhân"
          editIcon={
            <ListAltOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
          }
          openForm="User"
        />
      </CustomBox>
    </>
  );
}
