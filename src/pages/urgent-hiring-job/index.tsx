import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import JobList from 'src/modules/jobs/components/JobList';

function UrgentHiringJob() {
  return <JobList pageTitle="Công việc tuyển gấp" queryJobs={useQueryAllJob} />;
}

export default UrgentHiringJob;
