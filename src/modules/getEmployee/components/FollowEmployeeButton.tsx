import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useMutateFollowEmployeeById from '../hook/useMutateFollowEmployeeById';
import { useApp } from 'src/modules/app/hooks';
import FollowButton from 'src/components/FollowButton';

export default function FollowEmployeeButton(props) {
  const { employeeProfile, sx } = props;
  const { onFollowEmployeeById } = useMutateFollowEmployeeById();
  const { isEmployer } = useApp();
  const [isFollowed, setIsFollowed] = useState(employeeProfile?.isFollowed);

  const handleToggleFollow = (id, isOnlineProfile) => {
    onFollowEmployeeById([id, isOnlineProfile]);
    setIsFollowed((prev) => !prev);
  };

  useEffect(() => {
    if (employeeProfile) setIsFollowed(employeeProfile?.isFollowed);
  }, [JSON.stringify(employeeProfile)]);

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
      <FollowButton isFollowed={isFollowed} />
    </Box>
  );
}
