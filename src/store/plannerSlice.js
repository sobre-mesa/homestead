import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'containers',
  initialState: {
    breadCrumbs: [],
    openContainer: {}
  },
  reducers: {
    containerSelected: (state, action) => {
      let payload = action.payload;
      state.breadCrumbs =  [...state.breadCrumbs, { id: payload.id, name: payload.name }];
      if(payload.name){
        state.openContainer = payload;
      } else {
        state.openContainer = {...payload, name: "Home"};
      }

    },
    breadCrumbSelected: (state, action) => {
      state.openContainer = action.payload.container;
      state.breadCrumbs = state.breadCrumbs.slice(0, action.payload.bc + 1);
    }

  },
});

export const currentContainer = state => {
  return state.containers.openContainer
};

export const currentBreadCrumbs = state => {
  return state.containers.breadCrumbs
};

export const { containerSelected, breadCrumbSelected } = slice.actions;

export default slice.reducer;
