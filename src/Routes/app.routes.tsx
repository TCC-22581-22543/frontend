import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@Screens/Login';
import { Main } from '@Screens/Main';
import UserProfile from '@Screens/UserProfile';

const Stack = createNativeStackNavigator();

export const PublicRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Main" component={Main}/>
    <Stack.Screen name='Profile' component={UserProfile} />
  </Stack.Navigator>
);
