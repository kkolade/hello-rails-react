import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greetingSlice';

export default configureStore({
  greeting: greetingReducer,
});
