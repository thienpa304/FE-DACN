import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import JobList from 'src/modules/jobs/components/JobList';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { Box, Container, Typography } from '@mui/material';
import { useResponsive } from 'src/utils/responsive';

function ResultJobList() {
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get('search');
  const workAddress = searchParams.get('address');
  const profession = searchParams.get('profession');
  const { isMobile } = useResponsive();
  const ResultTypo = () => {
    return (
      <Box
        display={'flex'}
        columnGap={1}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Typography sx={{ fontSize: { md: 20, xs: 16 } }}>
          Kết quả việc làm:
        </Typography>
        {jobTitle && (
          <Typography fontWeight={700} sx={{ fontSize: { md: 20, xs: 16 } }}>
            {jobTitle}
          </Typography>
        )}
        {profession && (
          <Typography sx={{ fontSize: { md: 20, xs: 16 } }}>
            ngành <b>{profession}</b>
          </Typography>
        )}
        {workAddress && (
          <Typography sx={{ fontSize: { md: 20, xs: 16 } }}>
            tại <b>{workAddress}</b>
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <>
      <Container disableGutters maxWidth="md" sx={{ pt: 3 }}>
        <SearchBar to="/profession" />
      </Container>
      <JobList
        pageTitle={<ResultTypo />}
        profession={profession}
        jobTitle={jobTitle}
        workAddress={workAddress}
        queryJobs={useQueryAllJob}
      />
    </>
  );
}

export default ResultJobList;
