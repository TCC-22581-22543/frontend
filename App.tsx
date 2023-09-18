import { Login } from '@Screens/Login'; // fazer importação de telas dessa maneria "@Pasta/arquivo"
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';
import { Main } from '@Screens/Main';
import { Pesquisar } from "@Screens/Pesquisar";
import { Annotation } from "@Screens/Annotation";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import Register from '@Screens/Register';
import UserProfile from '@Screens/UserProfile';
import AnimalSearchScreen  from '@Screens/AnimalSearchScreen';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <UserProfile/>
=======
      <Annotation/>
>>>>>>> 9d282f637e1a987d3d286a360d353d77d0b36d9a
    </ThemeProvider> 
  )
}

