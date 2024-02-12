import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';

const store = configureStore({
  reducer: {
    movie: moviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
