import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import walletReducer from '../features/walletSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    // counter: counterReducer,
  },
});
