import { createSlice } from '@reduxjs/toolkit';
import { PersonalSliceState } from 'lib/types/personal';

const initialState: PersonalSliceState = {
  item: null,
  items: [],
  viewPersonalItemMode: false,
};

export const personalSlice = createSlice({
  name: 'class',
  initialState: initialState,
  reducers: {
    setCurrentPersonalItem: (state, action) => {
      state.item = action.payload
    },
    setPersonalItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalPersonalItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
    setViewPersonalItemMode: (state, action) => {
      state.viewPersonalItemMode = action.payload
    }
  },
});

export const { setCurrentPersonalItem, setPersonalItems, setAdditionalPersonalItems, setViewPersonalItemMode} =
personalSlice.actions;

export default personalSlice.reducer;
