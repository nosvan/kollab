import { createSlice } from '@reduxjs/toolkit';
import { ClassSliceState, Semester } from 'lib/types/class';

const initialState: ClassSliceState = {
  class: {
    id: -999,
    name: '',
    school_name: '',
    semester: Semester.NA,
    description: '',
    owner_id: -999,
    created_at: ''
  },
  classes: [],
  items: []
};

export const classSlice = createSlice({
  name: 'class',
  initialState: initialState,
  reducers: {
    setCurrentClass: (state, action) => {
      state.class = action.payload
    },
    setClasses: (state, action) => {
      state.classes = action.payload
    },
    setCurrentClassAndClasses: (state, action) => {
      state.classes = action.payload
      // if current group is empty, set to first group in classes
      if(state.class.id === -999){
        state.class = state.classes[0]
      }
      // check if current class is in classes, if not set to first class
      if(!state.classes.find(cla => cla.id === state.class.id)){
        state.class = state.classes[0]
      }
    },
    setClassItems: (state, action) => {
      state.items = action.payload
    },
    setAdditionalClassItems: (state, action) => {
      state.items = [...state.items, ...action.payload]
    }
  },
});

export const { setCurrentClass, setClasses, setCurrentClassAndClasses, setClassItems, setAdditionalClassItems } =
classSlice.actions;

export default classSlice.reducer;
