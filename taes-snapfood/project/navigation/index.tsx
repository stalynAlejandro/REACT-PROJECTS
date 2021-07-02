import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { AppStackParamList } from '../types';

import AuthStack from './AuthStack'
import ConfigStack from './ConfigStack'

import RootBottomTabNavigator from './RootBottomTabNavigator';
import SearchStack from './SearchStack'
import SaveStack from './SaveStack'

import LinkingConfiguration from '../screens/LinkingConfiguration';
import { RecipeScreen } from '../screens/RecipeScreen'
import { UploadImages } from '../screens/UploadImages';
import { EditProfileScreen } from '../screens/EditProfileScreen';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<AppStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Auth"} screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Search" component={SearchStack} />
      <Stack.Screen name="Root" component={RootBottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Config" component={ConfigStack} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Saved" component={SaveStack} />
      <Stack.Screen name="UploadImages" component={UploadImages} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}