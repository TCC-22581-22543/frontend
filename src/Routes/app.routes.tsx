import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@Screens/Login';
import { Main } from '@Screens/Main';
import UserProfile from '@Screens/UserProfile';
import Register from '@Screens/Register';
import SuccessScreen from '@Screens/SuccessScreen';
import { ViewNotes } from '@Screens/ViewNotes';
import AnimalSearchScreen from '@Screens/AnimalSearchScreen';
import SpeciesInfo from '@Screens/SpeciesInfo';
import { CreateNote } from '@Screens/CreateNote';
import { News } from '@Screens/News';

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
    <Stack.Screen name='Notes' component={ViewNotes} />
    <Stack.Screen name='Search' component={AnimalSearchScreen} />
    <Stack.Screen name='Species' component={SpeciesInfo} />
    <Stack.Screen name='CreateNote' component={CreateNote} />
    <Stack.Screen name='News' component={News} />
  </Stack.Navigator>
);
