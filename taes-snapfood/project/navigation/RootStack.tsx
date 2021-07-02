import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen/'

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}