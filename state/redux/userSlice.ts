import { createSlice } from '@reduxjs/toolkit';
import { UserState } from 'lib/types/user';

const initialState = {
  user:  {
    id: -999,
    first_name: '',
    last_name: '',
    email: '',
    isLoggedIn: false,
    currentTab: ''
  }
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
  },
});

export const { setUserState, setLoggedInStatus, setCurrentTab } =
  userSlice.actions;

export default userSlice.reducer;
