import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState = {
  selectedMovieId: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    selectMovie(state, action) {
      state.selectedMovieId = action.payload;
    },
  },
});

export const {selectMovie} = movieSlice.actions;

export const selectedMovieIdSelector = (state: RootState) =>
  state.movie.selectedMovieId;

export default movieSlice.reducer;
