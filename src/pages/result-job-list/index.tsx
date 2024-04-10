import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import professions from 'src/constants/professions';
import { useLocation, useParams } from 'react-router';
import JobList from 'src/modules/jobs/components/JobList';
import SuspenseLoader from 'src/components/SuspenseLoader';

function ResultJobList() {
  const { state } = useLocation();

  const locationState = state as any;
  console.log(locationState);

  return (
    <JobList
      pageTitle={`Việc làm: ${locationState.pageTitle}`}
      profession={locationState.profession}
      jobTitle={locationState.jobTitle}
      queryJobs={useQueryAllJob}
    />
  );
}

export default ResultJobList;
