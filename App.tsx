import { Login } from '@Screens/Login'; // fazer importação de telas dessa maneria "@Pasta/arquivo"
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';
import {Main} from '@Screens/Main';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import Register from '@Screens/Register';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider> 
  )
}

