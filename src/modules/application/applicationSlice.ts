import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { Application } from './model';

interface ApplicationState {
  data: Partial<Application[]>;
}

// Define the initial state using that type
const initialState: ApplicationState = {
  data: []
};

export const ApplicationSlice = createSlice({
  name: 'applicationList',
  initialState,
  reducers: {
    setApplicationList: (
      state,
      action: PayloadAction<Partial<Application[]>>
    ) => {
      state.data = [...state.data, ...action.payload];
    },
    resetApplicationList: (state) => {
      state.data = [];
    }
  }
});

export const { setApplicationList, resetApplicationList } =
  ApplicationSlice.actions;

export const selectApplicationList = (state: RootState) =>
  state.applicationList;

export const applicationReducer = ApplicationSlice.reducer;
