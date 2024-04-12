import CVPage from './ViewCV';
import useQueryCandidateApplicationById from 'src/modules/application/hooks/useQueryCandidateApplicationById';
import { useLocation } from 'react-router';

export default function ViewCandidateProfile({ user }) {
  const { state } = useLocation();
  const param = state as any;
  const { applicationId } = param;
  const { data } = useQueryCandidateApplicationById(applicationId);

  return <CVPage user={data} />;
}
