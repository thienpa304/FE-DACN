import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkText from 'src/components/LinkText';
import { defaultImage } from 'src/constants/uploadFileRule';
import FollowJobButton from './FollowJobButton';
import { rewriteUrl } from 'src/utils/rewriteUrl';

function SmallJobCard({ job }) {
  const [companyAvatar, setCompanyAvatar] = useState(
    job?.employer?.logo || defaultImage.companyAvatar
  );

  return (
    <Card
      sx={{
        border: 1,
        borderRadius: '3px',
        borderColor: '#98E4FF',
        height: 170
      }}
    >
      <CardHeader
        sx={{
          py: 1,
          color: '#aa720a',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          whiteSpace: 'normal',
          height: '3.5em'
        }}
        title={
          <Box display={'flex'}>
            <Box
              component={LinkText}
              to={`/job/${rewriteUrl(job?.jobTitle)}?id=${btoa(job?.postId)}`}
              state={{
                postId: job?.postId
              }}
              flex={1}
              sx={{
                ':hover': {
                  color: '#ce8b0e'
                }
              }}
            >
              {job?.jobTitle}
            </Box>
            <FollowJobButton job={job} />
          </Box>
        }
      />
      <CardContent
        sx={{ display: 'flex', flexDirection: 'row', gap: 4, pt: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={3}>
            <Avatar
              src={companyAvatar}
              variant="rounded"
              sx={{
                width: 100,
                height: 90,
                objectFit: 'cover'
              }}
            />
          </Grid>
          <Grid item md={8} sm={6} xs={9}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <BusinessIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    whiteSpace: 'normal',
                    maxWidth: '90%'
                  }}
                >
                  {job?.employer?.companyName}
                </Typography>
              </Box>
              <Box display="flex">
                <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                <Typography color="secondary" fontWeight={700}>
                  {job?.minSalary || job?.maxSalary
                    ? `${job?.minSalary || 'Thương lượng'} - ${
                        job?.maxSalary || 'Thương lượng'
                      } triệu`
                    : 'Thương lượng'}
                </Typography>
              </Box>
              <Box display="flex">
                <LocationOnOutlinedIcon
                  sx={{ maxHeight: 18, color: 'grey.700' }}
                />
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '90%'
                  }}
                >
                  {job?.workAddress}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SmallJobCard;
