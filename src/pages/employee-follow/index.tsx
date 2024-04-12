import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import FollowProfileCard from 'src/modules/getEmployee/components/FollowProfileCard';
import ProfileCard from 'src/modules/getEmployee/components/ProfileCard';
import useQueryEmployee from 'src/modules/getEmployee/hook/useQueryEmployee';
import useQueryFollowEmployee from 'src/modules/getEmployee/hook/useQueryFollowEmployee';

export default function EmployeeFollow() {
  const { profile } = useQueryEmployee();
  const { employeeFollow, isLoading } = useQueryFollowEmployee();
  const [employeeList, setEmployeeList] = useState(employeeFollow);

  useEffect(() => {
    const newList = employeeFollow?.map((item) => {
      return {};
    });
    setEmployeeList(() => newList);
  }, [employeeFollow]);

  if (isLoading) return <SuspenseLoader />;
  if (!profile?.length) {
    return (
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography fontSize={18} fontStyle="italic" color="#9999">
          Bạn chưa theo dõi hồ sơ nào cả
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ p: 3 }}>
      <Typography mb={2} fontSize={22} fontWeight={700}>
        Hồ sơ đã lưu
      </Typography>
      <Grid container mb={3} spacing={2}>
        {employeeFollow?.map((item, index) => (
          <Grid key={index} item xs={12} sm={3}>
            <FollowProfileCard profile={item} />
          </Grid>
        ))}
      </Grid>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </Container>
  );
}
