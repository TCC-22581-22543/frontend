import { Login } from '@Screens/Login'; // fazer importação de telas dessa maneria "@Pasta/arquivo"
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';
import { Main } from '@Screens/Main';
import { ViewNotes } from "@Screens/ViewNotes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import Routes from './src/Routes';
import { AuthProvider } from './src/Hooks/auth';
import { CreateNote } from '@Screens/CreateNote';

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
      <AuthProvider>       
        <Routes />      
      </AuthProvider>   
    </ThemeProvider> 
  )
}

