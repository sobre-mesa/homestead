import { configureStore } from '@reduxjs/toolkit';
import plannerSlice from './plannerSlice'
export default configureStore({
  reducer: {
    containers: plannerSlice,
  },
});
