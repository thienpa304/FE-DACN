import ViewCV from './ViewCV';
import useQueryCandidateApplicationById from 'src/modules/application/hooks/useQueryCandidateApplicationById';
import { useLocation } from 'react-router';
import SuspenseLoader from 'src/components/SuspenseLoader';

export default function ViewCandidateProfile({ user }) {
  const { state } = useLocation();
  const param = state as any;
  const { applicationId } = param;
  const { data, isLoading } = useQueryCandidateApplicationById(applicationId);

  if (isLoading) return <SuspenseLoader />;
  return <ViewCV user={data} />;
}
