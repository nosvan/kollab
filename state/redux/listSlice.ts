import { createSlice } from '@reduxjs/toolkit';
import { ListSliceState } from 'lib/types/list';
import { Category, ItemType, VisibilityLevel } from 'lib/types/item';

const initialState: ListSliceState = {
  list: {
    id: -999,
    name: '',
    description: '',
    owner_id: -999,
    created_at: new Date()
  },
  lists: [],
  item: {
    id: -999,
    name: '',
    category: Category.LIST,
    category_id: -999,
    item_type: ItemType.GENERAL,
    date_tz_sensitive: new Date(),
    date_tz_sensitive_end: new Date(),
    time_sensitive_flag: false,
    date_range_flag: false,
    date_tz_insensitive: undefined,
    permission_level: VisibilityLevel.PUBLIC,
    created_by_id: -999,
    last_modified_by_id: -999,
  },
  items: [],
  viewListItemMode: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    setCurrentList: (state, action) => {
      state.list = action.payload
    },
    setLists: (state, action) => {
      state.lists = action.payload
    },
    setCurrentListAndLists: (state, action) => {
      if(action.payload.length > 0) {
        state.lists = action.payload
        state.list = action.payload[0]
      } else {
        state.list = initialState.list
      }
    },
    setCurrentListItem: (state, action) => {
      state.item = action.payload
    },
    setListItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalListItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
    setViewListItemMode: (state, action) => {
      state.viewListItemMode = action.payload
    }
  },
});

export const { setCurrentList, setLists, setCurrentListAndLists, setCurrentListItem, setListItems, setAdditionalListItems, setViewListItemMode } =
listSlice.actions;

export default listSlice.reducer;
