import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { Job } from './model';

interface JobState {
  itemDetail: Partial<Job>;
}

// Define the initial state using that type
const initialState: JobState = {
  itemDetail: {}
};

export const JobSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setItemDetail: (state, action: PayloadAction<Partial<Job>>) => {
      state.itemDetail = { ...state.itemDetail, ...action.payload };
    },
    resetItemDetail: (state) => {
      state.itemDetail = {};
    }
  }
});

export const { setItemDetail, resetItemDetail } = JobSlice.actions;

export const selectJob = (state: RootState) => state.job;

export default JobSlice.reducer;
