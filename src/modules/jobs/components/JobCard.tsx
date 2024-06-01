import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useApp } from 'src/modules/app/hooks';
import { defaultImage } from 'src/constants/uploadFileRule';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FollowJobButton from './FollowJobButton';
import LinkText from 'src/components/LinkText';
import { Job } from '../model';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import { TypographyEllipsis } from 'src/components/Typography';
import LazyLoadImage from 'src/components/LazyLoadImage';

function JobCard({ job }: { job: Job }) {
  const companyAvatar = useMemo(
    () => job?.employer?.logo || defaultImage.companyAvatar_md,
    [job?.employer?.logo]
  );

  return (
    <Card
      sx={{
        minHeight: 160,
        border: 1,
        borderColor: '#98E4FF',
        borderRadius: '3px'
      }}
    >
      <CardHeader
        sx={{
          pt: 1.5,
          pb: 0,
          color: '#ce8b0e',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          whiteSpace: 'normal'
        }}
        title={
          <Box display={'flex'}>
            <Box
              component={LinkText}
              to={`/job/${rewriteUrl(job?.jobTitle)}?id=${btoa(
                job?.postId.toString()
              )}`}
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
      <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <Grid container gap={2}>
          <Grid
            item
            sm={2}
            xs={12}
            display="flex"
            // justifyContent="center"
            sx={{ justifyContent: (theme) => ({ xs: 'center', sm: 'left' }) }}
          >
            <LazyLoadImage
              src={companyAvatar}
              placeholderSrc={defaultImage.companyAvatar_sm}
              sx={{
                maxWidth: 100,
                width: 'auto',
                maxHeight: 100,
                height: 'auto',
                borderRadius: 10
              }}
            />
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Box display="flex">
              <BusinessIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
              <TypographyEllipsis>
                {job?.employer?.companyName}
              </TypographyEllipsis>
            </Box>
            <Box display="flex">
              <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
              <Typography>
                Lương:{' '}
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
              <TypographyEllipsis
                sx={{
                  WebkitLineClamp: 1
                }}
              >
                Địa điểm: {job?.workAddress}
              </TypographyEllipsis>
            </Box>
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Box display="flex">
              <WorkHistoryIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
              <Typography>Loại hình: {job?.employmentType}</Typography>
            </Box>
            <Box display="flex">
              <HowToRegIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
              <Typography>Vị trí: {job?.positionLevel}</Typography>
            </Box>
            <Box display="flex">
              <EventAvailableIcon sx={{ maxHeight: 18, color: 'grey.700' }} />
              <Typography>Hạn nộp: {job?.applicationDeadline}</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default JobCard;
