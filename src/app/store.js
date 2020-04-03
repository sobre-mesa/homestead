import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import impactReducer from '../pages/second_impact/impactSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    secondImpact: impactReducer
  },
});
