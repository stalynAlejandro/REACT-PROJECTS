import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SavedScreen } from '../screens/SavedScreen'
import { SavedFolderScreen } from '../screens/SavedFolderScreen'

const Stack = createStackNavigator();

function SaveStack() {
  return (
    <Stack.Navigator initialRouteName={"Save"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="SavedFolder" component={SavedFolderScreen} />   
    </Stack.Navigator>
  );
}

export default SaveStack