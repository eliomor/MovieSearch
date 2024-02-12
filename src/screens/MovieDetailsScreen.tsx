import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

import {MovieDetails, Loader} from '../components';
import {getMovieDetails} from '../api/MovieService';
import {selectedMovieIdSelector} from '../redux/moviesSlice';

const MovieDetailScreen: React.FC = () => {
  const movieId = useSelector(selectedMovieIdSelector);
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery(['movie', movieId], () => getMovieDetails(movieId));

  if (!movieId) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No movie selected</Text>
      </View>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error as string}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {movie && (
        <MovieDetails
          title={movie.Title || ''}
          year={movie.Year || ''}
          poster={movie.Poster || ''}
          plot={movie.Plot || ''}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
});

export default MovieDetailScreen;
