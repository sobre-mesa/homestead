import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'potcook',
  initialState: {
    seconds: 60,
    total: 60
  },
  reducers: {
    decrement: state => {
      state.seconds -= 1;
    },
    set: (state, action) => {
      state.seconds += action.payload;
    },
  },
});

export const {decrement, set } = slice.actions;

export const selectSecs = state => state.potcook.seconds;
export const selectTotal = state => state.potcook.total;

export default slice.reducer;
