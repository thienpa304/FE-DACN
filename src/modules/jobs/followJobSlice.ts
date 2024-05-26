import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { FollowJobType } from './model';

interface FollowJobState {
  data: number[];
}

// Define the initial state using that type
const initialState: FollowJobState = {
  data: []
};

export const FollowJobSlice = createSlice({
  name: 'followJobState',
  initialState,
  reducers: {
    setFollowJobList: (state, action: PayloadAction<number[]>) => {
      state.data = [...action.payload];
    },
    resetFollowJobList: (state) => {
      state.data = [];
    }
  }
});

export const { setFollowJobList, resetFollowJobList } = FollowJobSlice.actions;

export const selectFollowJobList = (state: RootState) => state.followJobList;

export const followJobReducer = FollowJobSlice.reducer;
