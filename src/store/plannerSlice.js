import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'containers',
  initialState: {
    breadCrumbs: [],
    openContainer: {},
    modalIsOpen: false,
    modalType: null
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
    toggleModal: (state, action) => {
      state.modalType = action.payload;
      state.modalIsOpen = !state.modalIsOpen;
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

export const modalType = state => {
  return state.containers.modalType
};

export const modalIsOpen = state => {
  return state.containers.modalIsOpen
};

export const currentBreadCrumbs = state => {
  return state.containers.breadCrumbs
};

export const { containerSelected, breadCrumbSelected, toggleModal } = slice.actions;

export default slice.reducer;
