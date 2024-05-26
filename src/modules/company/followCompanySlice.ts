import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

interface FollowCompanyState {
  data: number[];
}

// Define the initial state using that type
const initialState: FollowCompanyState = {
  data: []
};

export const FollowCompanySlice = createSlice({
  name: 'followCompanyState',
  initialState,
  reducers: {
    setFollowCompanyList: (state, action: PayloadAction<number[]>) => {
      state.data = [...action.payload];
    },
    resetFollowCompanyList: (state) => {
      state.data = [];
    }
  }
});

export const { setFollowCompanyList, resetFollowCompanyList } =
  FollowCompanySlice.actions;

export const selectFollowCompanyList = (state: RootState) =>
  state.followCompanyList;

export const followCompanyReducer = FollowCompanySlice.reducer;
