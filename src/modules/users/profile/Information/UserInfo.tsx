import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { useApp } from 'src/modules/app/hooks';
import InfoTab from './Content';

export default function UserInfo() {
  const { user, isEmployee } = useApp();

  const UserData = (user) => [
    { label: 'Họ và tên', value: user.name },
    { label: 'Giới tính', value: user.sex },
    { label: 'Ngày sinh', value: user.dob },
    { label: 'Email', value: user.email },
    { label: 'Số điện thoại', value: user.phone },
    { label: 'Địa chỉ', value: user.address },
    ...(isEmployee ? [{ label: 'Học vấn', value: user.degree }] : [])
  ];

  return (
    <InfoTab
      user={user}
      data={UserData(user)}
      title="Thông tin cá nhân"
      editIcon={<ListAltOutlinedIcon color="primary" sx={{ fontSize: 60 }} />}
      openForm="User"
    />
  );
}
