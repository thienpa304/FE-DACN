import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import professions from 'src/constants/professions';
import { useLocation, useParams } from 'react-router';
import JobList from 'src/modules/jobs/components/JobList';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { PROFESSIONS } from 'src/constants';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import { useSearchParams } from 'react-router-dom';

function ResultJobList() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const jobTitle = searchParams.get('search');
  const workAddress = searchParams.get('address');
  const profession = searchParams.get('profession');

  const professionName = PROFESSIONS.find((profession) => {
    const url = rewriteUrl(profession.name);

    return url === id;
  })?.name;

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
