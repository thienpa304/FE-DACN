import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import professions from 'src/constants/professions';
import { useLocation, useParams } from 'react-router';
import JobList from 'src/modules/jobs/components/JobList';
import SuspenseLoader from 'src/components/SuspenseLoader';
import { PROFESSIONS } from 'src/constants';
import { rewriteUrl } from 'src/utils/rewriteUrl';
import { useSearchParams } from 'react-router-dom';

function ResultJobList() {
  const { state, pathname } = useLocation();
  const { id } = useParams();

  const professionName = PROFESSIONS.find((profession) => {
    const url = rewriteUrl(profession.name);

    return url === id;
  })?.name;

  console.log(professionName);
  const [searchParams, setSearchParams] = useSearchParams();
  const jobTitle = searchParams.get('search');
  console.log(jobTitle);

  return (
    <JobList
      pageTitle={`Việc làm: ${jobTitle || professionName}`}
      profession={professionName}
      jobTitle={jobTitle}
      queryJobs={useQueryAllJob}
    />
  );
}

export default ResultJobList;
