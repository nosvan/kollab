import { createSlice } from '@reduxjs/toolkit';
import { UserSliceState } from 'lib/types/user';

const initialState: UserSliceState = {
  user:  {
    id: -999,
    first_name: '',
    last_name: '',
    email: '',
    isLoggedIn: false,
    currentTab: ''
  },
  items: [],
  createNewTypeMode: false,
  createNewItemMode: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserState: (state, action) => {
      state.user = {...state.user, ...action.payload}
    },
    setLoggedInStatus: (state, action) => {
      state.user.isLoggedIn = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.user.currentTab = action.payload;
    },
    setUserItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalUserItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
    setCreateNewTypeMode: (state, action) => {
      state.createNewTypeMode = action.payload;
    },
    setCreateNewItemMode: (state, action) => {
      state.createNewItemMode = action.payload;
    } 
  },
});

export const { setUserState, setLoggedInStatus, setCurrentTab, setUserItems, setAdditionalUserItems, setCreateNewTypeMode, setCreateNewItemMode} =
  userSlice.actions;

export default userSlice.reducer;
