import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { ProfileShowType } from './model';

interface EmployeeState {
  employeeDetail: Partial<ProfileShowType>;
}

// Define the initial state using that type
const initialState: EmployeeState = {
  employeeDetail: {}
};

export const EmployeeSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<Partial<ProfileShowType>>) => {
      state.employeeDetail = { ...action.payload };
    },
    resetEmployee: (state) => {
      state.employeeDetail = {};
    }
  }
});

export const { setEmployee, resetEmployee } = EmployeeSlice.actions;

export const selectEmployee = (state: RootState) => state.employee;

export const employeeReducer = EmployeeSlice.reducer;
