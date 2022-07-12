import { createSlice } from '@reduxjs/toolkit';
import { Category, ItemType } from 'lib/types/item';
import { OwnSliceState } from 'lib/types/own';

const initialState: OwnSliceState = {
  item: {
    id: -999,
    name: '',
    description: '',
    category: undefined,
    category_id: undefined,
    item_type: ItemType.OTHER,
    due_date: undefined,
    date: undefined
  },
  items: [],
  viewOwnItemMode: false,
};

export const ownSlice = createSlice({
  name: 'class',
  initialState: initialState,
  reducers: {
    setCurrentOwnItem: (state, action) => {
      state.item = action.payload
    },
    setOwnItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalOwnItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
    setViewOwnItemMode: (state, action) => {
      state.viewOwnItemMode = action.payload
    }
  },
});

export const { setCurrentOwnItem, setOwnItems, setAdditionalOwnItems, setViewOwnItemMode} =
ownSlice.actions;

export default ownSlice.reducer;
