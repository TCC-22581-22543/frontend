import { Login } from '@Screens/Login'; // fazer importação de telas dessa maneria "@Pasta/arquivo"
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <Text>Carregando...</Text>
  }

  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider> 
  )
}

