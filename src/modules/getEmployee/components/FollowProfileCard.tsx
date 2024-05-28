import { useEffect, useMemo, useState } from 'react';
import { EmployeeCard, ProfileCardDialog } from './ProfileCardComponent';
import useQueryFollowOnlineProfileById from '../hook/useQueryFollowOnlineProfileById';
import useQueryFollowDocumentProfileById from '../hook/useQueryFollowDocumentProfileById';
import SuspenseLoader from 'src/components/SuspenseLoader';
import useQueryEmployeeById from '../hook/useQueryEmployeeById';
import { applicationType } from '../model';
import { formatProfile } from './ProfileCard';

function FollowProfileCard({ profile }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formattedProfile, setFormattedProfile] = useState(null);

  const type = useMemo(() => {
    if (selectedProfile?.isOnlineProfile === true)
      return applicationType.online_profile;
    else if (selectedProfile?.isOnlineProfile === false)
      return applicationType.attached_document;
    else return null;
  }, [selectedProfile?.isOnlineProfile]);

  const { profile: profileData, isLoading } = useQueryEmployeeById(
    selectedProfile?.userId,
    {
      type: type
    }
  );

  const processedProfile = useMemo(() => {
    const newProfile = { ...profile, ...profile.file };
    delete newProfile.file;
    return newProfile;
  }, [profile]);

  const handleClose = () => {
    setSelectedProfile(null);
    setFormattedProfile(null);
  };

  useEffect(() => {
    if (selectedProfile?.userId) {
      const newProfile = formatProfile({ ...profileData });
      setFormattedProfile(() => newProfile);
    }
  }, [selectedProfile?.userId, selectedProfile?.applicationType, profileData]);

  return (
    <>
      <EmployeeCard
        profile={processedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      {isLoading ? (
        <SuspenseLoader />
      ) : (
        <ProfileCardDialog
          selectedProfile={formattedProfile}
          setSelectedProfile={handleClose}
        />
      )}
    </>
  );
}

export default FollowProfileCard;
