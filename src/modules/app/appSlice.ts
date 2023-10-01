import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { Role, User } from '../users/model';

export interface SnackBarState {
  massage: string;
  open: boolean;
  duration: number;
  type: AlertColor;
}
interface AppState {
  snackbar: SnackBarState;
  user: Partial<User>;
  accessToken?: string;
}

// Define the initial state using that type
const initialState: AppState = {
  snackbar: {
    massage: 'This is massage',
    open: false,
    duration: 5000,
    type: 'success'
  },
  user: {
    role: Role.ADMIN
  },
  accessToken: null
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<Partial<SnackBarState>>) => {
      state.snackbar = { ...state.snackbar, ...action.payload };
    },
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = { ...state.user, ...action.payload };
    },
    resetUser: (state) => {
      state.user = {};
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    }
  }
});

export const { setSnackbar, setAccessToken, setUser, resetUser } =
  AppSlice.actions;

export const selectSnackbar = (state: RootState) => state.app.snackbar;
export const selectUser = (state: RootState) => state.app.user;
export const selectAccessToken = (state: RootState) => state.app.accessToken;

export default AppSlice.reducer;
