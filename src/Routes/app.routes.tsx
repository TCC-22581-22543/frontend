import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@Screens/Login';
import { Main } from '@Screens/Main';
import UserProfile from '@Screens/UserProfile';
import Register from '@Screens/Register';
import SuccessScreen from '@Screens/SuccessScreen';
import { Annotation } from '@Screens/Annotation';
import AnimalSearchScreen from '@Screens/AnimalSearchScreen';
import SpeciesInfo from '@Screens/SpeciesInfo';

const Stack = createNativeStackNavigator();

export const PublicRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
  </Stack.Navigator>
);

export const PrivateRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Dashboard"
  >
    <Stack.Screen name="Main" component={Main}/>
    <Stack.Screen name='Profile' component={UserProfile} />
    <Stack.Screen name='Notes' component={Annotation} />
    <Stack.Screen name='Search' component={AnimalSearchScreen} />
    <Stack.Screen name='Species' component={SpeciesInfo} />
  </Stack.Navigator>
);
