import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useMutateFollowJobById from '../hooks/useMutateFollowJobById';
import { useApp } from 'src/modules/app/hooks';
import FollowButton from 'src/components/FollowButton';
import useFollowJobList from 'src/modules/jobs/hooks/useFollowJobList';
import useJobList from '../hooks/useJobList';
import useQueryFollowJobs from '../hooks/useQueryFollowJobs';

export default function FollowJobButton(props) {
  const { job, sx } = props;
  const { onFollowJobById } = useMutateFollowJobById();
  const { isEmployee } = useApp();
  const [isFollowed, setIsFollowed] = useState(false);
  const { followJobsList } = useFollowJobList();
  const { jobList } = useJobList();
  useQueryFollowJobs({ jobIds: jobList?.join(',') });

  const handleToggleFollow = (id) => {
    onFollowJobById([id]);
    setIsFollowed((prev) => !prev);
  };

  useEffect(() => {
    debugger;
    if (!job || !followJobsList?.length) return;
    const foundItem = followJobsList?.includes(job?.postId);
    foundItem && setIsFollowed(true);
  }, [JSON.stringify(followJobsList), JSON.stringify(job)]);

  if (!job || !isEmployee) return;

  return (
    <Box
      onClick={() => handleToggleFollow(job?.postId)}
      sx={{ display: 'flex', alignItem: 'center', ...sx }}
    >
      <FollowButton isFollowed={isFollowed} />
    </Box>
  );
}
