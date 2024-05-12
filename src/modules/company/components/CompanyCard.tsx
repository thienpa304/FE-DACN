import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  styled
} from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkText from 'src/components/LinkText';
import { defaultImage } from 'src/constants/uploadFileRule';
import { Company } from 'src/modules/users/model';
import FollowCompanyButton from './FollowJobButton';
import { rewriteUrl } from 'src/utils/rewriteUrl';

const CoverImage = styled('img')({
  width: '100%',
  height: '120px',
  objectFit: 'cover'
});

function CompanyCard({
  company,
  employerId
}: {
  company: Company;
  employerId: number;
}) {
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
            <CoverImage
              src={company?.banner || defaultImage.companyCover}
              alt="cover"
            />
            <Box display={'flex'} gap={2}>
              <Avatar
                src={companyAvatar}
                sx={{
                  width: 100,
                  height: 100,
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
                  to={`/company/${rewriteUrl(company?.companyName)}?id=${btoa(
                    employerId.toString()
                  )}`}
                  // state={{ id: employerId }}
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
