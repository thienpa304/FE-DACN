import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import JobList from 'src/modules/jobs/components/JobList';
import { useSearchParams } from 'react-router-dom';

function ResultJobList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobTitle = searchParams.get('search');
  const workAddress = searchParams.get('address');
  const profession = searchParams.get('profession');

  return (
    <JobList
      pageTitle={`Kết quả việc làm: ${jobTitle || profession || workAddress}`}
      profession={profession}
      jobTitle={jobTitle}
      workAddress={workAddress}
      queryJobs={useQueryAllJob}
    />
  );
}

export default ResultJobList;
