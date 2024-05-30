import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import JobList from 'src/modules/jobs/components/JobList';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { Container } from '@mui/material';

function ResultJobList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobTitle = searchParams.get('search');
  const workAddress = searchParams.get('address');
  const profession = searchParams.get('profession');
  const searchResult =
    (jobTitle ? jobTitle : '') +
    (profession ? ' ngành ' + profession : '') +
    (workAddress ? ' tại ' + workAddress : '');
  console.log('searchResult', profession);

  return (
    <>
      <Container disableGutters maxWidth="md" sx={{ pt: 3 }}>
        <SearchBar to="/profession" />
      </Container>
      <JobList
        pageTitle={`Kết quả việc làm: ${searchResult}`}
        profession={profession}
        jobTitle={jobTitle}
        workAddress={workAddress}
        queryJobs={useQueryAllJob}
      />
    </>
  );
}

export default ResultJobList;
