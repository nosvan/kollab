import { createSlice } from '@reduxjs/toolkit';
import { GroupSliceState } from 'lib/types/group';

const initialState: GroupSliceState = {
  group: {
    id: -999,
    name: '',
    description: '',
    owner_id: -999,
    created_at: ''
  },
  groups: [],
  items: []
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
        if(!state.groups?.find(group => group.id === state.group.id)){
          state.group = state.groups[0]
        }
      } else {
        state.group = initialState.group
      }
    },
    setGroupItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalGroupItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    }
  },
});

export const { setCurrentGroup, setGroups, setCurrentGroupAndGroups, setGroupItems, setAdditionalGroupItems } =
groupSlice.actions;

export default groupSlice.reducer;
