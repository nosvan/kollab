import { createSlice } from '@reduxjs/toolkit';
import { ItemType, VisibilityLevel } from 'lib/types/item';
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
    start_time: undefined,
    end_time: undefined,
    permission_level: VisibilityLevel.PUBLIC,
    date: undefined,
    created_by_id: -999,
    last_modified_by_id: -999,
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
