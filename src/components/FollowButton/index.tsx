import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';

export default function FollowButton(props) {
  const { isFollow: isFollowing } = props;
  const [isFollow, setIsFollow] = useState(isFollowing);

  const handleToggleFollow = (id) => {
    setIsFollow((prev) => !prev);
  };

  useEffect(() => {
    setIsFollow(isFollowing);
  }, [isFollowing]);

  return (
    <Box
      onClick={handleToggleFollow}
      sx={{ display: 'flex', alignItem: 'center' }}
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
