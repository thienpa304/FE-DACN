import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { WorkExperience } from '../../model';
import {
  selectWorkExperience,
  setWorkExperience as setWorkExperienceAction
} from '../workExperienceSlice';

const useWorkExperience = () => {
  const { work_experiences } = useAppSelector(selectWorkExperience);
  const dispatch = useAppDispatch();

  const setWorkExperience = (data) => {
    dispatch(setWorkExperienceAction(data));
  };

  return {
    work_experiences,
    setWorkExperience
  };
};

export default useWorkExperience;
