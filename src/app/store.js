import { configureStore } from '@reduxjs/toolkit';
import impactReducer from '../pages/financial/financialSlice';
import cookReducer from '../pages/pot_cook/cookSlice';

export default configureStore({
  reducer: {
    secondImpact: impactReducer,
    potcook: cookReducer
  },
});
