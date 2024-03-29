import {
  Container,
  Typography,
  Box,
  Button,
  styled,
  Grid,
  Stack,
  Switch
} from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import useQueryOnlineProfile from '../../modules/jobProfile/onlineProfile/hooks/useQueryOnlineProfile';
import useUpdateOnlineProfile from '../../modules/jobProfile/onlineProfile/hooks/useMutateUpdateOnlineProfile';
import useQueryAttachedDocument from '../../modules/jobProfile/attachedDocument/hooks/useQueryAttachedDocument';
import useMutateUpdateAttachedDocument from '../../modules/jobProfile/attachedDocument/hooks/useMutateUpdateAttachedDocument';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  paddingInline: 20,
  borderRadius: 2,
  marginTop: 10,
  marginBottom: 40,
  boxShadow: '2px 2px 6px #aae2f7'
}));

const Item = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 120,
  height: 50,
  paddingInline: 15,
  fontSize: 15,
  color: 'gray'
}));

const ProfileSection = ({
  title,
  id,
  profile,
  isHidden,
  linkTo,
  onUpdateData
}) => {
  const handleHideProfile = () => {
    onUpdateData({
      ...profile,
      isHidden: !isHidden
    });
  };

  return (
    <>
      <Typography fontSize={18} fontWeight={700}>
        {title}
      </Typography>
      <CustomBox bgcolor="#ffff">
        <Grid container>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            gap={3}
            height={150}
          >
            <img
              title={id}
              src={
                id === 'online'
                  ? 'https://cdn-icons-png.flaticon.com/128/1309/1309245.png'
                  : 'https://cdn-icons-png.flaticon.com/512/3135/3135796.png'
              }
              width={100}
              color="secondary"
            />
            <Typography variant="h4">{profile?.jobTitle}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center">
            <Stack
              direction="row"
              divider={<Box component="hr" border={1} borderColor="grey.300" />}
            >
              <Item>Lượt xem: {profile?.view}</Item>
              <Item>
                Cho phép tìm kiếm
                <Switch
                  checked={!isHidden}
                  onChange={handleHideProfile}
                  name={`isHidden${id}`}
                />
              </Item>
              <Item>
                <Button
                  href={linkTo}
                  variant="outlined"
                  color="secondary"
                  startIcon={<ModeEditIcon />}
                >
                  Cập nhật hồ sơ
                </Button>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </CustomBox>
    </>
  );
};

export default function EmployeeProfile() {
  const { onlineProfile } = useQueryOnlineProfile();
  const { attachedDocument } = useQueryAttachedDocument();
  const { onUpdateData: onUpdateOnline } = useUpdateOnlineProfile();
  const { onUpdateData: onUpdateAttach } = useMutateUpdateAttachedDocument();

  const employeeProfiles = [
    {
      id: 'online',
      title: 'Hồ sơ trực tuyến',
      profile: onlineProfile,
      isHidden: onlineProfile?.isHidden || false,
      linkTo: '/employee/online-profile',
      onUpdateData: onUpdateOnline
    },
    {
      id: 'attach',
      title: 'Hồ sơ đính kèm',
      profile: attachedDocument,
      isHidden: attachedDocument?.isHidden || false,
      linkTo: '/employee/attachment-profile',
      onUpdateData: onUpdateAttach
    }
  ];

  return (
    <Container>
      <Typography mt={3} fontSize={22} fontWeight={700}>
        Hồ sơ của bạn
      </Typography>
      <CustomBox height={120}>
        <TipsAndUpdatesIcon fontSize="large" color="secondary" />
        <Typography fontSize={12} lineHeight={2} color="secondary">
          <ul>
            <li>Bạn có thể tạo tối đa 02 hồ sơ.</li>
            <li>
              Bật "Cho phép tìm kiếm" sẽ tăng tối đa cơ hội được Nhà tuyển dụng
              liên hệ với bạn.
            </li>
            <li>
              Các hồ sơ ở trạng thái "Đã duyệt" đều có thể sử dụng để nộp Hồ sơ
              một cách nhanh chóng.
            </li>
          </ul>
        </Typography>
      </CustomBox>
      {employeeProfiles.map((profileItem) => (
        <ProfileSection key={profileItem.id} {...profileItem} />
      ))}
    </Container>
  );
}
