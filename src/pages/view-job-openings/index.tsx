import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import JobList from 'src/modules/jobs/components/JobList';

function JobOpenings() {
  return (
    <JobList pageTitle="Công việc đang tuyển" queryJobs={useQueryAllJob} />
  );
}

export default JobOpenings;
