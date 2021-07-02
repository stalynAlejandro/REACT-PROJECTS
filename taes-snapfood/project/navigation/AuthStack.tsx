import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen/'
import { RegisterScreen } from '../screens/RegisterScreen'
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen'

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack