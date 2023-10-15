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

function CardItemJob({ job }) {
  return (
    <LinkText to={`/job/${job?.postId}`}>
      <Card sx={{ minHeight: 160, border: 1, borderColor: '#98E4FF' }}>
        <CardHeader sx={{ py: 1, color: '#ce8b0e' }} title={job.jobTitle} />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'row', gap: 4, pt: 1 }}
        >
          <Grid container gap={2}>
            <Grid item xs={3}>
              <Avatar
                src="https://images.vietnamworks.com/img/company-default-logo.svg"
                variant="rounded"
                sx={{
                  height: '100%',
                  width: '100%'
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
