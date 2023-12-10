import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { AttachedDocument } from '../model';

interface AttachedDocumentState {
  profile: Partial<AttachedDocument>;
}

const initialState: AttachedDocumentState = {
  profile: {}
};

export const DocumentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Partial<AttachedDocument>>) => {
      state.profile = { ...state.profile, ...action.payload };
    }
  }
});

export const { setProfile } = DocumentSlice.actions;

export const selectDocument = (state: RootState) => state.document;

export const docReduce = DocumentSlice.reducer;
