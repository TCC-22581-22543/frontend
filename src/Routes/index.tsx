import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes, PublicRoutes } from './app.routes';
import { useAuth } from '../Hooks/auth'; 


const Routes: React.FC = () => {
  
  const { user, loading } = useAuth();
  
  if(loading){ 
    return <Text>Carregando...</Text>
  }

  return (
    <NavigationContainer>
      {user ?  <PrivateRoutes /> : <PublicRoutes /> }
    </NavigationContainer>
  );
};

export default Routes;