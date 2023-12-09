import { useState, useEffect } from 'react';
import GeneralForm from '../../GeneralForm';
import { OnlineProfile } from '../../../model';
import useMutateOnlineProfile from '../hooks/useMutateOnlineProfile';
import useUpdateOnlineProfile from '../hooks/useMutateUpdateOnlineProfile';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import { convertStringToObjectList } from 'src/utils/inputOutputFormat';
import useOnlineProfile from '../hooks/useOnlineProfile';

export default function OnlineGeneral() {
  const { profile } = useOnlineProfile();
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
    if (profile?.userId) onUpdateData(data);
    else onSaveData(data);
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
