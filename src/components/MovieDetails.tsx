import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

interface MovieDetailsProps {
  title: string;
  year: string;
  poster: string;
  plot: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  title,
  year,
  poster,
  plot,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
      <View style={styles.posterContainer}>
        <Image
          source={{ uri: poster }}
          style={styles.poster}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.plot}>{plot}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  year: {
    fontSize: 20,
    marginBottom: 20,
    color: '#666',
  },
  posterContainer: {
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  poster: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  plot: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#555',
  },
});

export default MovieDetails;
