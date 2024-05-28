import { useEffect, useMemo, useState } from 'react';
import { ProfileShowType } from '../model';
import { EmployeeCard, ProfileCardDialog } from './ProfileCardComponent';
import useQueryEmployee from '../hook/useQueryEmployee';
import useQueryEmployeeById from '../hook/useQueryEmployeeById';
import useEmployee from '../hook/useEmployee';

export const formatProfile = (profile: ProfileShowType) => {
  const {
    employee,
    another_degrees,
    education_informations,
    work_experiences,
    CV,
    applicationType,
    userId,
    ...rest
  } = profile;
  const online_profile = another_degrees
    ? {
        ...rest,
        another_degrees,
        education_informations,
        work_experiences
      }
    : null;
  const attached_document = profile?.CV
    ? {
        ...rest,
        CV
      }
    : null;
  const newProfile = {
    userId,
    applicationType: applicationType,
    personal_information: {
      ...employee?.user,
      isMarried: employee?.isMarried
    },
    online_profile,
    attached_document
  };
  return newProfile;
};

function ProfileCard({ profile }: { profile: ProfileShowType }) {
  const { employeeDetail, setEmployeeDetail, resetEmployeeDetail } =
    useEmployee();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formattedProfile, setFormattedProfile] = useState(null);
  const employeeProfile = {
    ...profile,
    avatar: profile?.employee?.user?.avatar,
    ...profile?.employee?.user
  };

  const { profile: profileData } = useQueryEmployeeById(
    selectedProfile?.userId,
    {
      type: selectedProfile?.applicationType
    }
  );

  const onClose = () => {
    setSelectedProfile(null);
    setFormattedProfile(null);
    resetEmployeeDetail();
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
        profile={employeeProfile}
        setSelectedProfile={setSelectedProfile}
      />
      <ProfileCardDialog
        selectedProfile={formattedProfile}
        setSelectedProfile={onClose}
      />
    </>
  );
}

export default ProfileCard;
