import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider
} from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GradeIcon from '@mui/icons-material/Grade';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FollowJobButton from '../../jobs/components/FollowJobButton';
import { ProfileShowType } from '../model';
import CVPage from 'src/pages/view-candidate-profile/ViewCV';
import CloseIcon from '@mui/icons-material/Close';
import FollowEmployeeButton from './FollowEmployeeButton';

function ProfileCard({ profile }: { profile: ProfileShowType }) {
  const [profileAvatar, setProfileAvatar] = useState(
    profile?.employee?.user?.avatar
  );
  const [selectedProfile, setSelectedProfile] = useState<ProfileShowType>(null);
  const [formattedProfile, setFormattedProfile] = useState<any>(null);

  useEffect(() => {
    const {
      employee,
      another_degrees,
      education_informations,
      work_experiences,
      CV,
      ...rest
    } = profile;
    const online_profile = profile?.another_degrees
      ? {
          ...rest,
          another_degrees: profile?.another_degrees,
          education_informations: profile?.education_informations,
          work_experiences: profile?.work_experiences
        }
      : null;
    const attached_document = profile?.CV
      ? {
          ...rest,
          CV: profile?.CV
        }
      : null;
    const newProfile = {
      personal_information: {
        ...profile?.employee?.user,
        isMarried: profile?.employee?.isMarried
      },
      online_profile: online_profile,
      attached_document: attached_document
    };
    setFormattedProfile(newProfile);
  }, [profile]);

  return (
    <>
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
                    setSelectedProfile(formattedProfile);
                  }}
                >
                  {profile.jobTitle}
                </Typography>
                <FollowEmployeeButton employee={profile} />
              </Box>
            </>
          }
        />
        <CardContent sx={{ px: 2, py: 1 }}>
          <Box display={'flex'} gap={2} mb={2}>
            <Avatar
              src={profileAvatar}
              sx={{
                width: 100,
                height: 100,
                border: 1,
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
                {profile?.employee?.user?.name}
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
      <Dialog open={selectedProfile !== null} fullWidth maxWidth="md">
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
          <CVPage user={selectedProfile} bgcolor="none" showTitle={false} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProfileCard;
