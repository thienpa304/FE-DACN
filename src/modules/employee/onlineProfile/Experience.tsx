import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import TextField from 'src/components/TextField';
import Autocomplete from 'src/components/Autocomplete';
import { useForm } from 'react-hook-form';
import { OnlineProfile, User } from '../../users/model';
import { useApp } from 'src/modules/app/hooks';
import useMutateUserData from '../../users/hooks/useMutateUserHook';
import useUpdateOnlineProfile from '../hooks/useMutateOnlineProfile';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import {
  EXPERIENCE,
  POSITION_LEVEL,
  WORKING_FORM,
  DEGREE,
  PROFESSION,
  WORK_AT
} from 'src/constants/option';

export default function General() {
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [professionOptions, setProfessionOptions] = useState([]);
  const [workAddressOptions, setWorkAddressOptions] = useState([]);
  const { onSaveData } = useMutateUserData('General');
  const { onUpdateData } = useUpdateOnlineProfile();

  const handleEdit = () => setIsReadOnly(false);

  const defaultUserValues = {
    ...onlineProfile
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<OnlineProfile>({
    defaultValues: defaultUserValues
  });

  useEffect(() => {
    setSelectedId(onlineProfile?.userId || null);

    const professionList = onlineProfile?.profession
      ?.split(', ')
      .map((label) => PROFESSION.find((option) => option.label === label));
    const workAddressList = onlineProfile?.workAddress
      ?.split(', ')
      .map((label) => WORK_AT.find((option) => option.label === label));
    setProfessionOptions(professionList || []);
    setWorkAddressOptions(workAddressList || []);

    reset(defaultUserValues);
  }, [onlineProfile]);

  const handleSaveProfile = async (data) => {
    setLoading(true);
    debugger;
    let professionString: string;
    if (typeof data.profession === 'string') {
      professionString = data.profession;
    } else if (Array.isArray(data.profession)) {
      professionString = data.profession
        .map((option) => option.label)
        .join(', ');
    }
    let workAddressString: string;
    if (typeof data.workAddress === 'string') {
      workAddressString = data.workAddress;
    } else if (Array.isArray(data.workAddress)) {
      workAddressString = data.workAddress
        .map((option) => option.label)
        .join(', ');
    }
    const newData = {
      ...data,
      profession: professionString,
      workAddress: workAddressString
    };
    debugger;
    if (selectedId) onUpdateData(newData);
    else onSaveData(newData);
    setLoading(false);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(defaultUserValues);
    setIsReadOnly(true);
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Container id=""></Container>
      )}
    </>
  );
}
