import React, { useEffect, useState } from 'react';
import useQueryFollowEmployee from '../hook/useQueryFollowEmployee';
import { Box, IconButton } from '@mui/material';
import useMutateFollowEmployeeById from '../hook/useMutateFollowEmployeeById';
import { useApp } from 'src/modules/app/hooks';
import FollowButton from 'src/components/FollowButton';

export default function FollowEmployeeButton(props) {
  const { employeeProfile, sx } = props;
  const { employeeFollow } = useQueryFollowEmployee();
  const { onFollowEmployeeById } = useMutateFollowEmployeeById();
  const { isEmployer } = useApp();
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = (id, isOnlineProfile) => {
    onFollowEmployeeById([id, isOnlineProfile]);
    setIsFollow((prev) => !prev);
  };

  const isFollowedProfile = (followProfile, currentProfile) => {
    if (!followProfile) return false;

    if (currentProfile.isOnlineProfile !== undefined)
      return (
        followProfile?.userId === currentProfile?.userId &&
        followProfile?.isOnlineProfile === currentProfile.isOnlineProfile
      );
    else {
      return (
        followProfile?.userId === currentProfile?.userId &&
        followProfile?.isOnlineProfile === (currentProfile?.CV === undefined)
      );
    }
  };

  useEffect(() => {
    const foundItem = employeeFollow?.find((item) => {
      return isFollowedProfile(item, employeeProfile);
    });
    foundItem && setIsFollow(true);
  }, [JSON.stringify(employeeFollow), JSON.stringify(employeeProfile)]);

  if (!employeeProfile || !isEmployer) return;

  return (
    <Box
      onClick={() =>
        handleToggleFollow(
          employeeProfile?.userId,
          !employeeProfile?.CV &&
            (employeeProfile?.isOnlineProfile !== undefined
              ? employeeProfile?.isOnlineProfile
              : true)
            ? '1'
            : '0'
        )
      }
      sx={{ display: 'flex', alignItem: 'center', ...sx }}
    >
      <FollowButton isFollow={isFollow} />
    </Box>
  );
}
