import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useQueryFollowJobs from '../hooks/useQueryFollowJobs';
import { Box, IconButton } from '@mui/material';
import useMutateFollowJobById from '../hooks/useMutateFollowJobById';
import { useApp } from 'src/modules/app/hooks';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { Job } from '../model';

export default function FollowButton(props) {
  const { job, sx } = props;
  const { jobFollow } = useQueryFollowJobs();
  const { onFollowJobById } = useMutateFollowJobById();
  const { isEmployee } = useApp();
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = (id) => {
    onFollowJobById([id]);
    setIsFollow(!isFollow);
  };

  useEffect(() => {
    const foundItem = jobFollow?.find((item) => item.postId === job?.postId);
    foundItem && setIsFollow(true);
  }, [jobFollow, job]);

  if (!job || !isEmployee) return;

  return (
    <Box
      onClick={() => handleToggleFollow(job?.postId)}
      sx={{ display: 'flex', alignItem: 'center', ...sx }}
    >
      {isFollow ? (
        <FavoriteIcon
          sx={{
            display: 'flex',
            color: 'red',
            '&:hover': {
              color: 'darkred'
            }
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            display: 'flex',
            color: 'red',
            '&:hover': {
              color: 'darkred'
            }
          }}
        />
      )}
    </Box>
  );
}
