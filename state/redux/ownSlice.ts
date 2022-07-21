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
    item_type: ItemType.GENERAL,
    date_tz_sensitive: undefined,
    date_tz_sensitive_end: undefined,
    time_sensitive_flag: false,
    date_range_flag: false,
    date_tz_insensitive: undefined,
    permission_level: VisibilityLevel.PUBLIC,
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
    },
    resetOwnState: (state) => {
      state.item = {...initialState.item};
      state.items = [];
      state.viewOwnItemMode = false;
    }
  },
});

export const { setCurrentOwnItem, setOwnItems, setAdditionalOwnItems, setViewOwnItemMode, resetOwnState} =
ownSlice.actions;

export default ownSlice.reducer;
