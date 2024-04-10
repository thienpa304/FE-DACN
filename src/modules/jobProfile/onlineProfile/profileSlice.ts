import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { OnlineProfile } from '../model';

interface OnlineProfileState {
  profile: Partial<OnlineProfile>;
}

const initialState: OnlineProfileState = {
  profile: {}
};

export const OnlineProfileSlice = createSlice({
  name: 'onlineProfile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Partial<OnlineProfile>>) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    resetProfile: (state) => {
      state.profile = {};
    }
  }
});

export const { setProfile, resetProfile } = OnlineProfileSlice.actions;

export const selectOnlineProfile = (state: RootState) => state.onlineProfile;

export const onlineProfileReduce = OnlineProfileSlice.reducer;
