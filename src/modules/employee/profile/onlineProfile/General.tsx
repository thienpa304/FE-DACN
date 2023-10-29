import { useState, useEffect } from 'react';
import GeneralForm from '../GeneralForm';
import { OnlineProfile } from '../../model';
import useMutateOnlineProfile from './hooks/useMutateOnlineProfile';
import useUpdateOnlineProfile from './hooks/useMutateOnlineProfileUpdate';
import useQueryOnlineProfile from './hooks/useQueryOnlineProfile';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import { convertStringToObjectList } from 'src/utils/inputOutputFormat';

export default function OnlineGeneral() {
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
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
    if (onlineProfile?.userId) onUpdateData(data);
    else onSaveData(data);
  };

  const formatInputData = (data: OnlineProfile) => ({
    ...data,
    profession: convertStringToObjectList(data?.profession, options.profession),
    workAddress: convertStringToObjectList(data?.workAddress, options.workAddress)
  });

  useEffect(() => {
    setNewData(formatInputData(onlineProfile));
  }, [onlineProfile]);

  return (
    <GeneralForm
      isLoading={isLoading}
      data={newData}
      options={options}
      onSubmit={handleSaveProfile}
    />
  );
}
