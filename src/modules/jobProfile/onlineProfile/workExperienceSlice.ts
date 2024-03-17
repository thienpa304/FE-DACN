import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { WorkExperience } from '../model';

// interface WorkExperienceState {
//   work_experiences: Partial<WorkExperience>;
// }

const initialState = {
  work_experiences: []
};

export const WorkExperienceSlice = createSlice({
  name: 'workExperiences',
  initialState,
  reducers: {
    setWorkExperience: (state, action) => {
      state.work_experiences = [...action.payload];
    }
  }
});

export const { setWorkExperience } = WorkExperienceSlice.actions;

export const selectWorkExperience = (state: RootState) => state.workExperiences;

export const workExperienceReduce = WorkExperienceSlice.reducer;
