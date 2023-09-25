import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

export interface SnackBarState {
  massage: string;
  open: boolean;
  duration: number;
  type: AlertColor;
}
interface AppState {
  snackbar: SnackBarState;
}

// Define the initial state using that type
const initialState: AppState = {
  snackbar: {
    massage: 'hello',
    open: false,
    duration: 5000,
    type: 'success'
  }
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<Partial<SnackBarState>>) => {
      state.snackbar = { ...state.snackbar, ...action.payload };
    }
  }
});

export const { setSnackbar } = AppSlice.actions;

export const selectSnackbar = (state: RootState) => state.app.snackbar;

export default AppSlice.reducer;
