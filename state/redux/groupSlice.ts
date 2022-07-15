import { createSlice } from '@reduxjs/toolkit';
import { GroupSliceState } from 'lib/types/group';
import { Category, ItemType, VisibilityLevel } from 'lib/types/item';

const initialState: GroupSliceState = {
  group: {
    id: -999,
    name: '',
    description: '',
    owner_id: -999,
    created_at: new Date()
  },
  groups: [],
  item: {
    id: -999,
    name: '',
    category: Category.GROUP,
    category_id: -999,
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
  viewGroupItemMode: false,
};

export const groupSlice = createSlice({
  name: 'group',
  initialState: initialState,
  reducers: {
    setCurrentGroup: (state, action) => {
      state.group = action.payload
    },
    setGroups: (state, action) => {
      state.groups = action.payload
    },
    setCurrentGroupAndGroups: (state, action) => {
      if(action.payload.length > 0) {
        state.groups = action.payload
        // if current group is empty, set to first group in groups
        if(state.group.id === -999){
          state.group = state.groups[0]
        }
        // check if current group is in groups, if not set to first group
        if(!state.groups.find(group => group.id === state.group.id)){
          state.group = state.groups[0]
        }
      } else {
        state.group = initialState.group
      }
    },
    setCurrentGroupItem: (state, action) => {
      state.item = action.payload
    },
    setGroupItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalGroupItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
    setViewGroupItemMode: (state, action) => {
      state.viewGroupItemMode = action.payload
    }
  },
});

export const { setCurrentGroup, setGroups, setCurrentGroupAndGroups, setCurrentGroupItem, setGroupItems, setAdditionalGroupItems, setViewGroupItemMode } =
groupSlice.actions;

export default groupSlice.reducer;
