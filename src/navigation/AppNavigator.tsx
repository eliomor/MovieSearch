import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const headerStyle: StackNavigationOptions['headerStyle'] = {
  backgroundColor: '#3f51b5', 
};

const headerTitleStyle: StackNavigationOptions['headerTitleStyle'] = {
  color: '#fff', 
  fontSize: 20, 
  fontWeight: 'bold', 
};

const headerTintColor: StackNavigationOptions['headerTintColor'] = '#fff'; 
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle,
          headerTitleStyle,
          headerTintColor,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Search Movies' }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{ title: 'Movie Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
