import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes, PublicRoutes } from './app.routes';
import { useAuth } from '../Hooks/auth'; 
import LoadingScreen from '@Screens/LoadingScreen';


const Routes: React.FC = () => {
  
  const { user, loading } = useAuth();

  if(loading){ 
    return <LoadingScreen/>
  }

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes /> }
    </NavigationContainer>
  );
};

export default Routes;