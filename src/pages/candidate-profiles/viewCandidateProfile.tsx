import React from 'react';
import useQueryCandidateProfiles from 'src/modules/application/hooks/useQueryCandidateProfiles';
import CVPage from '../view-cv';

export default function viewCandidateProfile({ user }) {
  const { data } = useQueryCandidateProfiles();
  return (
    <div>
      <CVPage user={user} />
    </div>
  );
}
