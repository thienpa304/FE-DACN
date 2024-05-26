import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

interface CompanyListState {
  data: number[];
}

// Define the initial state using that type
const initialState: CompanyListState = {
  data: []
};

export const CompanyListSlice = createSlice({
  name: 'companyListState',
  initialState,
  reducers: {
    setCompanyList: (state, action: PayloadAction<number[]>) => {
      state.data = [...action.payload];
    },
    resetCompanyList: (state) => {
      state.data = [];
    }
  }
});

export const { setCompanyList, resetCompanyList } = CompanyListSlice.actions;

export const selectCompanyList = (state: RootState) => state.companyList;

export const companyListReducer = CompanyListSlice.reducer;
