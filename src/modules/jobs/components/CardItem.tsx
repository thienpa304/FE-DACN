import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography
} from '@mui/material';
import { useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkText from 'src/components/LinkText';

function CardItemJob({ job }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <LinkText to={`/job/${job?.postId}`}>
      <Card sx={{ minHeight: 160 }}>
        <CardHeader
          sx={{ py: 1, color: 'grey.700' }}
          action={
            <IconButton color="primary" onClick={handleFavorite}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          }
          title={job.jobTitle}
        />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'row', gap: 2, pt: 1 }}
        >
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography fontWeight={700} fontSize={12} color="grey.600">
              {job.contactAddress}
            </Typography>
            <Box display="flex">
              <LocalAtmIcon sx={{ maxHeight: 20, color: 'grey.700' }} />
              <Typography>
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
        </CardContent>
      </Card>
    </LinkText>
  );
}

export default CardItemJob;
