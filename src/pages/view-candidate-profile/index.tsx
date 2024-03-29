import CVPage from './ViewCV';
import useQueryCandidateProfileById from 'src/modules/application/hooks/useQueryCandidateProfileById';
import { useLocation } from 'react-router';

export default function ViewCandidateProfile({ user }) {
  const { state } = useLocation();
  const param = state as any;
  const { applicationId } = param;
  const { data } = useQueryCandidateProfileById(applicationId);

  return <CVPage user={data} />;
}
