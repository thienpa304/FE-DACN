import { useEffect, useState } from 'react';
import { ProfileShowType } from '../model';
import { EmployeeCard, ProfileCardDialog } from './ProfileCardComponent';

function ProfileCard({ profile }: { profile: ProfileShowType }) {
  const [selectedProfile, setSelectedProfile] = useState<ProfileShowType>(null);
  const [formattedProfile, setFormattedProfile] = useState<any>(null);
  const employeeProfile = {
    ...profile,
    avatar: profile?.employee?.user?.avatar,
    ...profile?.employee?.user
  };

  useEffect(() => {
    const {
      employee,
      another_degrees,
      education_informations,
      work_experiences,
      CV,
      ...rest
    } = profile;
    const online_profile = profile?.another_degrees
      ? {
          ...rest,
          another_degrees: profile?.another_degrees,
          education_informations: profile?.education_informations,
          work_experiences: profile?.work_experiences
        }
      : null;
    const attached_document = profile?.CV
      ? {
          ...rest,
          CV: profile?.CV
        }
      : null;
    const newProfile = {
      personal_information: {
        ...profile?.employee?.user,
        isMarried: profile?.employee?.isMarried
      },
      online_profile: online_profile,
      attached_document: attached_document
    };
    setFormattedProfile(newProfile);
  }, [JSON.stringify(profile)]);

  const handleSelectProfile = (profile) => {
    setSelectedProfile(formattedProfile);
  };

  return (
    <>
      <EmployeeCard
        profile={employeeProfile}
        setSelectedProfile={handleSelectProfile}
      />
      <ProfileCardDialog
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />
    </>
  );
}

export default ProfileCard;
