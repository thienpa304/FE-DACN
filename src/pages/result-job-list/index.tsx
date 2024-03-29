import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import professions from 'src/constants/professions';
import { useParams } from 'react-router';
import JobList from 'src/modules/jobs/components/JobList';
import SuspenseLoader from 'src/components/SuspenseLoader';

function ResultJobList() {
  const { id } = useParams();
  const profession = professions.find(
    (profession) => profession.code.toString() === id
  )?.name;

  if (!profession) return <SuspenseLoader />;

  return (
    <JobList
      pageTitle={`Việc làm ${profession}`}
      profession={profession}
      queryJobs={useQueryAllJob}
    />
  );
}

export default ResultJobList;
