import { useState, useEffect } from 'react';
import GeneralForm from '../../../GeneralForm';
import { OnlineProfile } from '../../../model';
import useMutateOnlineProfile from '../../hooks/useMutateOnlineProfile';
import useUpdateOnlineProfile from '../../hooks/useMutateUpdateOnlineProfile';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import {
  convertStringToObjectList,
  findObjectKey
} from 'src/utils/inputOutputFormat';
import useOnlineProfile from '../../hooks/useOnlineProfile';
import { Degree } from 'src/constants/enum';

export default function OnlineGeneral() {
  const { profile, setProfile } = useOnlineProfile();
  const { onSaveData } = useMutateOnlineProfile();
  const { onUpdateData } = useUpdateOnlineProfile();
  const [newData, setNewData] = useState(null);

  const options = {
    profession: PROFESSION,
    workAddress: WORK_AT,
    positionLevel: POSITION_LEVEL,
    degree: DEGREE,
    experience: EXPERIENCE,
    workingForm: WORKING_FORM
  };

  const handleSaveProfile = (data: OnlineProfile) => {
    const degree = findObjectKey(data.degree, Degree);

    const newData = data;
    // setProfile(newData);
    if (profile?.userId) onUpdateData(newData);
    else onSaveData(newData);
  };

  const formatInputData = (data: OnlineProfile) => ({
    ...data,
    profession: convertStringToObjectList(data?.profession, options.profession),
    workAddress: convertStringToObjectList(
      data?.workAddress,
      options.workAddress
    )
  });

  useEffect(() => {
    setNewData(formatInputData(profile as OnlineProfile));
  }, [profile]);

  return (
    <GeneralForm
      data={newData}
      options={options}
      onSubmit={handleSaveProfile}
    />
  );
}
