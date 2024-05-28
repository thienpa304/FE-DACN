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
import { TypographyEllipsis } from 'src/components/Typography';
import { useMemo } from 'react';

const EmployeeCard = ({ profile, setSelectedProfile }) => {
  const isHidden = useMemo(() => Boolean(!profile?.jobTitle), [profile]);

  return (
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
              <TypographyEllipsis
                sx={{
                  ':hover': {
                    color: !isHidden && '#ce8b0e',
                    cursor: 'pointer'
                  },
                  flex: 1,
                  //disable color
                  color: isHidden && 'text.disabled'
                }}
                fontWeight={700}
                fontSize={18}
                onClick={() => {
                  !isHidden && setSelectedProfile(profile);
                }}
                fontStyle={isHidden && 'italic'}
              >
                {!isHidden ? profile?.jobTitle : 'Hồ sơ đã ẩn'}
              </TypographyEllipsis>
              <FollowEmployeeButton employeeProfile={profile} />
            </Box>
          </>
        }
      />
      <CardContent sx={{ px: 2, py: 1 }}>
        <Box display={'flex'} gap={2} mb={2}>
          <Avatar
            src={!isHidden && profile?.avatar}
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
            <TypographyEllipsis
              sx={{
                height: 52
              }}
              fontWeight={700}
              fontSize={15}
            >
              {!isHidden && profile?.name}
            </TypographyEllipsis>
            <Box display="flex">
              <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
              <TypographyEllipsis
                sx={{
                  WebkitLineClamp: 1,
                  fontWeight: 700
                }}
              >
                {profile?.desiredSalary} Triệu
              </TypographyEllipsis>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex">
            <WorkHistoryIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
            <TypographyEllipsis
              sx={{
                WebkitLineClamp: 1
              }}
            >
              {profile?.profession}
            </TypographyEllipsis>
          </Box>
          <Box display="flex">
            <PersonIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
            <TypographyEllipsis
              sx={{
                WebkitLineClamp: 1
              }}
            >
              {profile?.currentPosition}
            </TypographyEllipsis>
          </Box>
          <Box display="flex">
            <AccessTimeIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
            <TypographyEllipsis
              sx={{
                WebkitLineClamp: 1
              }}
            >
              Kinh nghiệm: {profile?.experience}
            </TypographyEllipsis>
          </Box>
          <Box display="flex">
            <SchoolIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
            <TypographyEllipsis
              sx={{
                WebkitLineClamp: 1
              }}
            >
              Trình độ: {profile?.degree}
            </TypographyEllipsis>
          </Box>
          <Box display="flex">
            <GradeIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
            <TypographyEllipsis>Kỹ năng: {profile?.skills}</TypographyEllipsis>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProfileCardDialog = ({ selectedProfile, setSelectedProfile }) => {
  return (
    <Dialog
      open={Boolean(selectedProfile?.userId)}
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
};

export { EmployeeCard, ProfileCardDialog };
