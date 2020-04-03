import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'secondImpact',
  initialState: {
    savings: {
      nv: 30000,
      eb: 10000
    },
  },
  reducers: {
    incrementByAmount: (state, action) => {
      let payload = action.payload;
      if(payload.account == "nv"){
        state.savings.nv += payload.amount;
      }
      else if(payload.account == "eb"){
        state.savings.eb += payload.amount;
      }
    },
    decrementByAmount: (state, action) => {
      let payload = action.payload;
      if(payload.account == "nv"){
        state.savings.nv -= payload.amount;
      }
      else if(payload.account == "eb"){
        state.savings.eb -= payload.amount;
      }
    },
  },
});

export const nvSavings = state => state.secondImpact.savings.nv;
export const ebSavings = state => state.secondImpact.savings.eb;

export const { incrementByAmount, decrementByAmount } = slice.actions;

export default slice.reducer;
