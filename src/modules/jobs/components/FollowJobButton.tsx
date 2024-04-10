import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useQueryFollowJobs from '../hooks/useQueryFollowJobs';
import { Box, IconButton } from '@mui/material';
import useMutateFollowJobById from '../hooks/useMutateFollowJobById';
import { useApp } from 'src/modules/app/hooks';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { Job } from '../model';
import FollowButton from 'src/components/FollowButton';

export default function FollowJobButton(props) {
  const { job, sx } = props;
  const { jobFollow } = useQueryFollowJobs();
  const { onFollowJobById } = useMutateFollowJobById();
  const { isEmployee } = useApp();
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = (id) => {
    onFollowJobById([id]);
    setIsFollow((prev) => !prev);
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
      <FollowButton isFollow={isFollow} />
    </Box>
  );
}
