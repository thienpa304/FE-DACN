import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import FollowProfileCard from 'src/modules/getEmployee/components/FollowProfileCard';
import ProfileCard from 'src/modules/getEmployee/components/ProfileCard';
import useQueryEmployee from 'src/modules/getEmployee/hook/useQueryEmployee';
import useQueryFollowEmployee from 'src/modules/getEmployee/hook/useQueryFollowEmployee';

export default function EmployeeFollow() {
  const { employeeFollow, isLoading } = useQueryFollowEmployee();
  const [employeeList, setEmployeeList] = useState(employeeFollow);

  useEffect(() => {
    const newList = employeeFollow?.map((item) => {
      return {};
    });
    setEmployeeList(() => newList);
  }, [employeeFollow]);

  if (isLoading) return <SuspenseLoader />;

  return (
    <Container sx={{ p: 3 }}>
      <Typography mb={2} fontSize={22} fontWeight={700}>
        Hồ sơ đã lưu
      </Typography>
      {employeeFollow?.length ? (
        <Grid container mb={3} spacing={2}>
          {employeeFollow?.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <FollowProfileCard profile={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Container
          sx={{
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography fontSize={18} fontStyle="italic" color="#9999">
            Bạn chưa theo dõi hồ sơ nào cả
          </Typography>
        </Container>
      )}
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
    </Container>
  );
}
