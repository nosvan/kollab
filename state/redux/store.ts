import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import groupReducer from './groupSlice'
import classReducer from './classSlice';

export const store = configureStore({
  reducer: {
    user_store: userReducer,
    group_store: groupReducer,
    class_store: classReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch