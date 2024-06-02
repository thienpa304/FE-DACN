import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';

export default function FollowButton(props) {
  const { isFollowed: isFollowing } = props;
  const [isFollowed, setIsFollowed] = useState(isFollowing);

  const handleToggleFollow = (id) => {
    setIsFollowed((prev) => !prev);
  };

  useEffect(() => {
    setIsFollowed(isFollowing);
  }, [isFollowing]);

  return (
    <Box
      onClick={handleToggleFollow}
      sx={{ display: 'flex', alignItem: 'center' }}
    >
      {isFollowed ? (
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
