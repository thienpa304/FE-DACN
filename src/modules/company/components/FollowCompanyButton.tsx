import React, { useEffect, useState } from 'react';
import useQueryFollowCompany from '../hook/useQueryFollowCompany';
import { Box, Button } from '@mui/material';
import { useApp } from 'src/modules/app/hooks';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useMutateFollowCompanyById from '../hook/useMutateFollowCompanyById';
import useCompanyList from '../hook/useCompanyList';
import useFollowCompanyList from '../hook/useFollowCompanyList';

export default function FollowCompanyButton(props) {
  const { sx, employerId } = props;
  const { onFollowCompanyById } = useMutateFollowCompanyById();
  const { isEmployee } = useApp();
  const [isFollow, setIsFollow] = useState(false);
  const { companyList } = useCompanyList();
  const { followCompanysList } = useFollowCompanyList();
  useQueryFollowCompany({ companyIds: companyList?.join(',') });

  const handleToggleFollow = (id) => {
    onFollowCompanyById([id]);
    setIsFollow(!isFollow);
  };

  useEffect(() => {
    const foundItem = followCompanysList?.includes(employerId);
    foundItem && setIsFollow(true);
  }, [JSON.stringify(followCompanysList), employerId]);

  if (!employerId || !isEmployee) return;

  return (
    <Box
      onClick={() => handleToggleFollow(employerId)}
      sx={{ display: 'flex', alignItem: 'center', ...sx }}
    >
      <Button
        sx={{
          display: 'flex',
          bgcolor: isFollow ? '#e5e7eb' : 'primary',
          '&:hover': {
            bgcolor: isFollow ? '#c0c2c5' : ''
          },
          width: 120
        }}
        size="small"
        variant="contained"
      >
        {isFollow ? 'Đang theo dõi' : 'Theo dõi'}
      </Button>
    </Box>
  );
}
