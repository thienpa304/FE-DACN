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

function CardItemJob({ job }) {
  const [companyAvatar, setCompanyAvatar] = useState(
    defaultImage.companyAvatar
  );

  return (
    <LinkText to={`/job/${job?.postId}`}>
      <Card sx={{ height: 160, border: 1, borderColor: '#98E4FF' }}>
        <CardHeader sx={{ py: 1, color: '#ce8b0e' }} title={job.jobTitle} />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'row', gap: 4, pt: 1 }}
        >
          <Grid container gap={2}>
            <Grid item xs={3}>
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
            <Grid item xs>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <BusinessIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                  <Typography>{job.employer?.companyName}</Typography>
                </Box>
                <Box display="flex">
                  <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
                  <Typography color="secondary" fontWeight={700}>
                    {job.minSalary || job.maxSalary
                      ? `${job.minSalary || 'Thương lượng'} - ${
                          job.maxSalary || 'Thương lượng'
                        } triệu`
                      : 'Thương lượng'}
                  </Typography>
                </Box>
                <Box display="flex">
                  <LocationOnOutlinedIcon
                    sx={{ maxHeight: 18, color: 'grey.700' }}
                  />
                  <Typography>{job.workAddress}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </LinkText>
  );
}

export default CardItemJob;
