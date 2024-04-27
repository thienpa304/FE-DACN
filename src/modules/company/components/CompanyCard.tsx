import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Container
} from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BusinessIcon from '@mui/icons-material/Business';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkText from 'src/components/LinkText';
import { defaultImage } from 'src/constants/uploadFileRule';
import FollowButton from '../../jobs/components/FollowJobButton';
import { makeStyles } from '@mui/styles';
import { Company } from 'src/modules/users/model';
import FollowCompanyButton from './FollowJobButton';
import { convertVietNamString } from 'src/utils/convertVietNamString';
const useStyles = makeStyles((theme) => ({
  coverImage: {
    width: '100%',
    height: '120px',
    objectFit: 'cover'
  },
  paper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function CompanyCard({
  company,
  employerId
}: {
  company: Company;
  employerId: number;
}) {
  const classes = useStyles();
  const [companyAvatar, setCompanyAvatar] = useState(
    company?.logo || defaultImage.companyAvatar
  );

  return (
    <Card
      sx={{
        border: 1,
        borderRadius: '3px',
        borderColor: '#98E4FF',
        height: '350px'
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
          <Box>
            <img
              src={company?.banner || defaultImage.companyCover}
              alt="cover"
              className={classes.coverImage}
            />
            <Box display={'flex'} gap={2}>
              <Avatar
                src={companyAvatar}
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
                  pt: 2,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  component={LinkText}
                  to={`/company/${convertVietNamString(company?.companyName)}`}
                  state={{ id: employerId }}
                  sx={{
                    ':hover': {
                      color: '#ce8b0e'
                    },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    lineHeight: 1.5,
                    height: 65
                  }}
                  fontWeight={700}
                >
                  {company?.companyName}
                </Typography>
                <FollowCompanyButton
                  employerId={employerId}
                  sx={{
                    display: 'flex',
                    alignSelf: 'end',
                    justifySelf: 'self-end'
                  }}
                />
              </Box>
            </Box>
          </Box>
        }
      />
      <CardContent sx={{ px: 2, py: 1 }}>
        <Box display="flex" flexDirection="column" gap={1}>
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
              Lĩnh vực: {company?.careerField}
            </Typography>
          </Box>
          <Box display="flex" my={1}>
            <LocationOnOutlinedIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2
              }}
            >
              Địa điểm: {company?.companyLocation}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CompanyCard;
