import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './app.routes';

const Routes: React.FC = () => {
   
  return (
    <NavigationContainer>
      <PublicRoutes /> 
    </NavigationContainer>
  );
};

export default Routes;