import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from './src/pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailSongPage from './src/pages/DetailSongPage';
import FavsPage from './src/pages/FavsPage';
import SearchPage from './src/pages/SearchPage';
import FilterListPage from './src/pages/FilterListPage';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Detail"
          component={DetailSongPage}
        />
        <Stack.Screen
          name="Favs"
          component={FavsPage}
        />
        <Stack.Screen
          name="Search"
          component={SearchPage}
        />
        <Stack.Screen
          name="Filter"
          component={FilterListPage}
        />      
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203337',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
