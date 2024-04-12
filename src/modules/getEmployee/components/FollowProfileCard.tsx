import { useEffect, useState } from 'react';
import { EmployeeCard, ProfileCardDialog } from './ProfileCardComponent';
import useQueryFollowOnlineProfileById from '../hook/useQueryFollowOnlineProfileById';
import useQueryFollowDocumentProfileById from '../hook/useQueryFollowDocumentProfileById';

function FollowProfileCard({ profile }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formattedProfile, setFormattedProfile] = useState(null);

  const { onlineProfile } = useQueryFollowOnlineProfileById({
    userId: selectedProfile?.userId,
    isOnlineProfile: selectedProfile?.isOnlineProfile
  });

  const { documentProfile } = useQueryFollowDocumentProfileById({
    userId: selectedProfile?.userId,
    isOnlineProfile: selectedProfile?.isOnlineProfile
  });

  const processedProfile = { ...profile, ...profile.file };
  delete processedProfile.file;

  const handleClose = () => {
    setSelectedProfile(null);
    setFormattedProfile(null);
  };

  useEffect(() => {
    if (!onlineProfile) return;
    const {
      name,
      email,
      dob,
      phone,
      sex,
      isMarried,
      avatar,
      address,
      ...online_profile
    } = onlineProfile;

    const newProfile = {
      personal_information: {
        name,
        email,
        dob,
        phone,
        sex,
        isMarried,
        avatar,
        address
      },
      online_profile
    };
    setFormattedProfile(newProfile);
  }, [JSON.stringify(onlineProfile)]);

  useEffect(() => {
    if (!documentProfile) return;
    const {
      name,
      email,
      dob,
      phone,
      sex,
      isMarried,
      avatar,
      address,
      ...attached_document
    } = documentProfile;

    const newProfile = {
      personal_information: {
        name,
        email,
        dob,
        phone,
        sex,
        isMarried,
        avatar,
        address
      },
      attached_document
    };
    setFormattedProfile(newProfile);
  }, [JSON.stringify(documentProfile)]);

  return (
    <>
      <EmployeeCard
        profile={processedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      <ProfileCardDialog
        selectedProfile={formattedProfile}
        setSelectedProfile={handleClose}
      />
    </>
  );
}

export default FollowProfileCard;
