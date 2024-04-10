import React, { useEffect, useState } from 'react';
import useQueryFollowEmmployee from '../hook/useQueryFollowEmployee';
import { Box, IconButton } from '@mui/material';
import useMutateFollowEmployeeById from '../hook/useMutateFollowEmployeeById';
import { useApp } from 'src/modules/app/hooks';
import FollowButton from 'src/components/FollowButton';

export default function FollowEmployeeButton(props) {
  const { employee, sx } = props;
  const { jobFollow } = useQueryFollowEmmployee();
  const { onFollowEmployeeById } = useMutateFollowEmployeeById();
  const { isEmployer } = useApp();
  const [isFollow, setIsFollow] = useState(false);

  const handleToggleFollow = (id) => {
    onFollowEmployeeById([id]);
    setIsFollow((prev) => !prev);
  };

  useEffect(() => {
    const foundItem = jobFollow?.find(
      (item) => item?.userId === employee?.userId
    );
    foundItem && setIsFollow(true);
  }, [jobFollow, employee]);

  if (!employee || !isEmployer) return;

  return (
    <Box
      onClick={() => handleToggleFollow(employee?.userId)}
      sx={{ display: 'flex', alignItem: 'center', ...sx }}
    >
      <FollowButton isFollow={isFollow} />
    </Box>
  );
}
