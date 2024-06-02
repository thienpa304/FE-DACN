import React, { useEffect, useState } from 'react';
import useQueryFollowEmployee from '../hook/useQueryFollowEmployee';
import { Box } from '@mui/material';
import useMutateFollowEmployeeById from '../hook/useMutateFollowEmployeeById';
import { useApp } from 'src/modules/app/hooks';
import FollowButton from 'src/components/FollowButton';
import useQueryCheckFollowEmployee from '../hook/useQueryCheckFollowEmployee';
import { applicationType } from '../model';

export default function FollowEmployeeButton(props) {
  const { employeeProfile, sx } = props;
  const { employeeFollow } = useQueryCheckFollowEmployee({ page: 1, num: 100 });
  const { onFollowEmployeeById } = useMutateFollowEmployeeById();
  const { isEmployer } = useApp();
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = (id, isOnlineProfile) => {
    onFollowEmployeeById([id, isOnlineProfile]);
    setIsFollow((prev) => !prev);
  };

  const isFollowedProfile = (followProfile, currentProfile) => {
    if (!followProfile) return false;
    debugger;
    if (currentProfile.isOnlineProfile !== undefined) {
      debugger;
      return (
        followProfile?.userId === currentProfile?.userId &&
        followProfile?.isOnlineProfile === currentProfile.isOnlineProfile
      );
    } else {
      debugger;
      return (
        followProfile?.userId === currentProfile?.userId &&
        followProfile?.isOnlineProfile ===
          (currentProfile?.applicationType === applicationType.online_profile)
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
