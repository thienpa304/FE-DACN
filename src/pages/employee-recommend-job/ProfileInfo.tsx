import { Box, Typography, Link } from '@mui/material';

const ProfileInfo = ({ id, profile, uploadedCV }) => {
  const isUploadCV = id === 'upload-cv';

  if (isUploadCV || !profile?.userId) {
    return (
      <Box display="flex">
        <Typography mb={1} color="grey.700" mr={2}>
          {isUploadCV ? (
            !uploadedCV.url && <em>* Vui lòng gửi lên CV xin việc của bạn !</em>
          ) : (
            <em>* Chưa có hồ sơ trong hệ thống !</em>
          )}
        </Typography>
        {!isUploadCV && (
          <Link href="/employee/recruitment-profile">
            <em>Đến tạo hồ sơ</em>
          </Link>
        )}
      </Box>
    );
  }

  return (
    <Box display="flex" alignItems="center">
      <img
        src={
          id === 'online'
            ? 'https://cdn-icons-png.flaticon.com/128/1309/1309245.png'
            : 'https://cdn-icons-png.flaticon.com/512/3135/3135796.png'
        }
        width={50}
        color="secondary"
        alt="Profile Image"
      />
      <Typography fontWeight={700} fontSize={16} lineHeight={3} ml={2}>
        {profile?.jobTitle}
      </Typography>
    </Box>
  );
};

export default ProfileInfo;
