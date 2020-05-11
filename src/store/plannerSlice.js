import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'containers',
  initialState: {
    openContainer: {}
  },  
  reducers: {
    setContainer: (state, action) => {
      let payload = action.payload;
      state.openContainer  = payload;
    },
  },
});

export const getContainer = state => {
  return state.containers.openContainer
};

export const { setContainer } = slice.actions;

export default slice.reducer;
