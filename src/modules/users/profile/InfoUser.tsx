import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { useApp } from 'src/modules/app/hooks';
import useProfileHook from '../hooks/useUserHook';
import { ISMARRIED } from 'src/constants/option';
import InfoTab from './Information/InfoTab';
import dayjs from 'dayjs';
export default function UserInfo() {
  // const { user } = useApp();

  debugger;
  const { userProfile: user } = useProfileHook();
  const isMarried = user?.isMarried === true ? 'Đã kết hôn' : 'Độc thân';
  const dob = dayjs(user?.dob).isValid() ? user?.dob : null;
  const UserData = [
    { label: 'Họ và tên', value: user?.name },
    { label: 'Giới tính', value: user?.sex },
    { label: 'Ngày sinh', value: dob },
    { label: 'Email', value: user?.email },
    { label: 'Số điện thoại', value: user?.phone },
    { label: 'Tình trạng hôn nhân', value: isMarried },
    { label: 'Địa chỉ', value: user?.address }
  ];

  return (
    <InfoTab
      user={user}
      data={UserData}
      title="Thông tin cá nhân"
      editIcon={<ListAltOutlinedIcon color="primary" sx={{ fontSize: 60 }} />}
      openForm="User"
    />
  );
}
