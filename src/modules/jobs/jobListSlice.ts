import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { FollowJobType, Job } from '../jobs/model';

interface JobListState {
  data: number[];
}

// Define the initial state using that type
const initialState: JobListState = {
  data: []
};

export const JobListSlice = createSlice({
  name: 'jobListState',
  initialState,
  reducers: {
    setJobList: (state, action: PayloadAction<number[]>) => {
      state.data = [...action.payload];
    },
    resetJobList: (state) => {
      state.data = [];
    }
  }
});

export const { setJobList, resetJobList } = JobListSlice.actions;

export const selectJobList = (state: RootState) => state.jobList;

export const jobListReducer = JobListSlice.reducer;
