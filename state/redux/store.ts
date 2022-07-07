import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import groupReducer from './groupSlice'
import classReducer from './classSlice';
import personalReducer from './personalSlice';

export const store = configureStore({
  reducer: {
    user_store: userReducer,
    group_store: groupReducer,
    class_store: classReducer,
    personal_store: personalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch