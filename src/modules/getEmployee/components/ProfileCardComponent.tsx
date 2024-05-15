import {
  IconButton,
  Divider,
  Box,
  Typography,
  DialogTitle,
  Dialog,
  DialogContent,
  CardHeader,
  CardContent,
  Avatar,
  Card
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FollowEmployeeButton from './FollowEmployeeButton';
import ViewCV from 'src/pages/view-candidate-profile/ViewCV';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GradeIcon from '@mui/icons-material/Grade';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { isMobile } from 'src/constants/reponsive';

const EmployeeCard = ({ profile, setSelectedProfile }) => (
  <Card
    sx={{
      border: 1,
      borderRadius: '3px',
      borderColor: '#98E4FF',
      height: '430px',
      width: '100%'
    }}
  >
    <CardHeader
      sx={{
        py: 1,
        color: '#aa720a',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        whiteSpace: 'normal'
      }}
      title={
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 55
            }}
          >
            <Typography
              sx={{
                ':hover': {
                  color: '#ce8b0e',
                  cursor: 'pointer'
                },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                lineHeight: 1.5,
                flex: 1
              }}
              fontWeight={700}
              fontSize={18}
              onClick={() => {
                setSelectedProfile(profile);
              }}
            >
              {profile?.jobTitle}
            </Typography>
            <FollowEmployeeButton employeeProfile={profile} />
          </Box>
        </>
      }
    />
    <CardContent sx={{ px: 2, py: 1 }}>
      <Box display={'flex'} gap={2} mb={2}>
        <Avatar
          src={profile.avatar}
          sx={{
            width: 100,
            height: 100,
            borderColor: '#98E4FF',
            borderRadius: '5px',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: 2
          }}
        >
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              height: 52
            }}
            fontWeight={700}
            fontSize={15}
          >
            {profile?.name}
          </Typography>
          <Box display="flex">
            <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                fontWeight: 700
              }}
            >
              {profile?.desiredSalary} Triệu
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex">
          <WorkHistoryIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1
            }}
          >
            {profile?.profession}
          </Typography>
        </Box>
        <Box display="flex">
          <PersonIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1
            }}
          >
            {profile?.currentPosition}
          </Typography>
        </Box>
        <Box display="flex">
          <AccessTimeIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1
            }}
          >
            Kinh nghiệm: {profile?.experience}
          </Typography>
        </Box>
        <Box display="flex">
          <SchoolIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1
            }}
          >
            Trình độ: {profile?.degree}
          </Typography>
        </Box>
        <Box display="flex">
          <GradeIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2
            }}
          >
            Kỹ năng: {profile?.skills}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const ProfileCardDialog = ({ selectedProfile, setSelectedProfile }) => (
  <Dialog
    open={selectedProfile !== null}
    fullWidth
    maxWidth="md"
    fullScreen={isMobile}
  >
    <DialogTitle
      sx={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem' }}
    >
      Hồ sơ
      <IconButton
        aria-label="close"
        onClick={() => {
          setSelectedProfile(null);
        }}
        sx={{
          position: 'absolute',
          right: 14,
          top: 14,
          color: (theme) => theme.palette.grey[500]
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <Divider
      sx={{
        bgcolor: '#B6FFFA',
        height: 2
      }}
    />
    <DialogContent>
      <ViewCV user={selectedProfile} bgcolor="none" showTitle={false} />
    </DialogContent>
  </Dialog>
);

export { EmployeeCard, ProfileCardDialog };
