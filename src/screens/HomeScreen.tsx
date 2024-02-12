import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';

import {MovieItem, SearchBar, Loader} from '../components';
import {searchMovies} from '../api/MovieService';
import {RootStackParamList} from '../navigation/AppNavigator';
import {useDebouncedValue} from '../hooks/useDebounce';
import {selectMovie} from '../redux/moviesSlice';

const HomeScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'MovieDetail'>>();
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

  const {data, isLoading, isError, error} = useQuery(
    ['searchMovies', debouncedSearchTerm],
    () => searchMovies(debouncedSearchTerm),
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  const handleMoviePress = (movie: any) => {
    dispatch(selectMovie(movie.imdbID));
    navigation.navigate('MovieDetail');
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchTerm} onChangeText={handleSearch} />
      {isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error as string}</Text>
        </View>
      ) : isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={data?.Search || []}
          keyExtractor={item => item.imdbID}
          renderItem={({item}) => (
            <MovieItem
              title={item.Title}
              year={item.Year}
              poster={item.Poster}
              onPress={() => handleMoviePress(item)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
});

export default HomeScreen;
