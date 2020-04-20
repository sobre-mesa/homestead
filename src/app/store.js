import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import impactReducer from '../pages/second_impact/impactSlice';
import cookReducer from '../pages/pot_cook/cookSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    secondImpact: impactReducer,
    potcook: cookReducer
  },
});
