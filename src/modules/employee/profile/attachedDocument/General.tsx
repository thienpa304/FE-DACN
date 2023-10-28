import { useState, useEffect } from 'react';
import GeneralForm from '../GeneralForm';
import { AttachedDocument } from '../../model';
import { useApp } from 'src/modules/app/hooks';
import useQueryAttachedDocument from './hooks/useQueryAttachedDocument';
import useMutateAttachedDocument from './hooks/useMutateAttachedDocument';
import useMutateUpdateAttachedDocument from './hooks/useMutateUpdateAttachedDocument';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';
import { GetFileByUserId, DocumentType } from 'src/common/firebaseService';

export default function AttachedGeneral(props) {
  const { user } = useApp();
  const { attachedDocument, isLoading } = useQueryAttachedDocument();
  const { onSaveData } = useMutateAttachedDocument();
  const { onUpdateData } = useMutateUpdateAttachedDocument();
  const [newData, setNewData] = useState(null);
  const [employeeCV, setEmployeeCV] = useState('');

  const options = {
    profession: PROFESSION,
    workAddress: WORK_AT,
    positionLevel: POSITION_LEVEL,
    degree: DEGREE,
    experience: EXPERIENCE,
    workingForm: WORKING_FORM
  };

  const handleSaveProfile = (data: AttachedDocument) => {
    const newData = { ...data, CV: employeeCV };
    if (attachedDocument?.userId) onUpdateData(newData);
    else onSaveData(newData);
  };

  const formattedData = (data: AttachedDocument) => ({
    ...data,
    profession: (data?.profession || '')
      .split(', ')
      .map((label) =>
        options.profession.find((option) => option.label === label)
      ),
    workAddress: (data?.workAddress || '')
      .split(', ')
      .map((label) =>
        options.workAddress.find((option) => option.label === label)
      )
  });

  const handleGetFileCV = async () => {
    const fileUrl = await GetFileByUserId(
      user?.userId,
      DocumentType.cvType
    ).catch(() => '');
    setEmployeeCV(fileUrl);
  };

  useEffect(() => {
    setNewData(formattedData(attachedDocument));
    handleGetFileCV();
  }, [attachedDocument]);

  useEffect(() => {
    handleGetFileCV();
  }, [user]);

  return (
    <>
      {!isLoading && (
        <GeneralForm
          isLoading={isLoading}
          data={newData}
          options={options}
          onSubmit={handleSaveProfile}
        />
      )}
    </>
  );
}
