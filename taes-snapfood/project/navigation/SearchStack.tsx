import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen'
import { Search2Screen } from '../screens/Search2Screen'
import { SearchedScreen } from '../screens/SearchedScreen'

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator initialRouteName={"Search"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Search2" component={Search2Screen} />
      <Stack.Screen name="Searched" component={SearchedScreen} />      
    </Stack.Navigator>
  );
}

export default SearchStack