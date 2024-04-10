import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import ProfileCard from 'src/modules/getEmployee/components/ProfileCard';
import useQueryEmployee from 'src/modules/getEmployee/hook/useQueryEmployee';

export default function EmployeeFollow() {
  const { profile, isLoading } = useQueryEmployee();
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const newList = profile?.map((item) => {
      return {};
    });
    setEmployeeList(() => newList);
  }, [profile]);

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
          Bạn chưa theo dõi tin tuyển dụng nào cả
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
        {employeeList?.map((item, index) => (
          <Grid key={index} item xs={12} sm={3}>
            <ProfileCard profile={item} />
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
