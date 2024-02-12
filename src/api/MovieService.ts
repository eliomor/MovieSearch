import axios from 'axios';
import { SearchMoviesResponse, MovieDetailsResponse } from '../types';

const API_KEY = '69821bbe';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (
  searchTerm: string,
): Promise<SearchMoviesResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`,
    );
    return response.data;
  } catch (error) {
    return {
      Error: 'Failed to search movies due to a network or server issue.',
    };
  }
};

export const getMovieDetails = async (
  imdbID: string,
): Promise<MovieDetailsResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`,
    );
    return response.data;
  } catch (error) {
    return {
      Error:
        'Failed to retrieve movie details due to a network or server issue.',
    };
  }
};
